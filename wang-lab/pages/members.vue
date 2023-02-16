<template>
  <el-container direction="vertical">
    <myheader index="/members"></myheader>
    <el-main class="main-content">
      <el-row :gutter="0" type="flex" justify="center">
        <el-col :span="4" style="min-width: 240px">
          <div
            style="position: fixed;display: flex;justify-content: center;align-items:center;width: 200px;height: 500px">

            <ul class="ul-navi">
              <li :class="{active: active===0}" @click="scrollTo('#h1-teacher')">Mentor</li>
              <li :class="{active: active===1}" @click="scrollTo('#h1-master-2018')">Doctoral</li>
              <li :class="{active: active===2}" @click="scrollTo('#h1-master-2019')">Postgraduate</li>
             
              <li :class="{active: active===4}" @click="scrollTo('#h1-stu')">Undergraduates</li>
              
            </ul>

          </div>
        </el-col>


        <el-col :xs="18" :sm="16" :md="14" :lg="12" :xl="10"
                style="display: flex;justify-content: center;flex-wrap: wrap;" class="wrapper">

          <h1 id="h1-teacher">mentor</h1>

          <member
            name="Yang Wang"
            avatar="/avatar/wangyang.jpg"
            letter="W"
            position="Researcher"
            email="yang.wang1@siat.ac.cn"
            description="Ph.D. in Computer Science, University of Alberta, Canada, is currently a researcher and doctoral supervisor of Shenzhen Institute of Advanced Technology, Chinese Academy of Sciences, adjunct professor of Xiamen University, and Fulbright Scholar in Canada."
          ></member>

          <el-divider></el-divider>


          <h1 id="h1-master-2018">Doctor Degree</h1>


          <member
            name="Hao Dai"
            avatar="/avatar/daihao.jpg"
            letter="D"
            position="Ph.D.Class of 2019"
            email=""
            description="Formal student,Born in Xingyi, Guizhou in 1994, he holds a master's degree in engineering. He received his bachelor's and master's degrees in communication from Wuhan University of Technology from 2011 to 2017, and is currently pursuing a Ph.D. in computer science at the Shenzhen Institute of Advanced Technology, Chinese Academy of Sciences, with research topics such as edge-cloud collaborative optimization for edge AI."
          ></member>


          <member
            name="Jiashu Wu"
            avatar="/avatar/wujiashu.jpg"
            letter="W"
            position="Ph.D.Class of 2019"
            email=""
            description="Formal student,born in 1997 in Dongcheng District, Beijing, holds a master's degree in engineering. From 2015 to 2016, he studied software engineering at Beijing Institute of Technology, from 2016 to 2018, he studied at the University of Sydney in Australia with a bachelor's degree in computer science, financial mathematics and statistics, and from 2019 to 2020, he studied at the University of Melbourne, Australia, majored in information technology, obtained a master's degree in engineering, and is now a doctoral candidate in computer application technology at the University of Chinese Academy of Sciences,Personal Page:jiashuwu.github.io."
          ></member>


          <el-divider></el-divider>


          <h1 id="h1-master-2019">Postgraduate</h1>

          <member
            name="Mengbing Zhou"
            avatar="/avatar/zhoumengbing.jpg"
            letter="Z"
            position="Master's degree of 2022"
            email=""
            description="Formal student,Born in 1999 in Guang'an, Sichuan, Bachelor of Science. Graduated from South China University of Technology in 2022 with a bachelor's degree in information and computing science; He is currently studying electronic information at the Cloud Computing Center of the Digital Institute of Shenzhen Institute of Advanced Technology, University of Chinese Academy of Sciences."
          ></member>

          <member
            name="Qi Huang"
            avatar="/avatar/huangqi.jpg"
            letter="H"
            position="Master's degree of 2022"
            email="q.huang1@siat.ac.cn"
            description="Formal student,Born in 1998, Bachelor of Engineering. From 2017 to 2021,  studied computer science and technology at Luoyang Normal University and obtained a bachelor's degree; He is currently studying electronic information at Shenzhen Institute of Advanced Technology, Chinese Academy of Sciences."
          ></member>

          <member
            name="Gang Liang"
            avatar="/avatar/lianggang.jpg"
            letter="L"
            position="Master's degree of 2022"
            email="944981514@qq.com"
            description="Joint training with University of Science and Technology of China,Born in Putian, Fujian Province in 1999, Bachelor of Engineering, studied software engineering at the School of Software, Jilin University from 2017 to 2021; He is currently studying software engineering at the School of Software, University of Science and Technology of China, and participates in the joint training program of University of Science and Technology of China and Shenzhen Institute of Advanced Technology, Chinese Academy of Sciences."
          ></member>

          <member
            name="Weikang Zhang"
            avatar="/avatar/zhangweikang.png"
            letter="Z"
            position="Master's degree of 2022"
            email=""
            description="Joint training with Southern University of Science and Technology,Bachelor of Physiology in 1999, graduated from the College of Computer and Science and Technology of Jilin University in 2021, and is now a graduate student jointly trained by Shenzhen University of Science and Technology and Southern University of Science and Technology, majoring in electronic science and technology."
          ></member>

          <member
            name="Ziang Nie"
            avatar="/avatar/nieziang.jpg"
            letter="N"
            position="Master's degree of 2021"
            email=""
            description="Formal student, born in 2000, bachelor of engineering, studied at the School of Computer Science, Beijing University of Posts and Telecommunications from 2017 to 2021, majoring in computer science and technology; He is currently studying at Shenzhen Institute of Advanced Technology, Chinese Academy of Sciences, specializing in computer application technology."
          ></member>

          <member
            name="Mingyuan Cai"
            avatar="/avatar/caimingyuan.jpg"
            letter="C"
            position="Master's degree of 2021"
            email=""
            description="Formal student,Cai Mingyuan, a 2021 master's student, was born in Zhengzhou, Henan Province, and studied at the Shenzhen Institute of Advanced Technology, Chinese Academy of Sciences, specializing in computer technology, and his research direction is RDMA-related data communication."
          ></member>

          <member
            name="Lixing Bao"
            avatar="/avatar/baolixing.jpg"
            letter="B"
            position="Master's degree of 2021"
            email="lx.bao@siat.ac.cn"
            description="Joint training with Hebei University,Born in Hebei in 1995, Bachelor of Engineering. From 2015 to 2019, he studied software engineering at Yanshan University and obtained a bachelor's degree; He is currently studying software engineering at the School of Mathematics and Information Science, Hebei University."
          ></member>

          <member
            name="Junhong Chen"
            avatar="/avatar/chenjunhong.jpg"
            letter="C"
            position="Master's degree of 2020"
            email=""
            description="Formal student,Born in Zhangzhou, Fujian Province in 1997, Bachelor of Engineering, studied at the School of Physics and Information Engineering, Fuzhou University from 2016 to 2020, majoring in Internet of Things Engineering; He is currently studying at Shenzhen Institute of Advanced Technology, University of Chinese Academy of Sciences, majoring in computer technology."
          ></member>

          <member
            name="Lexiong Huang"
            avatar="/avatar/huanglexiong.jpg"
            letter="H"
            position="Master's degree of 2020"
            email="huanglexiong8@163.com"
            description="Formal student,Born in 1998 in Haikou, Hainan, Master of Engineering. He graduated from Shandong University in 2020 with a bachelor's degree in environmental engineering. He is currently studying at Shenzhen Institute of Advanced Technology, University of Chinese Academy of Sciences, majoring in computer technology."
          ></member>

          <member
            name="Pengfei Wang"
            avatar="/avatar/wangpengfei.jpg"
            letter="W"
            position="Master's degree of 2020"
            email=""
            description="Formal student,born in 1996, master of engineering. From 2014 to 2018, he studied at Beihang University and is currently studying at Shenzhen Institute of Advanced Technology, Chinese Academy of Sciences, specializing in computer application technology. Main research directions: distributed scheduling algorithm, microservice."
          ></member>

          <member
            name="Jiahua Huang"
            avatar="/avatar/huangjiahua.jpg"
            letter="H"
            position="Master's degree of 2020"
            email=""
            description=""
          ></member>

          <member
            name="Lingdan Shao"
            avatar="/avatar/shaolingdan.jpg"
            letter="B"
            position="Master's degree of 2020"
            email=""
            description="Formal student,currently studying at Shenzhen Institute of Advanced Technology, Chinese Academy of Sciences, majoring in computer technology, and her research direction is data visualization and visual analysis"
          ></member>

          <member
            name="Qiuyan Li"
            avatar="/avatar/liqiuyan.jpg"
            letter="L"
            position="Master's degree of 2020"
            email=""
            description=""
          ></member>

          <member
            name="Xiuyi Zhang"
            avatar="/avatar/zhangxiuyi.jpg"
            letter="Z"
            position="Master's degree of 2020"
            email=""
            description=""
          ></member>

          <member
            name="Yongkang Li"
            avatar="/avatar/liyongkang.jpg"
            letter="L"
            position="Master's degree of 2019"
            email=""
            description="Formal student"
          ></member>

          <member
            name="Ming Jin"
            avatar="/avatar/jinming.jpg"
            letter="J"
            position="Master's degree of 2019"
            email=""
            description="Formal student"
          ></member>

          <member
            name="Jiesun"
            avatar="/avatar/sunjie.jpg"
            letter="S"
            position="Master's degree of 2019"
            email=""
            description="Guest student"
          ></member>

          <member
            name="Weiwei Liu"
            avatar="/avatar/liuweiwei.jpg"
            letter="L"
            position="Master's degree of 2018"
            email=""
            description="Formal student"
          ></member>

          <member
            name="Lei Yang"
            avatar="/avatar/yanglei.jpg"
            letter="Y"
            position="Master's degree of 2018"
            email=""
            description="Formal student"
          ></member>

          <member
            name="Huan Tang"
            avatar="/avatar/tanghuan.jpg"
            letter="T"
            position="Master's degree of 2018"
            email=""
            description="Formal student"
          ></member>

          <member
            name="Tongzheng Li"
            avatar="/avatar/litongzheng.jpg"
            letter="L"
            position="Master's degree of 2018"
            email=""
            description="Guest student"
          ></member>

          <member
            name="Min Li"
            avatar="/avatar/limin.jpg"
            letter="L"
            position="Master's degree of 2018"
            email=""
            description="Formal student"
          ></member>

          <member
            name="Zhi Liu"
            avatar="/avatar/liuzhi.jpg"
            letter="L"
            position="Master's degree of 2017"
            email=""
            description="Formal student"
          ></member>

          <member
            name="Ziyue Hu"
            avatar="/avatar/huziyue.jpg"
            letter="H"
            position="Master's degree of 2017"
            email=""
            description="Formal student"
          ></member>

          <member
            name="Jingpan Xiong"
            avatar="/avatar/xiongjingpan.jpg"
            letter="H"
            position="Master's degree of 2017"
            email=""
            description="Formal student"
          ></member>

          <member
            name="JingYa Lv"
            avatar="/avatar/lvjingya.jpg"
            letter="L"
            position="Master's degree of 2017"
            email=""
            description="Formal student"
          ></member>

          <member
            name="Hongshuai Ren"
            avatar="/avatar/renhongshuai.jpg"
            letter="R"
            position="Master's degree of 2017"
            email=""
            description="Guest student"
          ></member>

          <member
            name="Mingzhe Du"
            avatar="/avatar/dumingzhe.jpg"
            letter="D"
            position="Master's degree of 2016"
            email=""
            description="Formal student"
          ></member>

          <member
            name="Dong Huang"
            avatar="/avatar/huangdong.jpg"
            letter="H"
            position="Master's degree of 2016"
            email=""
            description="Formal student"
          ></member>

          <member
            name="Zhiyong Ye"
            avatar="/avatar/yezhiyong.jpg"
            letter="Y"
            position="Master's degree of 2017"
            email=""
            description="Guest student"
          ></member>

          
          <member
            name="Jinpeng Wang"
            avatar="/avatar/wangjinpeng.jpg"
            letter="W"
            position="Master's degree of 2017"
            email=""
            description="Guest student"
          ></member>

          <member
            name="Hekang Wang"
            avatar="/avatar/wanghekang.jpg"
            letter="W"
            position="Master's degree of 2017"
            email=""
            description="Guest student"
          ></member>

          <member
            name="Shan Cao"
            avatar="/avatar/caoshan.jpg"
            letter="C"
            position="Master's degree of 2015"
            email=""
            description="Formal student"
          ></member>

          <member
            name="Gengrui Zhang"
            avatar="/avatar/zhanggengrui.jpg"
            letter="Z"
            position="Master's degree of 2015"
            email=""
            description="Formal student"
          ></member>

          <member
            name="Xing Liu"
            avatar="/avatar/liuxing.jpg"
            letter="L"
            position="Master's degree of 2014"
            email=""
            description="Formal student"
          ></member>
          

        

          <el-divider></el-divider>

          <h1 id="h1-stu">Undergraduates</h1>

          <member
            name="Yue Sun"
            avatar="/avatar/sunyue.jpg"
            letter="S"
            position="Undergraduates of grade 19"
            email="y.sun@siat.ac.cn"
            description="Born in Chaoyang, Liaoning Province in 2001, studied at Shenyang University of Aeronautics and Astronautics from 2019 to 2020 and Shenzhen University of Science and Technology, Chinese Academy of Sciences from 2021 to 2023, specializing in computer science and technology."
          ></member>

          <member
            name="Fei Yi"
            avatar="/avatar/yifei.jpg"
            letter="Y"
            position="Undergraduates of grade 19"
            email=""
            description="major in computer science and technology, Shenzhen University of Technology, Chinese Academy of Sciences"
          ></member>

          <member
            name="Yang Zhou"
            avatar="/avatar/zhouyang.jpg"
            letter="Z"
            position="Undergraduates of grade 19"
            email=""
            description="Born in 2001, Bachelor of Engineering, studied at the School of Computer Science of Central South University from 2019 to 2023, majoring in information security; He is currently studying at Shenzhen Institute of Advanced Technology, University of Chinese Academy of Sciences, with MLsys research direction."
          ></member>

        </el-col>
      </el-row>
    </el-main>
    <myfooter></myfooter>
  </el-container>
