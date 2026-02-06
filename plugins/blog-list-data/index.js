const path = require("path");
const fs = require("fs");

function extractFrontMatter(content) {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return {};
  const fm = {};
  const lines = match[1].split("\n");
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    const colon = line.indexOf(":");
    if (colon > 0) {
      const key = line.slice(0, colon).trim();
      let value = line.slice(colon + 1).trim();
   
      if (value === "" && key === "authors" && i + 1 < lines.length) {
        const next = lines[i + 1];
        if (next.trim().startsWith("- ")) {
          fm[key] = [next.trim().slice(2).trim()];
          i++;
        }
      } else {
        // Normalize outer quotes first (handles cases like authors: '["volcano"]')
        const unq = value.replace(/^['"]|['"]$/g, "");

        // Inline array like: authors: ["volcano"] or ['volcano'] or quoted JSON string
        if (unq.startsWith('[') && unq.endsWith(']')) {
          try {
            const arr = JSON.parse(unq);
            fm[key] = Array.isArray(arr) ? arr : [unq];
          } catch (err) {
            const items = unq
              .slice(1, -1)
              .split(",")
              .map((s) => s.trim().replace(/^['"]|['"]$/g, ""))
              .filter(Boolean);
            fm[key] = items;
          }
        }
        // Quoted string value or plain value
        else if (unq) {
          fm[key] = unq;
        }
      }
    }
    i++;
  }
  return fm;
}

module.exports = function (context, options) {
  const { siteDir, i18n } = context;
  const currentLocale = i18n?.currentLocale || "en";
  // For zh locale, use localized blog path; otherwise use default blog/
  const blogPath =
    currentLocale === "zh"
      ? path.join(siteDir, "i18n", "zh", "docusaurus-plugin-content-blog")
      : path.join(siteDir, "blog");

  return {
    name: "blog-list-data",
    async contentLoaded({ actions }) {
      const posts = [];
      if (!fs.existsSync(blogPath)) {
        actions.setGlobalData({ blogList: [] });
        return;
      }
    
      const files = fs
        .readdirSync(blogPath, { withFileTypes: true })
        .filter((f) =>
          f.isFile() && (f.name.endsWith('.md') || f.name.endsWith('.mdx')) && f.name !== '_index.md'
        )
        .map((f) => f.name);

      for (const file of files) {
        const filePath = path.join(blogPath, file);
        const content = fs.readFileSync(filePath, "utf-8");
        const fm = extractFrontMatter(content);

        let dateStr = fm.date || null;
        let timestamp = 0;
        if (dateStr) {
          const t = Date.parse(dateStr);
          if (!Number.isNaN(t)) {
            timestamp = t;
          } else {
            dateStr = null;
          }
        }
        if (!dateStr) {
          const stat = fs.statSync(filePath);
          timestamp = stat.mtimeMs; // ms since epoch
          dateStr = new Date(timestamp).toISOString();
        }

        const slug = file.replace(/\.mdx?$/, '');
        const permalink =
          currentLocale === "zh" ? `/zh/blog/${slug}` : `/blog/${slug}`;
        
        let authors = fm.authors ? (typeof fm.authors === "string" ? [fm.authors] : fm.authors) : [];
        authors = authors
          .map((a) => String(a).replace(/^[\[\\"']+|[\]\\\"']+$/g, "").trim())
          .filter((a) => a.length > 0);
        
        posts.push({
          id: slug,
          title: fm.title || "Untitled",
          date: dateStr,
          permalink,
          description: fm.description || "",
          authors,
          timestamp,
        });
      }

      // Sort posts by timestamp descending (latest first)
      posts.sort((a, b) => b.timestamp - a.timestamp);

      actions.setGlobalData({ blogList: posts });
    },
  };
};
