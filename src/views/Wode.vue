<template>
    <div id="wode">
        <Dibu></Dibu>
        <van-sticky>
        <div class="div1">
            <van-nav-bar title="我的">
                <template #right>
                    <router-link to="/shezhi"><van-icon name="setting-o" size="25px"/></router-link>
                </template>
            </van-nav-bar>
        </div>
        </van-sticky>
        <div class="div2" style="display:flex">
            <div class="dd">
                <router-link to="/home"><img :src="imgAddress"/></router-link>
                <router-link to="/home" tag="span" class="sp1">{{dl}}</router-link>
                <span class="sp2">签到领学豆<van-icon name="arrow" /></span>
            </div>
        </div>
        <div class="div3">
            <div style="display:flex;justify-content:space-around;width:100%;padding-top:25px">
                <span style="font-size:20px;margin-right:1%">0.00</span>
                <span style="font-size:20px;margin-right:6%">0</span>
                <span style="font-size:20px;margin-right:3%">0</span>
            </div>
            <div style="display:flex;justify-content:space-around;width:100%">
                <span style="font-size:14px;color:#c5c5c5">我的储值</span>
                <span style="font-size:14px;color:#c5c5c5">我的书券</span>
                <span style="font-size:14px;color:#c5c5c5">我的学豆</span>
            </div>
        </div>
        <div class="div4" style="margin-top:20px">
            <van-cell value="0份" is-link>
                <template #title>
                    <van-icon name="goods-collect-o" size="25px" style="display:inline-block;vertical-align:middle"/>
                    <span class="custom-title" style="display:inline-block;vertical-align:middle;margin-left:3%">下载</span>
                </template>
            </van-cell>
            <van-cell value="0份" is-link>
                <template #title>
                    <van-icon name="star-o" size="25px" style="display:inline-block;vertical-align:middle"/>
                    <span class="custom-title" style="display:inline-block;vertical-align:middle;margin-left:3%">收藏</span>
                </template>
            </van-cell>
            <van-cell is-link>
                <template #title>
                    <van-icon name="friends-o" size="25px" style="display:inline-block;vertical-align:middle"/>
                    <span class="custom-title" style="display:inline-block;vertical-align:middle;margin-left:1.5%">我关注的</span>
                </template>
            </van-cell>
            <van-cell is-link>
                <template #title>
                    <van-icon name="point-gift-o" size="25px" style="display:inline-block;vertical-align:middle"/>
                    <span class="custom-title" style="display:inline-block;vertical-align:middle;margin-left:1.5%">我的奖励金</span>
                </template>
            </van-cell>
        </div>
        <div class="div5" style="margin-top:20px">
            <van-cell is-link>
                <template #title>
                    <van-icon name="wap-home-o" size="25px" style="display:inline-block;vertical-align:middle"/>
                    <span class="custom-title" style="display:inline-block;vertical-align:middle;margin-left:1.5%">个人主页</span>
                </template>
            </van-cell>
            <van-cell is-link>
                <template #title>
                    <van-icon name="diamond-o" size="25px" style="display:inline-block;vertical-align:middle"/>
                    <span class="custom-title" style="display:inline-block;vertical-align:middle;margin-left:3%">会员</span>
                </template>
            </van-cell>
            <van-cell is-link>
                <template #title>
                    <van-icon name="balance-list-o" size="25px" style="display:inline-block;vertical-align:middle"/>
                    <span class="custom-title" style="display:inline-block;vertical-align:middle;margin-left:3%">订单</span>
                </template>
            </van-cell>
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
        dl:'点击登录',
        imgAddress:require('../assets/g1.png')
    };
  },
  created() {
      this.login();
  },
  methods: {
      login(){
          var user = JSON.parse(localStorage.getItem("user"));
          this.dl=user.value1;
          this.imgAddress=user.value2
      }
  },
}
</script>
<style scoped>
.div3{
    width: 100%;
    height: 100px;
    background: white;
    margin-top: 20px;
}
#wode{
    width: 100%;
    height: 700px;
    background-color: #F6F6F6;
}
.div2{
    background: white;
    height: 120px
}
.div2 img{
    width: 20%;
    margin-left: 5%;
    margin-top: 4%
}
.sp1{
    display: block;
    margin-top: -13%;
    margin-left: 28%
}
.sp2{
    display: block;
    margin-top: -5%;
    margin-left: 68%;
    color: #F76F01;
}
.dd{
    width: 100%;
}
</style>