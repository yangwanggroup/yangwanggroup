<template>
  <el-container direction="vertical">
    <myheader index="/"></myheader>

    <el-main class="main-content">
      <el-row :gutter="0" type="flex" justify="center">
        <el-col :xs="20" :sm="18" :md="16" :lg="14" :xl="14">

          <div class="group-wrapper animated bounceInDown">
            <el-image class="group-bg" fit="fill" src="/Siat-Cloud.png"></el-image>
          </div>
          
          <el-divider></el-divider>

          <h1>发表论文</h1>

          <h3>2021</h3>

          <ul>
            <li v-for="item in papers2021" class="item animated zoomIn">
              {{item}}
            </li>
          </ul>

          <h3>2020</h3>

          <ul>
            <li v-for="item in papers2020" class="item animated zoomIn">
              {{item}}
            </li>
          </ul>

          <h3>2019</h3>

          <ul>
            <li v-for="item in papers2019" class="item animated zoomIn">
              {{item}}
            </li>
          </ul>

          <h3>2018</h3>

          <ul>
            <li v-for="item in papers2018" class="item animated zoomIn">
              {{item}}
            </li>
          </ul>

          <h3>2017</h3>

          <ul>
            <li v-for="item in papers2017" class="item animated zoomIn">
              {{item}}
            </li>
          </ul>

          <h3>2016</h3>

          <ul>
            <li v-for="item in papers2016" class="item animated zoomIn">
              {{item}}
            </li>
          </ul>

                   <el-divider><i class="el-icon-copy-document"></i></el-divider>

        </el-col>
      </el-row>
    </el-main>


    <myfooter></myfooter>
  </el-container>
