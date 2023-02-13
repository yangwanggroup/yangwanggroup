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

          <h1>深圳先进院云计算与存储实验室</h1>
          <p style="text-indent:2em">
            深圳先进院云计算与存储实验室 (SIAT-CCSLab) 隶属于中国科学院深圳先进技术研究院数字所云计算中心，致力于包括云计算、虚拟化、大数据分析与处理、存储等领域在内的前沿技术，积累了丰富的技术成果和实验数据。CCSLab由王洋研究员带头指导，拥有博士后1名，博士2名，本校硕士若干以及来自中科大等高校的多名实习研究生。
            毕业生去向包括美国罗切斯特大学以及阿里、腾讯、华为、百度等国内知名互联网企业。
          </p>


          <el-divider><i class="el-icon-lock"></i></el-divider>

          <h1>研究方向</h1>

          <ul>
            <li>
              <h4>云环境下的系统虚拟化的安全与加速技术</h4>
              <p>
                针对混合共识方案、新型共识协议的工程实践、共识协议的性能提升等。混合共识方案主要基于学术界的最新成果提出创新与改进。新型共识协议的工程实践包括基于随机化算法的共识协议和基于DAG模式的共识协议。共识协议的性能提升，是指通过并行化处理传统共识协议，在维持协议正确性与活性的同时，高效利用多核机器的性能，进而使得传统BFT协议的性能获得提升，并适用于其他共识协议。
              </p>
            </li>

            <li>
              <h4>面向机器学习的边云协同技术和方法</h4>
              <p>
                研究主要围绕账户模型下的隐私保护、无setup零知识证明、全同态加密算法的设计与应用。账户模型下的隐私保护需要同时满足：相关方和有权限的成员可看到信息的明文；不相关方从账本上只能看到无意义的加密信息；共识节点能够在加密信息上直接对交易合法性做判断，并对账户做相应操作。无setup零知识证明是对现有的zk-SNARK方案需要setup情形的改进。全同态加密是指在不解密前提下对密文进行任何原本在明文可行的运算，是同态加密算法的改进。
              </p>
            </li>

            <li>
              <h4>区块链技术</h4>
              <p>
                研究基于可信硬件的新型区块链架构。其基本思路是基于可信硬件，为解决机密保护和计算复杂性问题等提供通用的高性能解决方案。
              </p>
            </li>

            <li>
              <h4>基于新型存储和网络技术的大数据框架优化方法</h4>
              <p>
                包括跨链数据检索和跨链资产交换。跨链数据检索可以为监管方在多链的条件下提供更强大的监管能力；跨链资产交换是去中心信任的原子交换。
              </p>
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
