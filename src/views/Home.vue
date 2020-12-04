<template>
  <div class="home">
    <van-row type="flex">
      <van-col span="23" style="margin-top:5rem;font-size:25px;margin-left:2%" @click="fanhui()"><van-icon name="arrow-left" /></van-col>
      <van-col span="8" style="margin-top:2rem;font-size:25px">&nbsp;&nbsp;密码登录</van-col>
    </van-row>
    <van-form validate-first @failed="onFailed" style="margin-top:2rem;">
      <van-field v-model="value1" name="pattern" placeholder="请输入账号或手机号"/>
      <van-field v-model="password" type="password" placeholder="请输入密码"/>
    <van-row type="flex">
      <van-col span="7" style="margin-left:16px;margin-top:1rem;font-size:15px;color:#ED6C0F">使用验证码登录</van-col>
      <van-col span="5" offset="10" style="margin-top:1rem;font-size:15px;color:#ED6C0F">忘记密码？</van-col>
    </van-row>
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit" @click="tiaoz()" style="background:#FFC293;border-radius:3%;border:none">登录</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
// import HelloWorld from '@/components/HelloWorld.vue'
import { Toast } from 'vant';

export default {
  data() {
    return {
      value1: '',
      password: '',
      aa:{
         value1: 'user',
         value2: require('../assets/g2.png')
      }
    };
  },
  methods: {
    tiaoz(){
      var zz = /^(((13[0-9]{1})|(14[0-9]{1})|(17[0-9]{1})|(15[0-3]{1})|(15[4-9]{1})|(18[0-9]{1})|(199))+\d{8})$/;
      if (!zz.test(this.value1)||this.password.length<6) { 
        alert("输入错误");
      }else{
        localStorage.setItem("user",JSON.stringify(this.aa));
        alert("登陆成功")
        this.$router.push('/wode')
      }
    },
    fanhui(){
      this.$router.go(-1)
    }
  },
};
</script>
<style>
*{
  font-size:16px;
}
.van-field--error .van-field__control{
  background:white;
  height: 40px
}
/* .van-field__control{
   background:#f5f5f5 !important;
   height: 40px;
   font-size: 16px;
} */
</style>