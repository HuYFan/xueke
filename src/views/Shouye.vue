<template>
    <div id="shouye">
      <Dibu></Dibu>
     <div id="div1">
       <van-sticky>
         <div style="background:white">
      <van-row type="flex">
        <van-col span="3" offset="11" style="margin-top:1.5rem;font-size:20px;">发现</van-col>
      </van-row>
      <van-search v-model="value" shape="round" placeholder="搜索试卷、教案、课件等资源"/>
      </div>
       </van-sticky>
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" style="margin-top:0.5rem;">
        <van-swipe-item><img src="../assets/lun1.png"></van-swipe-item>
        <van-swipe-item><img src="../assets/lun2.png"></van-swipe-item>
        <van-swipe-item><img src="../assets/lun3.png"></van-swipe-item>
        <van-swipe-item><img src="../assets/lun4.png"></van-swipe-item>
        <van-swipe-item><img src="../assets/lun5.png"></van-swipe-item>
      </van-swipe>
      <van-row type="flex">
        <van-col span="3" style="margin-top:1.5rem;margin-left:12px"><img src="../assets/a1.png" @click="tz()"></van-col>
        <van-col span="3" style="margin-top:1.5rem;margin-left:26px"><img src="../assets/a1.png" @click="tz1()"></van-col>
        <van-col span="3" style="margin-top:1.5rem;margin-left:26px"><img src="../assets/a1.png" @click="tz2()"></van-col>
        <van-col span="3" style="margin-top:1.5rem;margin-left:26px"><img src="../assets/a1.png" @click="tz3()"></van-col>
        <van-col span="3" style="margin-top:1.5rem;margin-left:26px"><img src="../assets/a1.png" @click="tz4()"></van-col>
      </van-row>
      <van-row type="flex">
        <van-col span="3" style="margin-left:34px">试卷</van-col>
        <van-col span="3" style="margin-left:26px">教案</van-col>
        <van-col span="3" style="margin-left:26px">课件</van-col>
        <van-col span="3" style="margin-left:26px">视频</van-col>
        <van-col span="3" style="margin-left:26px">分类</van-col>
      </van-row>
      <van-row type="flex">
        <van-col span="3" style="margin-top:1.5rem;margin-left:12px"><img src="../assets/a1.png"></van-col>
        <van-col span="3" style="margin-top:1.5rem;margin-left:26px"><img src="../assets/a1.png"></van-col>
        <van-col span="3" style="margin-top:1.5rem;margin-left:26px"><img src="../assets/a1.png"></van-col>
        <van-col span="3" style="margin-top:1.5rem;margin-left:26px"><img src="../assets/a1.png"></van-col>
        <van-col span="3" style="margin-top:1.5rem;margin-left:26px"><img src="../assets/a1.png"></van-col>
      </van-row>
      <van-row type="flex">
        <van-col span="3" style="margin-left:34px">名校</van-col>
        <van-col span="3" style="margin-left:26px">专辑</van-col>
        <van-col span="3" style="margin-left:26px">套卷</van-col>
        <van-col span="3" style="margin-left:26px">专题</van-col>
        <van-col span="3" style="margin-left:26px">充值</van-col>
      </van-row>
     </div>
     <div id="div2">
      <van-row type="flex">
        <van-col span="14" style="margin-top:1rem;margin-left:20px;"><strong>备战2021中高考精品系列</strong></van-col>
        <van-col span="4" style="margin-top:1rem;margin-left:70px;">全部<van-icon name="arrow" /></van-col>
      </van-row>
      <van-row type="flex">
        <van-col span="10" style="margin-top:1rem;margin-left:20px;"><img src="../assets/b1.png" style="width:100%"></van-col>
        <van-col span="10" style="margin-top:1rem;margin-left:25px;"><img src="../assets/b2.png" style="width:100%"></van-col>
        <van-col span="10" style="margin-top:0.5rem;margin-left:25px;font-size:15px">浙江中考真题及解析...</van-col>
        <van-col span="10" style="margin-top:0.5rem;margin-left:25px;font-size:15px">上海新中考改革资源</van-col>
        <van-col span="10" style="margin-top:0.5rem;margin-left:25px;font-size:14px;color:#7B7B7B">备战2021年中考</van-col>
        <van-col span="10" style="margin-top:0.5rem;margin-left:25px;font-size:14px;color:#7B7B7B">备战2021年中考</van-col>
        <van-col span="10" style="margin-top:1rem;margin-left:20px;"><img src="../assets/b3.png" style="width:100%"></van-col>
        <van-col span="10" style="margin-top:1rem;margin-left:25px;"><img src="../assets/b4.png" style="width:100%"></van-col>
        <van-col span="10" style="margin-top:0.5rem;margin-left:25px;font-size:15px">2021年高考纠错笔记</van-col>
        <van-col span="10" style="margin-top:0.5rem;margin-left:25px;font-size:15px">2021高考一轮复习易...</van-col>
        <van-col span="10" style="margin-top:0.5rem;margin-left:25px;font-size:14px;color:#7B7B7B">备战2021年中考</van-col>
        <van-col span="10" style="margin-top:0.5rem;margin-left:25px;font-size:14px;color:#7B7B7B">备战2021年中考</van-col>
      </van-row>
     </div>
     <div id="div3">
      <van-row type="flex">
        <van-col span="14" style="margin-top:1rem;margin-left:20px;"><strong>名校都在用的资源</strong></van-col>
        <van-col span="4" style="margin-top:1rem;margin-left:70px;">全部<van-icon name="arrow" /></van-col>
      </van-row>
      <van-row type="flex">
        <van-col span="5" style="margin-top:1rem;margin-left:16px;"><img src="../assets/b5.png" style="width:104%"></van-col>
        <van-col span="6" style="margin-top:1.5rem;margin-left:5px;font-size:15px">人大附中<br><br><span style="margin-top:0.5rem;color:#7B7B7B;font-size:13px">初高中 | 百强校</span></van-col>
        <van-col span="5" style="margin-top:1rem;margin-left:0px;"><img src="../assets/b6.png" style="width:104%"></van-col>
        <van-col span="6" style="margin-top:1.5rem;margin-left:5px;font-size:15px">衡水中学<br><br><span style="margin-top:0.5rem;color:#7B7B7B;font-size:13px">初高中 | 百强校</span></van-col>
        <van-col span="5" style="margin-top:1rem;margin-left:16px;"><img src="../assets/b7.png" style="width:104%"></van-col>
        <van-col span="6" style="margin-top:1.5rem;margin-left:5px;font-size:15px">启东中学<br><br><span style="margin-top:0.5rem;color:#7B7B7B;font-size:13px">初高中 | 百强校</span></van-col>
        <van-col span="5" style="margin-top:1rem;margin-left:0px;"><img src="../assets/b8.png" style="width:104%"></van-col>
        <van-col span="6" style="margin-top:1.5rem;margin-left:5px;font-size:15px">黄冈中学<br><br><span style="margin-top:0.5rem;color:#7B7B7B;font-size:13px">初高中 | 百强校</span></van-col>
      </van-row>
     </div>
     <div id="div4">
      <van-row type="flex">
        <van-col span="14" style="margin-top:1rem;margin-left:20px;"><strong>第三方机构·教育书籍</strong></van-col>
        <van-col span="4" style="margin-top:1rem;margin-left:70px;">全部<van-icon name="arrow" /></van-col>
      </van-row>
      <van-row type="flex">
        <van-col span="10" style="margin-top:1rem;margin-left:20px;"><img src="../assets/c1.png" style="width:100%"></van-col>
        <van-col span="10" style="margin-top:1rem;margin-left:25px;"><img src="../assets/c2.png" style="width:100%"></van-col>
        <van-col span="10" style="margin-top:0.5rem;margin-left:25px;font-size:15px">《七彩课堂》</van-col>
        <van-col span="10" style="margin-top:0.5rem;margin-left:25px;font-size:15px">《练测考》</van-col>
        <van-col span="10" style="margin-top:0.5rem;margin-left:25px;font-size:14px;color:#7B7B7B">北京五洲时代文化传媒...</van-col>
        <van-col span="10" style="margin-top:0.5rem;margin-left:25px;font-size:14px;color:#7B7B7B">山东正大图书有限公司</van-col>
        <van-col span="10" style="margin-top:1rem;margin-left:20px;"><img src="../assets/c3.png" style="width:100%"></van-col>
        <van-col span="10" style="margin-top:1rem;margin-left:25px;"><img src="../assets/c4.png" style="width:100%"></van-col>
        <van-col span="10" style="margin-top:0.5rem;margin-left:25px;font-size:15px">《全能考练卷》</van-col>
        <van-col span="10" style="margin-top:0.5rem;margin-left:25px;font-size:15px">《优化探究》</van-col>
        <van-col span="10" style="margin-top:0.5rem;margin-left:25px;font-size:14px;color:#7B7B7B">郑州荣恒图书有限公司</van-col>
        <van-col span="10" style="margin-top:0.5rem;margin-left:25px;font-size:14px;color:#7B7B7B">山东金太阳书业有限公司</van-col>
      </van-row>
     </div>
     <img src="../assets/c5.png" style="width:100%;margin-top:14px;">
     <div id="div5">
      <van-row type="flex">
        <van-col span="14" style="margin-top:1rem;margin-left:20px;"><strong>名师堂·名师作品集</strong></van-col>
      </van-row>
      <van-row type="flex">
        <van-col span="10" style="margin-top:1rem;margin-left:20px;"><img src="../assets/d1.png" style="width:100%"></van-col>
        <van-col span="10" style="margin-top:1rem;margin-left:25px;"><img src="../assets/d2.png" style="width:100%"></van-col>
        <van-col span="10" style="margin-top:0.5rem;margin-left:25px;font-size:15px">苏延清老师作品集</van-col>
        <van-col span="10" style="margin-top:0.5rem;margin-left:25px;font-size:15px">安景文老师作品集</van-col>
        <van-col span="10" style="margin-top:0.5rem;margin-left:25px;font-size:14px;color:#7B7B7B">名师堂高级教室-地理</van-col>
        <van-col span="10" style="margin-top:0.5rem;margin-left:25px;font-size:14px;color:#7B7B7B">名师堂金牌教练-物理</van-col>
        <van-col span="10" style="margin-top:1rem;margin-left:20px;"><img src="../assets/d3.png" style="width:100%"></van-col>
        <van-col span="10" style="margin-top:1rem;margin-left:25px;"><img src="../assets/d4.png" style="width:100%"></van-col>
        <van-col span="10" style="margin-top:0.5rem;margin-left:25px;font-size:15px">李世营老师作品集</van-col>
        <van-col span="10" style="margin-top:0.5rem;margin-left:25px;font-size:15px">马兴文老师作品集</van-col>
        <van-col span="10" style="margin-top:0.5rem;margin-left:25px;font-size:14px;color:#7B7B7B">名师堂高级教室-物理</van-col>
        <van-col span="10" style="margin-top:0.5rem;margin-left:25px;font-size:14px;color:#7B7B7B">名师堂高级教室-英语</van-col>
      </van-row>
     </div>
     <img src="../assets/d5.png" style="width:100%;margin-top:14px;">
     <div id="div6">
      <van-row type="flex">
        <van-col span="14" style="margin-top:1rem;margin-left:20px;"><strong>2020高考真题</strong></van-col>
        <van-col span="4" style="margin-top:1rem;margin-left:70px;">全部<van-icon name="arrow" /></van-col>
      </van-row>
      <van-row type="flex">
        <van-col span="5" style="margin-top:1rem;margin-left:16px;"><img src="../assets/d6.png" style="width:104%"></van-col>
        <van-col span="6" style="margin-top:1.5rem;margin-left:5px;font-size:15px">(精编版)<br>2020高考<br>全国卷Ⅰ...<br><br><span style="margin-top:0.5rem;color:#7B7B7B;font-size:13px">高三 | 高考</span></van-col>
        <van-col span="5" style="margin-top:1rem;margin-left:0px;"><img src="../assets/d6.png" style="width:104%"></van-col>
        <van-col span="6" style="margin-top:1.5rem;margin-left:5px;font-size:15px">(精编版)<br>2020高考<br>全国卷Ⅱ...<br><br><span style="margin-top:0.5rem;color:#7B7B7B;font-size:13px">高三 | 高考</span></van-col>
        <van-col span="5" style="margin-top:1rem;margin-left:16px;"><img src="../assets/d6.png" style="width:104%"></van-col>
        <van-col span="6" style="margin-top:1.5rem;margin-left:5px;font-size:15px">(精编版)<br>2020高考<br>全国卷Ⅲ...<br><br><span style="margin-top:0.5rem;color:#7B7B7B;font-size:13px">高三 | 高考</span></van-col>
        <van-col span="5" style="margin-top:1rem;margin-left:0px;"><img src="../assets/d6.png" style="width:104%"></van-col>
        <van-col span="6" style="margin-top:1.5rem;margin-left:5px;font-size:15px">(精编版)<br>2020高考<br>江苏卷试卷...<br><br><span style="margin-top:0.5rem;color:#7B7B7B;font-size:13px">高三 | 高考</span></van-col>
      </van-row>
     </div>
    </div>
