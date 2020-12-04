<template>
    <div id="shijuan">
        <van-sticky>
        <div style="background:white">
      <div style="display:flex;padding-top:15px;padding-bottom:15px">
          <van-icon name="arrow-left" size="25" @click="fanhui()" style="margin-top:3%"/>
        <van-search v-model="value" shape="round" style="width:90%" placeholder="搜索试卷、教案、课件等资源"/>
      </div>
      </div>
       </van-sticky>
       <div class="div2" style="background:white;width:100%;height:50px;position:fixed;top:80px;">
           <p style="color:#F8931F;text-align:center;line-height:20px">-<span>{{this.$route.params.title}}</span>-</p>
       </div>
       <div style="background:white">
           <van-list v-model="loading" :finished="finished" finished-text="没有更多了"  @load="onLoad">
           <div style="width:100%;border-bottom:1px solid #c5c5c5;display:flex;">
              <img src="../assets/q1.png">
              <div style="margin-top:10px;margin-right:5px">
                <span>人教版七年级上册数学试题：第三章一</span><br><br>
                <span>元一次方程的解法 单元检测</span><br><br>
                <span style="color:#c5c5c5;font-size:14px">2020-11-23|2页|373人阅读|64人下载<div style="display:inline;font-size:14px;border:1px solid #c5c5c5;padding-top:2px;padding-bottom:2px;padding-left:5px;padding-right:5px;border-radius:15%;margin-left:10px">普通</div></span>
              </div>
            </div>
            <div style="width:100%;border-bottom:1px solid #c5c5c5;display:flex;">
              <img src="../assets/q1.png">
              <div style="margin-top:10px;margin-right:5px">
                <span>人教版七年级上册数学试题：第三章一</span><br><br>
                <span>元一次方程的解法 单元检测</span><br><br>
                <span style="color:#c5c5c5;font-size:14px">2020-11-23|2页|373人阅读|64人下载<div style="display:inline;font-size:14px;border:1px solid #c5c5c5;padding-top:2px;padding-bottom:2px;padding-left:5px;padding-right:5px;border-radius:15%;margin-left:10px">普通</div></span>
              </div>
            </div>
            <div style="width:100%;border-bottom:1px solid #c5c5c5;display:flex;">
              <img src="../assets/q1.png">
              <div style="margin-top:10px;margin-right:5px">
                <span>人教版七年级上册数学试题：第三章一</span><br><br>
                <span>元一次方程的解法 单元检测</span><br><br>
                <span style="color:#c5c5c5;font-size:14px">2020-11-23|2页|373人阅读|64人下载<div style="display:inline;font-size:14px;border:1px solid #c5c5c5;padding-top:2px;padding-bottom:2px;padding-left:5px;padding-right:5px;border-radius:15%;margin-left:10px">普通</div></span>
              </div>
            </div>
            <div style="width:100%;border-bottom:1px solid #c5c5c5;display:flex;">
              <img src="../assets/q1.png">
              <div style="margin-top:10px;margin-right:5px">
                <span>人教版七年级上册数学试题：第三章一</span><br><br>
                <span>元一次方程的解法 单元检测</span><br><br>
                <span style="color:#c5c5c5;font-size:14px">2020-11-23|2页|373人阅读|64人下载<div style="display:inline;font-size:14px;border:1px solid #c5c5c5;padding-top:2px;padding-bottom:2px;padding-left:5px;padding-right:5px;border-radius:15%;margin-left:10px">普通</div></span>
              </div>
            </div>
            <div style="width:100%;border-bottom:1px solid #c5c5c5;display:flex;">
              <img src="../assets/q1.png">
              <div style="margin-top:10px;margin-right:5px">
                <span>人教版七年级上册数学试题：第三章一</span><br><br>
                <span>元一次方程的解法 单元检测</span><br><br>
                <span style="color:#c5c5c5;font-size:14px">2020-11-23|2页|373人阅读|64人下载<div style="display:inline;font-size:14px;border:1px solid #c5c5c5;padding-top:2px;padding-bottom:2px;padding-left:5px;padding-right:5px;border-radius:15%;margin-left:10px">普通</div></span>
              </div>
            </div>
            <div style="width:100%;border-bottom:1px solid #c5c5c5;display:flex;">
              <img src="../assets/q1.png">
              <div style="margin-top:10px;margin-right:5px">
                <span>人教版七年级上册数学试题：第三章一</span><br><br>
                <span>元一次方程的解法 单元检测</span><br><br>
                <span style="color:#c5c5c5;font-size:14px">2020-11-23|2页|373人阅读|64人下载<div style="display:inline;font-size:14px;border:1px solid #c5c5c5;padding-top:2px;padding-bottom:2px;padding-left:5px;padding-right:5px;border-radius:15%;margin-left:10px">普通</div></span>
              </div>
            </div>
            <div style="width:100%;border-bottom:1px solid #c5c5c5;display:flex;">
              <img src="../assets/q1.png">
              <div style="margin-top:10px;margin-right:5px">
                <span>人教版七年级上册数学试题：第三章一</span><br><br>
                <span>元一次方程的解法 单元检测</span><br><br>
                <span style="color:#c5c5c5;font-size:14px">2020-11-23|2页|373人阅读|64人下载<div style="display:inline;font-size:14px;border:1px solid #c5c5c5;padding-top:2px;padding-bottom:2px;padding-left:5px;padding-right:5px;border-radius:15%;margin-left:10px">普通</div></span>
              </div>
            </div>
            <div style="width:100%;border-bottom:1px solid #c5c5c5;display:flex;">
              <img src="../assets/q1.png">
              <div style="margin-top:10px;margin-right:5px">
                <span>人教版七年级上册数学试题：第三章一</span><br><br>
                <span>元一次方程的解法 单元检测</span><br><br>
                <span style="color:#c5c5c5;font-size:14px">2020-11-23|2页|373人阅读|64人下载<div style="display:inline;font-size:14px;border:1px solid #c5c5c5;padding-top:2px;padding-bottom:2px;padding-left:5px;padding-right:5px;border-radius:15%;margin-left:10px">普通</div></span>
              </div>
            </div>
            <div style="width:100%;border-bottom:1px solid #c5c5c5;display:flex;">
              <img src="../assets/q1.png">
              <div style="margin-top:10px;margin-right:5px">
                <span>人教版七年级上册数学试题：第三章一</span><br><br>
                <span>元一次方程的解法 单元检测</span><br><br>
                <span style="color:#c5c5c5;font-size:14px">2020-11-23|2页|373人阅读|64人下载<div style="display:inline;font-size:14px;border:1px solid #c5c5c5;padding-top:2px;padding-bottom:2px;padding-left:5px;padding-right:5px;border-radius:15%;margin-left:10px">普通</div></span>
              </div>
            </div>
            <div style="width:100%;border-bottom:1px solid #c5c5c5;display:flex;">
              <img src="../assets/q1.png">
              <div style="margin-top:10px;margin-right:5px">
                <span>人教版七年级上册数学试题：第三章一</span><br><br>
                <span>元一次方程的解法 单元检测</span><br><br>
                <span style="color:#c5c5c5;font-size:14px">2020-11-23|2页|373人阅读|64人下载<div style="display:inline;font-size:14px;border:1px solid #c5c5c5;padding-top:2px;padding-bottom:2px;padding-left:5px;padding-right:5px;border-radius:15%;margin-left:10px">普通</div></span>
              </div>
            </div>
            <div style="width:100%;border-bottom:1px solid #c5c5c5;display:flex;">
              <img src="../assets/q1.png">
              <div style="margin-top:10px;margin-right:5px">
                <span>人教版七年级上册数学试题：第三章一</span><br><br>
                <span>元一次方程的解法 单元检测</span><br><br>
                <span style="color:#c5c5c5;font-size:14px">2020-11-23|2页|373人阅读|64人下载<div style="display:inline;font-size:14px;border:1px solid #c5c5c5;padding-top:2px;padding-bottom:2px;padding-left:5px;padding-right:5px;border-radius:15%;margin-left:10px">普通</div></span>
              </div>
            </div>
       </van-list>
       </div>
    </div>
</template>
<script>
export default {
    name:'childView',
    data() {
        return {
            title:'试题试卷',
            activeNames: ['1'],
             list: [],
      loading: false,
      finished: false,
        }
    },methods: {
        fanhui(){
            this.$router.go(-1)
        },
        onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 99; i++) {
          this.list.push(this.list.length + 1);
        }

        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 1000);
    },
    },
}
</script>
<style scoped>
#shijuan{
    width: 100%;
    height: 785px;
    background: #F6F6F6;
}
</style>