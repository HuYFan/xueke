<template>
  <div id="dibu">
    <van-tabbar v-model="active" route active-color="#FC6C04" style="border-top:1px solid #C1C1C1">
     <van-tabbar-item replace icon="browsing-history-o" to="/">发现</van-tabbar-item>
     <van-tabbar-item replace icon="thumb-circle-o" to="/tuijian">推荐</van-tabbar-item>
     <van-tabbar-item icon="apps-o" to="/fenlei">分类</van-tabbar-item>
     <van-tabbar-item icon="user-circle-o" to="/wode">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
    data() {
    return {
      active: 0,
    };
  },
}
</script>