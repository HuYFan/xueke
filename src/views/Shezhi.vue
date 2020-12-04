<template>
    <div id="shezhi">
        <div class="div1">
            <van-nav-bar title="设置" left-arrow @click-left="onClickLeft"/>
        </div>
        <div class="div2" style="margin-top:10px">
            <van-cell is-link>
                <template #title>
                    <span class="custom-title" style="display:inline-block;vertical-align:middle;margin-left:1.5%">账号设置</span>
                </template>
            </van-cell>
        </div>
        <div class="div2" style="margin-top:10px">
            <van-cell is-link>
                <template #title>
                    <span class="custom-title" style="display:inline-block;vertical-align:middle;margin-left:1.5%">关于我们</span>
                </template>
            </van-cell>
        </div>
        <van-button block style="color:#F76F01;margin-top:10px" @click="tuichu()">退出登录</van-button>
    </div>
</template>
<script>
export default {
    methods: {
    onClickLeft() {
      this.$router.go(-1)
    },
    tuichu(){
        localStorage.clear("user");
        this.$router.go(-1)
    }
}
}
</script>
<style scoped>
#shezhi{
    width:100%;
    height: 738px;
    background:#F5F5F5;
}
</style>