// @ts-check

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  docsSidebar: [
    {
      type: 'category',
      label: 'Home',
      items: [
        { type: 'doc', id: 'Home/Introduction', label: 'Introduction' },
        { type: 'doc', id: 'Home/Architecture', label: 'Architecture' }
      ],
    },
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        { type: 'doc', id: 'GettingStarted/Installation', label: 'Installation' },
        { type: 'doc', id: 'GettingStarted/Tutorials', label: 'Tutorials' },
      ],
    },
    {
      type: 'category',
      label: 'Concepts',
      items: [
        { type: 'doc', id: 'Concepts/Queue', label: 'Queue' },
        { type: 'doc', id: 'Concepts/podgroup', label: 'PodGroup' },
        { type: 'doc', id: 'Concepts/VolcanoJob', label: 'VolcanoJob' },
        { type: 'doc', id: 'Concepts/CronVolcanoJob', label: 'CronVolcanoJob' },
      ],
    },
    {
      type: 'category',
      label: 'Key Features',
      items: [
        { type: 'doc', id: 'KeyFeatures/NetworkTopologyAware', label: 'Network Topology Aware Scheduling' },
        { type: 'doc', id: 'KeyFeatures/MultiClusterScheduling', label: 'Multi-Cluster Scheduling' },
        { type: 'doc', id: 'KeyFeatures/cloudNativeColocation', label: 'Online and Offline Colocation' },
        { type: 'doc', id: 'KeyFeatures/LoadAwareDescheduling', label: 'LoadAwareDescheduling' },
        { type: 'doc', id: 'KeyFeatures/QueueResourceManagement', label: 'Queue Resource Management' },
        { type: 'doc', id: 'KeyFeatures/HierarchicalQueue', label: 'Hierarchical Queue' },
        { type: 'doc', id: 'KeyFeatures/UnifiedScheduling', label: 'Unified Scheduling' },
        { type: 'doc', id: 'KeyFeatures/GPUVirtualization', label: 'GPU Virtualization' },
      ],
    },
    {
      type: 'category',
      label: 'Ecosystem',
      items: [
        { type: 'doc', id: 'Ecosystem/FlinkOnVolcano', label: 'Flink on Volcano' },
        { type: 'doc', id: 'Ecosystem/KubeflowOnVolcano', label: 'Kubeflow on Volcano' },
        { type: 'doc', id: 'Ecosystem/MindSporeOnVolcano', label: 'MindSpore on Volcano' },
        { type: 'doc', id: 'Ecosystem/MPIOnVolcano', label: 'MPI on Volcano' },
        { type: 'doc', id: 'Ecosystem/PaddlePaddleOnVolcano', label: 'PaddlePaddle on Volcano' },
        { type: 'doc', id: 'Ecosystem/TensorFlowOnVolcano', label: 'TensorFlow on Volcano' },
        { type: 'doc', id: 'Ecosystem/SparkOnVolcano', label: 'Spark on Volcano' },
        { type: 'doc', id: 'Ecosystem/RayOnVolcano', label: 'Ray on Volcano' },
       
      ],
    },
    {
      type: 'category',
      label: 'Scheduler',
      items: [
        { type: 'doc', id: 'Scheduler/Overview', label: 'Overview' },
        { type: 'doc', id: 'Scheduler/Actions', label: 'Actions' },
        {
          type: 'category',
          label: 'Plugins',
          items: [
            { type: 'doc', id: 'Scheduler/Plugins/gang', label: 'Gang' },
            { type: 'doc', id: 'Scheduler/Plugins/binpack', label: 'Binpack' },
            { type: 'doc', id: 'Scheduler/Plugins/priority', label: 'Priority' },
            { type: 'doc', id: 'Scheduler/Plugins/drf', label: 'DRF' },
            { type: 'doc', id: 'Scheduler/Plugins/proportion', label: 'Proportion' },
            { type: 'doc', id: 'Scheduler/Plugins/tasktopology', label: 'Task-topology' },
            { type: 'doc', id: 'Scheduler/Plugins/predicates', label: 'Predicates' },
            { type: 'doc', id: 'Scheduler/Plugins/sla', label: 'SLA' },
            { type: 'doc', id: 'Scheduler/Plugins/tdm', label: 'TDM' },
            { type: 'doc', id: 'Scheduler/Plugins/numa_aware', label: 'Numa-aware' },
            { type: 'doc', id: 'Scheduler/Plugins/nodeorder', label: 'Nodeorder' },
          ],
        },
        { type: 'doc', id: 'Scheduler/Scenario', label: 'Scenario & Configuration' },
        
      ],
    },
    {
      type: 'category',
      label: 'CLI',
      items: [
        { type: 'doc', id: 'CLI/cli', label: 'Commandline' },
      ],
    },
    {
      type: 'category',
      label: 'Contribution',
      items: [
        { type: 'doc', id: 'Contribution/VolcanoContribution', label: 'Volcano Contribution' },
        { type: 'doc', id: 'Contribution/communitymembership', label: 'Community Membership' },
      ],
    },
    
    
  ],
};

export default sidebars;