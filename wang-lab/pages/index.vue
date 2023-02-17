<template>

  <el-container direction="vertical">
    <myheader index="/"></myheader>

    <el-main class="main-content">
      <el-row :gutter="0" type="flex" justify="center">
        <el-col :xs="20" :sm="18" :md="16" :lg="14" :xl="14">

          <div class="group-wrapper animated bounceInDown">
            <el-image class="group-bg" fit="fill" src="/group2.jpg"></el-image>
            <el-image class="group-ph" src="/group2.jpg"></el-image>
          </div>
          

          <el-divider></el-divider>

          <h1>Cloud Computing and Storage Laboratory of Shenzhen Advanced Institute</h1>
          <p style="text-indent:2em">
            Cloud Computing and Storage Laboratory of Shenzhen Advanced Institute (SIAT-CCSLab) is affiliated to the Cloud Computing Center of the Digital Institute of Shenzhen Institute of Advanced Technology, Chinese Academy of Sciences, and is committed to cutting-edge technologies including cloud computing, virtualization, big data analysis and processing, storage and other fields, and has accumulated rich technical achievements and experimental data. CCSLab is led by researcher Wang Yang, with 1 postdoctoral fellow, 2 doctors, several masters of the university, and a number of internship students from universities such as the University of Science and Technology of China.
            Graduates go to the University of Rochester and well-known domestic Internet companies such as Ali, Tencent, Huawei, and Baidu.
          </p>


          <el-divider><i class="el-icon-lock"></i></el-divider>

          <h1>Research directions</h1>

          <ul>
            <li>
              <h4>Security and acceleration technologies for system virtualization in cloud environments</h4>
              <p>
                Engineering practice of hybrid consensus scheme, new consensus protocol, performance improvement of consensus protocol, etc. 
                The hybrid consensus scheme is mainly based on the latest achievements of academia to propose innovations and improvements. The engineering practices of the new consensus protocol include consensus protocols based on randomization algorithms and consensus protocols based on DAG patterns. The performance improvement of consensus protocol refers to the parallel processing of traditional consensus protocol, while maintaining the correctness and activity of the protocol, and efficiently using the performance of multi-core machines, so that the performance of the traditional BFT protocol is improved and applied to other consensus protocols.
              </p>
            </li>

            <li>
              <h4>Edge-cloud collaboration technologies and methods for machine learning</h4>
              <p>
                The research mainly focuses on the design and application of privacy protection, setup zero knowledge proof, and fully homomorphic encryption algorithms under the account model. The privacy protection under the account model needs to meet the requirements at the same time: the relevant parties and authorized members can see the clear text of the information; Unrelated parties can only see meaningless encrypted information from the ledger; The consensus node can directly judge the legitimacy of the transaction on the encrypted information and perform corresponding operations on the account. 
                Setup-free zero-knowledge proofs are an improvement over the existing zk-SNARK scheme where setup is required. Fully homomorphic encryption refers to any operation on ciphertext that is originally feasible in plaintext without decryption, which is an improvement of the homomorphic encryption algorithm.
              </p>
            </li>

            <li>
              <h4>Blockchain technology</h4>
              <p>
                Research on new blockchain architectures based on trusted hardware. 
                The basic idea is to provide a general, high-performance solution based on trusted hardware to solve problems such as confidentiality protection and computational complexity.
              </p>
            </li>

            <li>
              <h4>Big data framework optimization method based on new storage and network technology </h4>
              <p>
                Including cross-chain data retrieval and cross-chain asset exchange. 
                Cross-chain data retrieval can provide regulators with stronger supervision capabilities under multi-chain conditions; 
                Cross-chain asset exchange is a decentralized trust atomic swap.
              </p>
            </li>

          </ul>
          <h1>Representative projects</h1>
          <ul>
            <li>
              <h4>Human-machine-object integration cloud computing architecture and platform data-driven application adaptation and self-evolution technology（National Key R&D Program "Cloud Computing Big Data" Special Project, 2018--2021）</h4>
              <p>
                This project solves the three major problems and challenges of multi-dimensional programmability of cloud-network resources, dynamic discovery of cloud-network resources, and trusted collaboration of cloud-network resources, and is the bottleneck of human-machine-object integration as a new generation of information technology. This project proposes a software-defined method for human-machine-object integration, presents a set of software-defined infrastructure for human-machine-object integration, and establishes the basic theory, method and related technical system and specifications of software-defined for human-machine-object integration.
            Main research content: 

            （1）Based on the software-defined method, a cloud-network resource collaborative management architecture and performance optimization method for application adaptation are constructed.

            （2）Sense and collect resource usage data from specific scenario applications; With the help of fusion and analysis methods, establish dynamic characteristics and prediction mechanisms of application resource usage.

            （3）According to the dynamic operating environment and variable user requirements in specific scenarios, a distributed directory service is built to realize the tracking and management of mobile devices, and the computing technology based on the collaborative execution of cloud, network and end is completed by means of task migration and offloading.
              </p>
            </li>

            <li>
              <h4>Research on key technologies and platforms for intelligent driving driven by intelligence（Macao Key R&D Special Program , 2017-01--2020-12）</h4>
              <p>
                At present, the core functional requirements of multi-vehicle intelligent collaboration include: interconnection of any vehicle, any time and any place; Full-time and spatial dynamic traffic information collection and fusion; Effective coordination of people and roads - collaborative safety (divided into active safety and passive safety), collaborative control (divided into active control and passive control).
                Research content:

                （1）Driving scene recognition technology that integrates radar perception and visual perception

                （2）Scenario knowledge base construction technology based on knowledge graph and event graph

                （3）Driving rule generation and evolution technology based on reinforcement learning

                （4）Multi-vehicle collaboration technology based on cognitive architecture, including multi-vehicle formation motion planning, multi-vehicle collision avoidance, and multi-vehicle competition consensus
              </p>
            </li>

            <li>
              <h4>Security control and trusted enhanced management system based on large-scale dynamic infrastructure（Research and development in key areas of Guangdong Province , 2018--2021）</h4>
              <p>
                This project focuses on the key technologies of network security boundary control:

              （1）Research on the intelligent gateway technology based on security detection, automatically detect security problems through the system, and then implement the corresponding security isolation strategy based on the intelligent gateway

              （2）The active security management technology based on concurrent migration of virtual machines is studied, and the strategy of concurrent migration of multiple virtual machines in the case of security problems is designed to improve the overall security and reliability of the system.
              </p>
            </li>

            <li>
              <h4>Research on data and service migration of mobile cloud computing in spatiotemporal big data environment（National nature on the project , 2017--2020）</h4>
              <p>
                Data and service migration is an effective way to reduce latency and network load and improve the quality of mobile cloud services. Faced with the diversification, real-time, and huge number of user access modes of cloud services in the big data environment, the current migration strategies and methods face serious challenges.

                Objective: To propose an optimization method for data and service migration based on access spatiotemporal estimation, so that the deployment of shared data and services can match and adapt to the access patterns of mobile users, and complete the requested services in the least cost.
              </p>
            </li>

          </ul>
          <h1>Representative papers</h1>
          <ul>
            <li>
              <h4>Cost-Driven Data Caching in the Cloud: An Analytic Approach, IEEE International Conference on Computer Communications</h4>
            </li>

            <li>
              <h4>Sova: A Software-Defined Autonomic Framework for Virtual Network Allocations</h4>
            </li>

            <li>
              <h4>Deadlock Avoidance Algorithms for Recursion-Tree Modeled Requests in Parallel Executions.</h4>
            </li>

            <li>
              <h4>Algorithmics of Cost-Driven Computation Offloading in the Edge-Cloud Environment</h4>
            </li>

          </ul>

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
    components: {
      myheader,
      myfooter
    }
  }
</script>

<style scoped>


  h4 {
    margin: 20px 0 10px 0;
  }

  p {
    line-height: 1.7;
    color: #606266;
  }


  .group-wrapper {
    height: 400px;
    width: 100%;
    margin: 10px auto;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }

  .group-bg {
    height: 100%;
    width: 100%;
    position: absolute;
    filter: blur(20px);
    transform: scale(1.1);
  }

  .group-ph {
    height: 400px;
    width: 800px;
  }


</style>
