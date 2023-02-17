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

          <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column
              prop="date"
              label="Date"
              width="180">
            </el-table-column>
            <el-table-column
              prop="title"
              label="Title"
              width="585">
            </el-table-column>
            <el-table-column
              prop="Leader"
              label="Leader">
            </el-table-column>
          </el-table>

          <el-divider><i class="el-icon-lock"></i></el-divider>

 

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
    },
    data() {
        return {
          tableData: [{
            date: '2022/06/30',
            title: 'PebblesDB: Building Key-Value Stores using Fragmented Log-Structured Merge Trees',
            Leader: 'ZiangNie'
          }, {
            date: '2022/06/23',
            title: 'Understanding and Dealing with Hard Faults in Persistent Memory Systems',
            address: 'Yongkang Li'
          }, {
            date: '2022/06/09',
            title: 'MOD: Minimally Ordered Durable Datastructures for Persistent Memory',
            Leader: 'Xiuyihang'
          }, {
            date: '2022/05/26',
            title: 'NVAlloc: Rethinking Heap Metadata Management in Persistent Memory Allocators',
            Leader: 'QiuyanLi'
          },
          {
            date: '2022/05/19',
            title: 'Efficient Deep Reinforcement Learning With Imitative Expert Priors for Autonomous Driving',
            Leader: 'LexiongHuang'
          },
          {
            date: '2022/05/12',
            title: 'On Removing Algorithmic Priority Inversion from Mission-critical Machine Inference Pipelines',
            Leader: 'HaoDai'
          },
          {
            date: '2022/04/28',
            title: 'Memory Leak Detection Algorithms in the Cloud-based Infrastructure',
            Leader: 'QihanCai'
          },
          {
            date: '2022/04/14',
            title: 'CEFS: Compute-Efficient Flow Scheduling for Iterative Synchronous Applications',
            Leader: 'JunhongChen'
          },
          {
            date: '2022/03/31',
            title: 'CosaFS: A Cooperative Shingle-Aware File System',
            Leader: 'MingyuanCai'
          },
          {
            date: '2022/03/22',
            title: 'Simultaneous Semantic Alignment Network for Heterogeneous Domain Adaptation',
            Leader: 'JiashuWu'
          },
          {
            date: '2022/03/15',
            title: 'You Only Run Once: Spark Auto-Tuning From a Single Run',
            Leader: 'LixingBao'
          },
          {
            date: '2022/03/08',
            title: 'Inferring and Asserting Distributed System Invariants',
            Leader: 'PengfeiWang'
          },
          {
            date: '2022/05/26',
            title: 'NVAlloc: Rethinking Heap Metadata Management in Persistent Memory Allocators',
            Leader: 'QiuyanLi'
          },
          {
            date: '2022/05/26',
            title: 'NVAlloc: Rethinking Heap Metadata Management in Persistent Memory Allocators',
            Leader: 'QiuyanLi'
          },
          {
            date: '2022/05/26',
            title: 'NVAlloc: Rethinking Heap Metadata Management in Persistent Memory Allocators',
            Leader: 'QiuyanLi'
          },
          {
            date: '2022/05/26',
            title: 'NVAlloc: Rethinking Heap Metadata Management in Persistent Memory Allocators',
            Leader: 'QiuyanLi'
          },
          {
            date: '2022/05/26',
            title: 'NVAlloc: Rethinking Heap Metadata Management in Persistent Memory Allocators',
            Leader: 'QiuyanLi'
          },
          {
            date: '2022/05/26',
            title: 'NVAlloc: Rethinking Heap Metadata Management in Persistent Memory Allocators',
            Leader: 'QiuyanLi'
          },
          {
            date: '2022/05/26',
            title: 'NVAlloc: Rethinking Heap Metadata Management in Persistent Memory Allocators',
            Leader: 'QiuyanLi'
          },
        ]
        }
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