</template>
<script>
import Dibu from '../components/Dibu'
export default {
    components:{
        Dibu
    },
    data() {
    return {
      // active: 0,
    };
  },
  methods: {
    tz(){
      this.$router.push({
        name:'childView',
        params:{
          title:'试题试卷'
        }
      })
    },
    tz1(){
      this.$router.push({
        name:'childView',
        params:{
          title:'教案'
        }
      })
    },
    tz2(){
      this.$router.push({
        name:'childView',
        params:{
          title:'课件'
        }
      })
    },
    tz3(){
      this.$router.push({
        name:'childView',
        params:{
          title:'视频'
        }
      })
    },
    tz4(){
      this.$router.push({
        name:'childView',
        params:{
          title:'分类'
        }
      })
    }
  },
}
</script>
<style scoped>
#shouye{
  width: 100%;
  height: 2685px;
  background: #F6F6F6;
}
#div1{
  background: white;
  padding-bottom: 10px;
}
#div2{
  width: 92%;
  margin-top: 16px;
  background: white;
  padding-bottom: 15px;
  margin-left: 16px;
  border-radius: 5%;
}
#div5{
  width: 92%;
  margin-top: 16px;
  background: white;
  padding-bottom: 15px;
  margin-left: 16px;
  border-radius: 5%;
}
#div4{
  width: 92%;
  margin-top: 16px;
  background: white;
  padding-bottom: 15px;
  margin-left: 16px;
  border-radius: 5%;
}
#div3{
  width: 92%;
  margin-top: 16px;
  background: white;
  padding-bottom: 15px;
  margin-left: 16px;
  border-radius: 5%;
}
#div6{
  width: 92%;
  margin-top: 16px;
  background: white;
  padding-bottom: 15px;
  margin-left: 16px;
  border-radius: 5%;
}
.my-swipe img{
  width: 100%;
  border-radius: 3%;
}
.my-swipe{
  width: 92%;
  margin-left: 16px;
  overflow: hidden;
  border-radius: 3%;
}
</style>