</template>

<script>
  import myheader from '~/components/myheader.vue'
  import myfooter from '~/components/myfooter.vue'
  import Member from "../components/member.vue";

  export default {
    name: "members",
    components: {
      Member,
      myheader,
      myfooter
    },
    data() {
      return {
        active: 0
      }
    },
    mounted() {
      window.addEventListener('scroll', this.onScroll)
    },
    destroyed() {
      window.removeEventListener('scroll', this.onScroll)
    },
    methods: {
      onScroll() {
        // 获取所有锚点元素
        const navContents = document.querySelectorAll('.wrapper h1');
        // 所有锚点元素的 offsetTop
        const offsetTopArr = [];
        navContents.forEach(item => {
          offsetTopArr.push(item.offsetTop)
        });
        // 获取当前文档流的 scrollTop
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        // 定义当前点亮的导航下标
        let navIndex = 0;
        for (let n = 0; n < offsetTopArr.length; n++) {
          // 如果 scrollTop 大于等于第 n 个元素的 offsetTop 则说明 n-1 的内容已经完全不可见
          // 那么此时导航索引就应该是 n 了
          if (scrollTop >= offsetTopArr[n]) {
            navIndex = n
          }
        }
        // 把下标赋值给 vue 的 data
        this.active = navIndex
      },
      // 跳转到指定索引的元素
      scrollTo(content_id) {
        // 获取目标的 offsetTop
        // css选择器是从 1 开始计数，我们是从 0 开始，所以要 +1

        const targetOffsetTop = document.querySelector(content_id).offsetTop
        // 获取当前 offsetTop
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
        // 定义一次跳 50 个像素，数字越大跳得越快，但是会有掉帧得感觉
        const STEP = 50
        // 判断是往下滑还是往上滑
        if (scrollTop > targetOffsetTop) {
          // 往上滑
          smoothUp()
        } else {
          // 往下滑
          smoothDown()
        }

        // 定义往下滑函数
        function smoothDown() {
          // 如果当前 scrollTop 小于 targetOffsetTop 说明视口还没滑到指定位置
          if (scrollTop < targetOffsetTop) {
            // 如果和目标相差距离大于等于 STEP 就跳 STEP
            // 否则直接跳到目标点，目标是为了防止跳过了。
            if (targetOffsetTop - scrollTop >= STEP) {
              scrollTop += STEP
            } else {
              scrollTop = targetOffsetTop
            }
            document.body.scrollTop = scrollTop
            document.documentElement.scrollTop = scrollTop
            // 屏幕在绘制下一帧时会回调传给 requestAnimationFrame 的函数
            // 关于 requestAnimationFrame 可以自己查一下，在这种场景下，相比 setInterval 性价比更高
            requestAnimationFrame(smoothDown)
          }
        }

        // 定义往上滑函数
        function smoothUp() {
          if (scrollTop > targetOffsetTop) {
            if (scrollTop - targetOffsetTop >= STEP) {
              scrollTop -= STEP
            } else {
              scrollTop = targetOffsetTop
            }
            document.body.scrollTop = scrollTop
            document.documentElement.scrollTop = scrollTop
            requestAnimationFrame(smoothUp)
          }
        }
      }

    }
  }
</script>

<style scoped>

  h1 {
    width: 100%;
  }

  .ul-navi {
    font-size: 1.3rem;
    font-weight: bold;
    color: #909399;
    width: 100%;
  }

  .ul-navi li {
    cursor: pointer;
    margin: 30px 0;
  }

  .ul-navi .active {
    font-size: 1.5rem;
    color: #303133;
  }
</style>
