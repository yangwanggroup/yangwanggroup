<template>
  <el-container direction="vertical">
    <myheader index="/join"></myheader>
    <el-main class="main-content">
      <el-row :gutter="0" type="flex" justify="center">
        <el-col :xs="20" :sm="18" :md="16" :lg="14" :xl="12">

          <p>
            If you think you are good, the laboratory will allow you to learn to think independently to achieve a critical life, and if you think you are not good enough, the laboratory will make you confidently go to excellence.
          </p>

          <el-divider><i class="el-icon-user"></i></el-divider>

          <h1>join us</h1>

          <ul>
            <li>
              <p> CCSLab can recruit 2 master's students, 1 doctoral student and guest students from other universities every year, welcome all students to take the same examination or come to the internship, and sincerely invite universities, scientific research units and enterprises to come to exchange and cooperate.</p>
            </li>
          </ul>
          <h1>address</h1>

          <ul>
            <li>
              <p> 10th Floor, Building F, Shenzhen Institute of Advanced Technology, Chinese Academy of Sciences, No. 1068 Xueyuan Avenue, Nanshan District, Shenzhen, Guangdong Province</p>
            </li>
          </ul>
          <el-divider><i class="el-icon-message"></i></el-divider>

          Email:

          <el-link href="mailto:yang.wang1@siat.ac.cn" target="_blank">yang.wang1@siat.ac.cn</el-link>

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
    name: "about",
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
    text-indent: 2em
  }


</style>