</template>
<script>
  import myheader from '~/components/myheader.vue'
  import myfooter from '~/components/myfooter.vue'

  export default {
    name: "achievements",
    data() {
      return {
        papers2021: [
          'Huan Tang, Yang Wang, Xi Chen “Network-flow Algorithms for Virtual Service Placements in Mobile Edge Network”, IEEE the 6th International Conference on Cloud Computing and Big Data Analytics (ICCCBDA), Chengdu, China, April 24-26, 2021.',
          'Yang Wang, Yong Zhang, Xinxin Han, Pengfei Wang, Chengzhong Xu, Joseph Horton, and Joseph Culberson, “Cost-Driven Data Caching in the Cloud: An Analytic Approach”, IEEE International Conference on Computer Communications (IEEE INFOCOM2021), May 10-13 2021 (CCF A).',
          'Xinxin Han, Guichen Gao, Yang Wang, Yong Zhang, “Online Data Caching in Edge Computing”, Concurrency and Computation: Practice and Experience (CPE), 2021 (CCF C).',
          'Min Li, Yang Wang,Junbiao Dai, and Qingshan Jiang,“A Data Self-Contained DNA Storage System” Nature Scientifific Report, 2020 (Major Revision).',
          'Wen Cheng, Yuqi Zou, Lingfang Zeng, Yang Wang, “Hercules: Intelligent Coupling of Dual-Mode Flash Memory and Hard Disk Drive”, The Computer Journal 64(2),Pages 224–235, February 2021 (CCF B).',
          'Zhiyong Ye, Yang Wang, Shuibing He, Chengzhong Xu, and Xianhe Sun,“Sova: A Softwaredefined Autonomic Framework for Virtual Network Allocations”, IEEE Transactions on Parallel and Distributed Systems (IEEE TPDS), 32(1):116-129, 2021 (CCF A).',
          'Yang Wang, Hao Dai, Xinxin Han, Pengfei Wang, Yong Zhang, Chengzhong Xu. “Cost-Driven Data Caching in Content Delivery Edges”, IEEE Transactions on Mobile Computing (IEEE TMC), 2021 (CCF A) (Major Revision).',
          'Yuhang Liu, Xian-He Sun, Yang Wang, and Yugang Bao, “HCDA: from Computational Thinking to a Generalized Thinking Paradigm”, Communications of the ACM (ACM CACM), 64(5) 2021 (CCF A).',
        ],
        papers2020: [
          'Hongshuai Ren, Yang Wang, Chengzhong Xu, and Xi Chen “SMig-RL: An Evolutionary Migration Framework for Cloud Services Based on Deep Reinforcement Learning”, ACM Transactions on Internet Technology (ACM TOIT), 20(4):43:1-43:18, 2020 (CCF B).',
          'Yang Wang, Shan Cao, Hongshuai Ren, Jianjun Li, Kejiang Ye, and Chengzhong Xu, “Towards Cost-Effective Service Migration in Mobile Edge: A Q-Learning Approach”, Journal of Parallel and Distributed Computing (JPDC), Volume 146, December 2020, Pages 175-188 (CCF B).',
          'Wen Cheng, Tao Guo, Lingfang Zeng, Yang Wang, Lars Nagel, Tim S¨uß, and Andr´e Brinkmann, “Improving LSM-trie Performance by Adopting Parallel Search”, Software: Practice and Experience (SPE), 50:1952–1965, 2020 (CCF B).',
          'Wen Cheng, Ran Cai, Lingfang Zeng, Dan Feng, Andr´e Brinkmann, and Yang Wang, “IMCI: A Efficient Fingerprint Retrieval Approach based on 3D Stacked Memory”, Science China, Information Sciences (SCI Letter), 63(7), 2020 (CCF B).',
          'Mingzhe Du, Yang Wang, Kejiang Ye, and Chengzhong Xu, “Algorithmics of Cost-Driven Computation Offloading in the Edge”, IEEE Transactions on Computers (IEEE TC), 69(10): 1519-1532, October, 2020 (CCF A).',
          'Xinxin Han, Guichen Gao, Yang Wang, Hing-Fung Ting, Yong Zhang “Data Caching Based Transfer Optimization in Large Scale Networks” the Joint International Conference PDCATPAAP 2020, Shenzhen, China, December 28-30, 2020.',
          'Xiaopeng Fan, Xinchun Liu, Yang Wang, Youjun Wang, Jiang Li, “Optimizing Mulit-way Theta Join for Data Skew in Sub-second Stream Computing”, the 26th IEEE International Conference on Parallel and Distributed Systems (ICPADS 2020) December 2-4, 2020, Hong Kong (CCF C).',
          'Tongzheng Sun, Jingpan Xiong, Yang Wang, Xiaopeng Fan, Xi Chen, and Chengzhong Xu, “RS-pCloud: A Peer-to-Peer Based Edge-Cloud System for Fast Remote Sensing Image Processing”, IEEE Edge 2020, October 19 – 23, 2020, Best Student Paper Award.',
          'Ziyue Hu, Xiaopeng Fan, Yang Wang, Chengzhong Xu “FastThetaJoin: A Multi-way Data Stream Theta-Join Range Constraint Optimization Method”, 20th International Conference on Algorithms and Architectures for Parallel Processing (ICA3PP 2020), October 2 – 4, New York, USA (CCF C).',
          'Zhi Liu, Haowen Wu, Tongxin Bai, Yang Wang, Chengzhong Xu, “DuoSQL: Towards Elastic Data Warehousing with Decoupled Data Management and Computation”, 4th International Conference on Cloud and Big Data Computing (ICCBDC2020). August 26-28, 2020, Liverpool, United Kingdom.',
          'Xinxin Han, Guichen Gao, Li Ning, Yang Wang, and Yong Zhang, “Approximation Algorithm for the Offloading Problem in Edge Computing”, The 15th international conference on algorithms, systems, and applications of wireless networks (WASA2020), Sept. 13-15, 2020, Qingdao, China (CCF C).',
          'Ziyue Hu, Menglu Wu, Xiaopeng Fan, Yang Wang, Chengzhong Xu, “MCF: Towards Window-based Multiple Cuckoo Filters in Stream Computing”, International Conference on Big Data (Bigdata2020), June 22 - 26, 2020, Honolulu, Hawaii, USA.',
        ],
        papers2019: [
          'Kejiang Ye, Haiying Shen, Yang Wang, Cheng-Zhong Xu, “Consolidation of Multi-tier Workloads in the Cloud: Profiling, Modeling and Optimization”. IEEE Transactions on Cloud Computing (IEEE TCC), 2019 (CCF C).',
          'Yang Wang, Shuibing He, Xiaopeng Fan, Chengzhong Xu and Xianhe Sun, “On Cost-Driven Collaborative Data Caching: A New Model Approach”, IEEE Transactions on Parallel and Distributed Systems (IEEE TPDS), 30(3): 662-676, March 2019 (CCF A). ',
          'Dong Huang, Xiaopeng Fan, Yang Wang, Shuibing He, and Chengzhong Xu, “DP-Greedy: A Two-Phased Caching System for Mobile Cloud Services”, IEEE Cluster 2019, September 23-26, 2019, Albuquerque, New Mexico, USA (CCF B).',
          'Jinpeng Wang, Yang Wang, Hekang Wang, Kejiang Ye, Chengzhong Xu, Shuibing He, and Lingfang Zeng, “Towards Cluster-wide Deduplication based on Ceph”, the 14th IEEE International Conference on Networking, Architecture and Storage (NAS 2019), August 15– 17, 2019, Enshi, China.',
          'Mingzhe Du, Yang Wang, Chengzhong Xu, “On Cost-Driven Computation Offloading in Edge Computing, A New Model Approach”, the 19th Annual IEEE/ACM International Symposium in Cluster, Cloud, and Grid Computing (CCGrid 2019), May 14-17, 2019, Larnaca, Cyprus (CCF C).',
        ],
        papers2018: [
          'Lingfang Zeng, Wei Shi, Fan Ni, Song Jiang, Xiaopeng Fan, Chengzhong Xu and Yang Wang, “SHMstor: A Scalable Hadoop/MapReduce-based Storage System for Small-Write Efficiency”, International Conference on Ubiquitous Intelligence and Computing (UIC 2018), Oct. 8-11, 2018, Guangzhou, China (CCF C), Best Paper Award.',
          'Shuibing He, Xian-he Sun, Yang Wang, and Chengzhong Xu, “A Migratory Heterogeneity Aware Data Layout Scheme for Parallel File Systems”, the 32nd IEEE International Parallel and Distributed Processing Symposium (IPDPS 2018), May 21 – 25, 2018, Vancouver, Canada (CCF B).',
        ],
        papers2017: [
          'Yang Wang, Shuibing He, Xiaopeng Fan, Chengzhong Xu, Joseph Horton, and Joseph Culberson, “Data Caching in Next Generation Mobile Cloud Services”, the 46th International Conference on Parallel Processing (ICPP-2017), Aug. 14-17, 2017, Bristol, UK (CCF B).',
          'Shan Cao, Chengzhong Xu and Yang Wang, “Service Migrations in the Cloud for Mobile Accesses: A Reinforcement Learning Approach”, the 12th IEEE International Conference on Networking, Architecture and Storage (NAS 2017), Aug. 7-9, 2017, Shenzhen, China.',
          'Yang Wang and Kenneth B. Kent, “A Region-Based Approach to Pipeline Parallelism in Java Programs on Multicores”, the 25th Euromicro International Conference on Parallel, Distributed and Network-based Processing (Euro-PDP’17), March 6-8, 2017, St. Peterburg, Russia.',
          'Lingfang Zeng, Zehao Zhang, Yang Wang, Dan Feng, and Kenneth B. Kent,“CosaFS: A Cooperative Shingle-Aware File System”, ACM Transactions on Storage (ACM TOS), 13(4): 34:1–34:23, Nov. 2017 (CCF A).',
          'Lingfang Zeng, Yang Wang, Kenneth B. Kent, and Ziliang Xiao, “Naplus: A Software Distributed Shared Memory for Virtual Clusters in the Cloud”, Software: Practice and Experience (SPE), 47(9):1201-1220, 2017 (CCF B).',
          'Lingfang Zeng, Yang Wang, Xiaopeng Fan, and Chengzhong Xu, “Raccoon: A Novel Network I/O Allocation Framework for Workload-Aware VM Scheduling in Virtual Environments”, IEEE Transactions on Parallel and Distributed Systems (IEEE TPDS), 28(9): 2651 2662, 2017 (CCF A).',
          'Yang Wang, Bharadwaj Veeravalli, Chen-Khong Tham, Shuibing He, and Chengzhong Xu,“On Service Migrations in the Cloud for Mobile Accesses: A Distributed Approach”, ACM Transactions on Autonomous and Adaptive System (ACM TAAS), 12(2): 6:1-6:25, May 2017 (CCF B).',
          'Menglan Hu, Jun Luo, Yang Wang, and Bharadwaj Veeravalli, “Adaptive Online Scheduling of Task Graphs with Dynamic Resilience”, IEEE Transactions on Computers (IEEE TC), (66)1: 17-23, January, 2017 (CCF A).',
          'Shuibing He, Yang Wang, Xian-He Sun, and Chengzhong Xu, “HARL: Optimizing Parallel File Systems with Heterogeneity-Aware Data Layout”, IEEE Transactions on Computers (IEEE TC), 66(6): 1048-1060, 2017 (CCF A).',
          'Shuibing He, Yang Wang, Xian-He Sun, Chuanhe Huang, and Chengzhong Xu,“Heterogeneity Aware Collective I/O for Parallel I/O Systems with Hybrid HDD/SSD Servers”, IEEE Transactions on Computers (IEEE TC), 66(6): 1091-1098, June 2017 (CCF A).',
          'Shuibing He, Yang Wang, Zhen Li, Xian-He Sun, and Chengzhong Xu, “Cost-Aware Region-Level Data Placement in Multi-Tiered Parallel I/O Systems”, IEEE Transactions on Parallel and Distributed Systems (IEEE TPDS), 28(7): 1853-1865, July 2017 (CCF A).',
          'Lingfang Zeng, Shijie Xu, Yang Wang, Kenneth B. Kent, David Bremner, and Chengzhong Xu,“Towards Cost-Effective Replica Placements in Cloud Storage Systems with QoS-Awareness”, Software Practice and Experience (SPE), 47(6): 813–829, June 2017 (CCF B).',
          'Shuibing He, Yang Wang, Xian-He Sun, and Chengzhong Xu, “Using MinMax-Memory Claims to Improve In-Memory Workflow Computations in the Cloud”, IEEE Transactions on Parallel and Distributed Systems (IEEE TPDS), 28(4): 1202-1214, April 2017 (CCF A).,'
        ],
        papers2016: [
          'Shuibing He, Yang Wang, and Xian-He Sun, “Improving Performance of Parallel I/O Systems through Selective and Layout-Aware SSD Cache”, IEEE Transactions on Parallel and Distributed Systems (IEEE TPDS), 27(10): 2940-2952, Oct. 2016 (CCF A).',
          'Mengfei Peng, Wei Shi, Jean-Pierre Corriveau, Richard Pazzi, and Yang Wang, “Black Hole Search in Computer Networks: Achievements, Challenges and Future Directions”, Journal of Parallel and Distributed Systems (JPDC), 88(2): 1-15, February 2016 (CCF B).',
          'Shuibing He, Yan Liu, Yang Wang, and Xian-He Sun, “Enhancing Hybrid Parallel File System through Performance and Space-Aware Data layout ”, International Journal of High Performance Computing and Application (IJHPCA), 30(4): 396-410, Nov. 2016 (SCI).',
          'Shuibing He, Yang Wang, and Xian-He Sun, “Boosting Parallel File System Performance via Heterogeneity-Aware Selective Data Layout”, IEEE Transactions on Parallel and Distributed Systems (IEEE TPDS), 27(9): 2492-2505, Sept. 2016 (CCF A).',
          'Lingfang Zeng, Shijie Xu, and Yang Wang, “VMBackup: an efficient framework for online virtual machine image backup and recovery”, Concurrency and Computation: Practice and Experience (CPE) 28(9): 2630-2643, June 2016 (CCF C).',
          'Yang Wang, Wei Shi, and Kenneth B. Kent, “On Optimal Parallel Scheduling Algorithms for Well-Structured Workflows in the Cloud with Budget and Deadline Constraints”, Parallel Processing Letters (PPL), 26(2), 2016 (EI).',
          'Yan Liu, Bin Guo, Yang Wang, Wenle Wu, Zhiwen Yu, and Daqing Zhang, “TaskMe: MultiTask Allocation in Mobile Crowd Sensing”, Proceedings of the 2016 ACM International Joint Conference on Pervasive and Ubiquitous Computing (UbiComp’16), September 12-16, 2016, Heidelberg, Germany (CCF A).',
          'Yang Wang, Shuibing He, Fuji Ren, Lujia Wang, and Chengzhong Xu, “On Autonomous Service Migrations in the Cloud for Mobile Accesses”, the 22nd IEEE International Conference on Parallel and Distributed Systems (ICPADS 2016), December 13-16, 2016, Wuhan, China (CCF C).',
          'Xing Liu, Song Jiang, Yang Wang and Chengzhong Xu, “Hitchhike: an I/O Scheduler Enabling Writeback for Small Synchronous Writes”, the 7th International Conference on Cloud Computing and Big Data (CCBD 2016), November 16-18, 2016, Macau, China.',
          'Dayal Dilli, Kenneth B. Kent, Yang Wang, and Chengzhong Xu, “A Low Disk Bound Transaction Logging System for In-Memory Distributed Data Stores”, IEEE Cluster, Sept. 12-16, 2016, Taipei, China (CCF C), Best Paper Award Nominee.',
          'Yan Liu, Bin Guo, Wenle Wu, Zhiwen Yu, Yang Wang, and Daqing Zhang,“Towards a Multitask Worker Recruitment Framework for Mobile Crowdsensing”, the 14th ACM International Conference on Mobile Systems, Applications, and Services (MobiSys 2016), Jun. 25-30, 2016, Singapore (Poster Paper).',
          'Yang Wang, Shuibing He, Chengzhong Xu, and Xian-He Sun,“On MinMax-Memory Claims for Scientific Workflows in the In-Memory Cloud Computing”, The 36th IEEE International Conference on Distributed Computing Systems (ICDCS 2016), Pages 731-732, June 27-30, 2016, Nara, Japan (Poster Paper).',
          'Andrew Wylie, Wei Shi, Jean-Pierre Corriveau, and Yang Wang,“A Scheduling Algorithm for Hadoop MapReduce Workflows with Budget Constraints in the Heterogeneous Cloud”, The 5th International Workshop on Parallel and Distributed Computing for Large Scale Machine Learning and Big Data Analytics (ParLearning 2016) in conjunction with IPDPS 2016, May 27, 2016 Chicago, USA.',

        ]
      }
    },
    components: {
      myheader,
      myfooter
    }
  }
</script>

<style scoped>

  .item {
    margin: 10px 0;
  }


  li {
    color: #606266;
    text-align: justify;
    text-justify: inter-ideograph
  }


</style>


