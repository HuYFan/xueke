<template>
    <div id="fenlei">
        <div class="div1">
            <van-nav-bar title="分类">
                <template #right>
                    <van-icon name="search" size="25px" />
                </template>
            </van-nav-bar>
        </div>
        <div class="div2">
            <van-tree-select height="155vw" :items="items" :main-active-index.sync="active">
                <template #content>
                    <van-tabs v-model="active1" v-if="active === 0" animated swipeable="true">
                        <van-tab v-for="index in 2" :title="'选项 ' + index">
                            <div v-if="index===1">
                                <van-swipe class="my-swipe" :autoplay="3000" style="flex:4" indicator-color="white">
                                    <van-swipe-item><img src="../assets/f1.png" style="width:100%"></van-swipe-item>
                                    <van-swipe-item><img src="../assets/f2.png" style="width:100%"></van-swipe-item>
                                    <van-swipe-item><img src="../assets/f3.png" style="width:100%"></van-swipe-item>
                                </van-swipe>
                                <div style="border:1px solid #C4C4C4;margin-top:8px;border-radius:3%;">
                                    <span style="display:inline-block;margin-top:8px;margin-left:8px"><strong>资源类别</strong></span>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            试卷
                                        </van-grid-item>
                                        <van-grid-item>
                                            教案
                                        </van-grid-item>
                                        <van-grid-item>
                                            课件
                                        </van-grid-item>
                                        <van-grid-item>
                                            素材
                                        </van-grid-item>
                                    </van-grid>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            视频
                                        </van-grid-item>
                                        <van-grid-item>
                                            备课包
                                        </van-grid-item>
                                        <van-grid-item>
                                            学案
                                        </van-grid-item>
                                        <van-grid-item>
                                            作业
                                        </van-grid-item>
                                    </van-grid>
                                </div>
                                <div style="border:1px solid #C4C4C4;margin-top:8px;border-radius:3%;">
                                    <span style="display:inline-block;margin-top:8px;margin-left:8px"><strong>试题试卷</strong></span>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            开学测
                                        </van-grid-item>
                                        <van-grid-item>
                                            同步测
                                        </van-grid-item>
                                        <van-grid-item>
                                            单元测
                                        </van-grid-item>
                                        <van-grid-item>
                                            月考
                                        </van-grid-item>
                                    </van-grid>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            期中
                                        </van-grid-item>
                                        <van-grid-item>
                                            期末
                                        </van-grid-item>
                                        <van-grid-item>
                                            学业
                                        </van-grid-item>
                                        <van-grid-item>
                                            联考
                                        </van-grid-item>
                                    </van-grid>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            调研
                                        </van-grid-item>
                                        <van-grid-item>
                                            竞赛
                                        </van-grid-item>
                                        <van-grid-item>
                                            模拟预测
                                        </van-grid-item>
                                        <van-grid-item>
                                            中考真题
                                        </van-grid-item>
                                    </van-grid>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            专题汇编
                                        </van-grid-item>
                                        <van-grid-item>
                                            自主招生
                                        </van-grid-item>
                                        <van-grid-item>
                                        </van-grid-item>
                                        <van-grid-item>
                                        </van-grid-item>
                                    </van-grid>
                                </div>
                                <div style="border:1px solid #C4C4C4;margin-top:8px;border-radius:3%;">
                                    <span style="display:inline-block;margin-top:8px;margin-left:8px"><strong>专辑</strong></span>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            同步备课
                                        </van-grid-item>
                                        <van-grid-item>
                                            知识点
                                        </van-grid-item>
                                        <van-grid-item>
                                            中考复习
                                        </van-grid-item>
                                        <van-grid-item>
                                            模拟预测
                                        </van-grid-item>
                                    </van-grid>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            中考真题
                                        </van-grid-item>
                                        <van-grid-item>
                                            试题汇编
                                        </van-grid-item>
                                        <van-grid-item>
                                            其他
                                        </van-grid-item>
                                        <van-grid-item>
                                        </van-grid-item>
                                    </van-grid>
                                </div>
                                <div style="border:1px solid #C4C4C4;margin-top:8px;border-radius:3%;margin-bottom:8px">
                                    <span style="display:inline-block;margin-top:8px;margin-left:8px"><strong>中考</strong></span>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            教学指导
                                        </van-grid-item>
                                        <van-grid-item>
                                            备考试题
                                        </van-grid-item>
                                        <van-grid-item>
                                            中考真题
                                        </van-grid-item>
                                        <van-grid-item>
                                        </van-grid-item>
                                    </van-grid>
                                </div>
                            </div>
                            <div v-if="index===2">
                                <van-swipe class="my-swipe" :autoplay="3000" style="flex:4" indicator-color="white">
                                    <van-swipe-item><img src="../assets/f3.png" style="width:100%"></van-swipe-item>
                                    <van-swipe-item><img src="../assets/f1.png" style="width:100%"></van-swipe-item>
                                    <van-swipe-item><img src="../assets/f2.png" style="width:100%"></van-swipe-item>
                                </van-swipe>
                                <div style="border:1px solid #C4C4C4;margin-top:8px;border-radius:3%;">
                                    <span style="display:inline-block;margin-top:8px;margin-left:8px"><strong>资源类别</strong></span>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            试卷
                                        </van-grid-item>
                                        <van-grid-item>
                                            教案
                                        </van-grid-item>
                                        <van-grid-item>
                                            课件
                                        </van-grid-item>
                                        <van-grid-item>
                                            素材
                                        </van-grid-item>
                                    </van-grid>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            视频
                                        </van-grid-item>
                                        <van-grid-item>
                                            备课包
                                        </van-grid-item>
                                        <van-grid-item>
                                            学案
                                        </van-grid-item>
                                        <van-grid-item>
                                            作业
                                        </van-grid-item>
                                    </van-grid>
                                </div>
                                <div style="border:1px solid #C4C4C4;margin-top:8px;border-radius:3%;">
                                    <span style="display:inline-block;margin-top:8px;margin-left:8px"><strong>试题试卷</strong></span>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            开学测
                                        </van-grid-item>
                                        <van-grid-item>
                                            同步测
                                        </van-grid-item>
                                        <van-grid-item>
                                            单元测
                                        </van-grid-item>
                                        <van-grid-item>
                                            月考
                                        </van-grid-item>
                                    </van-grid>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            期中
                                        </van-grid-item>
                                        <van-grid-item>
                                            期末
                                        </van-grid-item>
                                        <van-grid-item>
                                            学业
                                        </van-grid-item>
                                        <van-grid-item>
                                            联考
                                        </van-grid-item>
                                    </van-grid>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            调研
                                        </van-grid-item>
                                        <van-grid-item>
                                            竞赛
                                        </van-grid-item>
                                        <van-grid-item>
                                            模拟预测
                                        </van-grid-item>
                                        <van-grid-item>
                                            中考真题
                                        </van-grid-item>
                                    </van-grid>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            专题汇编
                                        </van-grid-item>
                                        <van-grid-item>
                                            自主招生
                                        </van-grid-item>
                                        <van-grid-item>
                                        </van-grid-item>
                                        <van-grid-item>
                                        </van-grid-item>
                                    </van-grid>
                                </div>
                                <div style="border:1px solid #C4C4C4;margin-top:8px;border-radius:3%;">
                                    <span style="display:inline-block;margin-top:8px;margin-left:8px"><strong>专辑</strong></span>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            同步备课
                                        </van-grid-item>
                                        <van-grid-item>
                                            知识点
                                        </van-grid-item>
                                        <van-grid-item>
                                            中考复习
                                        </van-grid-item>
                                        <van-grid-item>
                                            模拟预测
                                        </van-grid-item>
                                    </van-grid>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            中考真题
                                        </van-grid-item>
                                        <van-grid-item>
                                            试题汇编
                                        </van-grid-item>
                                        <van-grid-item>
                                            其他
                                        </van-grid-item>
                                        <van-grid-item>
                                        </van-grid-item>
                                    </van-grid>
                                </div>
                                <div style="border:1px solid #C4C4C4;margin-top:8px;border-radius:3%;margin-bottom:8px">
                                    <span style="display:inline-block;margin-top:8px;margin-left:8px"><strong>中考</strong></span>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            教学指导
                                        </van-grid-item>
                                        <van-grid-item>
                                            备考试题
                                        </van-grid-item>
                                        <van-grid-item>
                                            中考真题
                                        </van-grid-item>
                                        <van-grid-item>
                                        </van-grid-item>
                                    </van-grid>
                                </div>
                            </div>
                        </van-tab>
                    </van-tabs>
                    <van-tabs v-model="active2" v-if="active === 1" animated swipeable="true">
                        <van-tab v-for="index in 2" :title="'选项 ' + index">
                            <div v-if="index===1">
                                <van-swipe class="my-swipe" :autoplay="3000" style="flex:4" indicator-color="white">
                                    <van-swipe-item><img src="../assets/f2.png" style="width:100%"></van-swipe-item>
                                    <van-swipe-item><img src="../assets/f1.png" style="width:100%"></van-swipe-item>
                                    <van-swipe-item><img src="../assets/f3.png" style="width:100%"></van-swipe-item>
                                </van-swipe>
                                <div style="border:1px solid #C4C4C4;margin-top:8px;border-radius:3%;">
                                    <span style="display:inline-block;margin-top:8px;margin-left:8px"><strong>试题试卷</strong></span>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            开学测
                                        </van-grid-item>
                                        <van-grid-item>
                                            同步测
                                        </van-grid-item>
                                        <van-grid-item>
                                            单元测
                                        </van-grid-item>
                                        <van-grid-item>
                                            月考
                                        </van-grid-item>
                                    </van-grid>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            期中
                                        </van-grid-item>
                                        <van-grid-item>
                                            期末
                                        </van-grid-item>
                                        <van-grid-item>
                                            学业
                                        </van-grid-item>
                                        <van-grid-item>
                                            联考
                                        </van-grid-item>
                                    </van-grid>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            调研
                                        </van-grid-item>
                                        <van-grid-item>
                                            竞赛
                                        </van-grid-item>
                                        <van-grid-item>
                                            模拟预测
                                        </van-grid-item>
                                        <van-grid-item>
                                            中考真题
                                        </van-grid-item>
                                    </van-grid>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            专题汇编
                                        </van-grid-item>
                                        <van-grid-item>
                                            自主招生
                                        </van-grid-item>
                                        <van-grid-item>
                                        </van-grid-item>
                                        <van-grid-item>
                                        </van-grid-item>
                                    </van-grid>
                                </div>
                                <div style="border:1px solid #C4C4C4;margin-top:8px;border-radius:3%;">
                                    <span style="display:inline-block;margin-top:8px;margin-left:8px"><strong>资源类别222</strong></span>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            试卷
                                        </van-grid-item>
                                        <van-grid-item>
                                            教案
                                        </van-grid-item>
                                        <van-grid-item>
                                            课件
                                        </van-grid-item>
                                        <van-grid-item>
                                            素材
                                        </van-grid-item>
                                    </van-grid>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            视频
                                        </van-grid-item>
                                        <van-grid-item>
                                            备课包
                                        </van-grid-item>
                                        <van-grid-item>
                                            学案
                                        </van-grid-item>
                                        <van-grid-item>
                                            作业
                                        </van-grid-item>
                                    </van-grid>
                                </div>
                                <div style="border:1px solid #C4C4C4;margin-top:8px;border-radius:3%;">
                                    <span style="display:inline-block;margin-top:8px;margin-left:8px"><strong>专辑</strong></span>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            同步备课
                                        </van-grid-item>
                                        <van-grid-item>
                                            知识点
                                        </van-grid-item>
                                        <van-grid-item>
                                            中考复习
                                        </van-grid-item>
                                        <van-grid-item>
                                            模拟预测
                                        </van-grid-item>
                                    </van-grid>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            中考真题
                                        </van-grid-item>
                                        <van-grid-item>
                                            试题汇编
                                        </van-grid-item>
                                        <van-grid-item>
                                            其他
                                        </van-grid-item>
                                        <van-grid-item>
                                        </van-grid-item>
                                    </van-grid>
                                </div>
                                <div style="border:1px solid #C4C4C4;margin-top:8px;border-radius:3%;margin-bottom:8px">
                                    <span style="display:inline-block;margin-top:8px;margin-left:8px"><strong>中考</strong></span>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            教学指导
                                        </van-grid-item>
                                        <van-grid-item>
                                            备考试题
                                        </van-grid-item>
                                        <van-grid-item>
                                            中考真题
                                        </van-grid-item>
                                        <van-grid-item>
                                        </van-grid-item>
                                    </van-grid>
                                </div>
                            </div>
                            <div v-if="index===2">
                                <van-swipe class="my-swipe" :autoplay="3000" style="flex:4" indicator-color="white">
                                    <van-swipe-item><img src="../assets/f3.png" style="width:100%"></van-swipe-item>
                                    <van-swipe-item><img src="../assets/f1.png" style="width:100%"></van-swipe-item>
                                    <van-swipe-item><img src="../assets/f2.png" style="width:100%"></van-swipe-item>
                                </van-swipe>
                                <div style="border:1px solid #C4C4C4;margin-top:8px;border-radius:3%;">
                                    <span style="display:inline-block;margin-top:8px;margin-left:8px"><strong>资源类别</strong></span>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            试卷
                                        </van-grid-item>
                                        <van-grid-item>
                                            教案
                                        </van-grid-item>
                                        <van-grid-item>
                                            课件
                                        </van-grid-item>
                                        <van-grid-item>
                                            素材
                                        </van-grid-item>
                                    </van-grid>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            视频
                                        </van-grid-item>
                                        <van-grid-item>
                                            备课包
                                        </van-grid-item>
                                        <van-grid-item>
                                            学案
                                        </van-grid-item>
                                        <van-grid-item>
                                            作业
                                        </van-grid-item>
                                    </van-grid>
                                </div>
                                <div style="border:1px solid #C4C4C4;margin-top:8px;border-radius:3%;">
                                    <span style="display:inline-block;margin-top:8px;margin-left:8px"><strong>试题试卷</strong></span>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            开学测
                                        </van-grid-item>
                                        <van-grid-item>
                                            同步测
                                        </van-grid-item>
                                        <van-grid-item>
                                            单元测
                                        </van-grid-item>
                                        <van-grid-item>
                                            月考
                                        </van-grid-item>
                                    </van-grid>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            期中
                                        </van-grid-item>
                                        <van-grid-item>
                                            期末
                                        </van-grid-item>
                                        <van-grid-item>
                                            学业
                                        </van-grid-item>
                                        <van-grid-item>
                                            联考
                                        </van-grid-item>
                                    </van-grid>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            调研
                                        </van-grid-item>
                                        <van-grid-item>
                                            竞赛
                                        </van-grid-item>
                                        <van-grid-item>
                                            模拟预测
                                        </van-grid-item>
                                        <van-grid-item>
                                            中考真题
                                        </van-grid-item>
                                    </van-grid>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            专题汇编
                                        </van-grid-item>
                                        <van-grid-item>
                                            自主招生
                                        </van-grid-item>
                                        <van-grid-item>
                                        </van-grid-item>
                                        <van-grid-item>
                                        </van-grid-item>
                                    </van-grid>
                                </div>
                                <div style="border:1px solid #C4C4C4;margin-top:8px;border-radius:3%;">
                                    <span style="display:inline-block;margin-top:8px;margin-left:8px"><strong>专辑</strong></span>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            同步备课
                                        </van-grid-item>
                                        <van-grid-item>
                                            知识点
                                        </van-grid-item>
                                        <van-grid-item>
                                            中考复习
                                        </van-grid-item>
                                        <van-grid-item>
                                            模拟预测
                                        </van-grid-item>
                                    </van-grid>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            中考真题
                                        </van-grid-item>
                                        <van-grid-item>
                                            试题汇编
                                        </van-grid-item>
                                        <van-grid-item>
                                            其他
                                        </van-grid-item>
                                        <van-grid-item>
                                        </van-grid-item>
                                    </van-grid>
                                </div>
                                <div style="border:1px solid #C4C4C4;margin-top:8px;border-radius:3%;margin-bottom:8px">
                                    <span style="display:inline-block;margin-top:8px;margin-left:8px"><strong>中考</strong></span>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            教学指导
                                        </van-grid-item>
                                        <van-grid-item>
                                            备考试题
                                        </van-grid-item>
                                        <van-grid-item>
                                            中考真题
                                        </van-grid-item>
                                        <van-grid-item>
                                        </van-grid-item>
                                    </van-grid>
                                </div>
                            </div>
                        </van-tab>
                    </van-tabs>
                    <van-tabs v-model="active3" v-if="active === 2" animated swipeable="true">
                        <van-tab v-for="index in 2" :title="'选项 ' + index">
                            <div v-if="index===1">
                                <van-swipe class="my-swipe" :autoplay="3000" style="flex:4" indicator-color="white">
                                    <van-swipe-item><img src="../assets/f2.png" style="width:100%"></van-swipe-item>
                                    <van-swipe-item><img src="../assets/f1.png" style="width:100%"></van-swipe-item>
                                    <van-swipe-item><img src="../assets/f3.png" style="width:100%"></van-swipe-item>
                                </van-swipe>
                                <div style="border:1px solid #C4C4C4;margin-top:8px;border-radius:3%;">
                                    <span style="display:inline-block;margin-top:8px;margin-left:8px"><strong>专辑</strong></span>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            同步备课
                                        </van-grid-item>
                                        <van-grid-item>
                                            知识点
                                        </van-grid-item>
                                        <van-grid-item>
                                            中考复习
                                        </van-grid-item>
                                        <van-grid-item>
                                            模拟预测
                                        </van-grid-item>
                                    </van-grid>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            中考真题
                                        </van-grid-item>
                                        <van-grid-item>
                                            试题汇编
                                        </van-grid-item>
                                        <van-grid-item>
                                            其他
                                        </van-grid-item>
                                        <van-grid-item>
                                        </van-grid-item>
                                    </van-grid>
                                </div>
                                <div style="border:1px solid #C4C4C4;margin-top:8px;border-radius:3%;">
                                    <span style="display:inline-block;margin-top:8px;margin-left:8px"><strong>试题试卷</strong></span>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            开学测
                                        </van-grid-item>
                                        <van-grid-item>
                                            同步测
                                        </van-grid-item>
                                        <van-grid-item>
                                            单元测
                                        </van-grid-item>
                                        <van-grid-item>
                                            月考
                                        </van-grid-item>
                                    </van-grid>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            期中
                                        </van-grid-item>
                                        <van-grid-item>
                                            期末
                                        </van-grid-item>
                                        <van-grid-item>
                                            学业
                                        </van-grid-item>
                                        <van-grid-item>
                                            联考
                                        </van-grid-item>
                                    </van-grid>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            调研
                                        </van-grid-item>
                                        <van-grid-item>
                                            竞赛
                                        </van-grid-item>
                                        <van-grid-item>
                                            模拟预测
                                        </van-grid-item>
                                        <van-grid-item>
                                            中考真题
                                        </van-grid-item>
                                    </van-grid>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            专题汇编
                                        </van-grid-item>
                                        <van-grid-item>
                                            自主招生
                                        </van-grid-item>
                                        <van-grid-item>
                                        </van-grid-item>
                                        <van-grid-item>
                                        </van-grid-item>
                                    </van-grid>
                                </div>
                                <div style="border:1px solid #C4C4C4;margin-top:8px;border-radius:3%;">
                                    <span style="display:inline-block;margin-top:8px;margin-left:8px"><strong>资源类别</strong></span>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            试卷
                                        </van-grid-item>
                                        <van-grid-item>
                                            教案
                                        </van-grid-item>
                                        <van-grid-item>
                                            课件
                                        </van-grid-item>
                                        <van-grid-item>
                                            素材
                                        </van-grid-item>
                                    </van-grid>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            视频
                                        </van-grid-item>
                                        <van-grid-item>
                                            备课包
                                        </van-grid-item>
                                        <van-grid-item>
                                            学案
                                        </van-grid-item>
                                        <van-grid-item>
                                            作业
                                        </van-grid-item>
                                    </van-grid>
                                </div>
                                <div style="border:1px solid #C4C4C4;margin-top:8px;border-radius:3%;margin-bottom:8px">
                                    <span style="display:inline-block;margin-top:8px;margin-left:8px"><strong>中考</strong></span>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            教学指导
                                        </van-grid-item>
                                        <van-grid-item>
                                            备考试题
                                        </van-grid-item>
                                        <van-grid-item>
                                            中考真题
                                        </van-grid-item>
                                        <van-grid-item>
                                        </van-grid-item>
                                    </van-grid>
                                </div>
                            </div>
                            <div v-if="index===2">
                                <van-swipe class="my-swipe" :autoplay="3000" style="flex:4" indicator-color="white">
                                    <van-swipe-item><img src="../assets/f3.png" style="width:100%"></van-swipe-item>
                                    <van-swipe-item><img src="../assets/f1.png" style="width:100%"></van-swipe-item>
                                    <van-swipe-item><img src="../assets/f2.png" style="width:100%"></van-swipe-item>
                                </van-swipe>
                                <div style="border:1px solid #C4C4C4;margin-top:8px;border-radius:3%;">
                                    <span style="display:inline-block;margin-top:8px;margin-left:8px"><strong>资源类别</strong></span>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            试卷
                                        </van-grid-item>
                                        <van-grid-item>
                                            教案
                                        </van-grid-item>
                                        <van-grid-item>
                                            课件
                                        </van-grid-item>
                                        <van-grid-item>
                                            素材
                                        </van-grid-item>
                                    </van-grid>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            视频
                                        </van-grid-item>
                                        <van-grid-item>
                                            备课包
                                        </van-grid-item>
                                        <van-grid-item>
                                            学案
                                        </van-grid-item>
                                        <van-grid-item>
                                            作业
                                        </van-grid-item>
                                    </van-grid>
                                </div>
                                <div style="border:1px solid #C4C4C4;margin-top:8px;border-radius:3%;">
                                    <span style="display:inline-block;margin-top:8px;margin-left:8px"><strong>试题试卷</strong></span>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            开学测
                                        </van-grid-item>
                                        <van-grid-item>
                                            同步测
                                        </van-grid-item>
                                        <van-grid-item>
                                            单元测
                                        </van-grid-item>
                                        <van-grid-item>
                                            月考
                                        </van-grid-item>
                                    </van-grid>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            期中
                                        </van-grid-item>
                                        <van-grid-item>
                                            期末
                                        </van-grid-item>
                                        <van-grid-item>
                                            学业
                                        </van-grid-item>
                                        <van-grid-item>
                                            联考
                                        </van-grid-item>
                                    </van-grid>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            调研
                                        </van-grid-item>
                                        <van-grid-item>
                                            竞赛
                                        </van-grid-item>
                                        <van-grid-item>
                                            模拟预测
                                        </van-grid-item>
                                        <van-grid-item>
                                            中考真题
                                        </van-grid-item>
                                    </van-grid>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            专题汇编
                                        </van-grid-item>
                                        <van-grid-item>
                                            自主招生
                                        </van-grid-item>
                                        <van-grid-item>
                                        </van-grid-item>
                                        <van-grid-item>
                                        </van-grid-item>
                                    </van-grid>
                                </div>
                                <div style="border:1px solid #C4C4C4;margin-top:8px;border-radius:3%;">
                                    <span style="display:inline-block;margin-top:8px;margin-left:8px"><strong>专辑</strong></span>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            同步备课
                                        </van-grid-item>
                                        <van-grid-item>
                                            知识点
                                        </van-grid-item>
                                        <van-grid-item>
                                            中考复习
                                        </van-grid-item>
                                        <van-grid-item>
                                            模拟预测
                                        </van-grid-item>
                                    </van-grid>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            中考真题
                                        </van-grid-item>
                                        <van-grid-item>
                                            试题汇编
                                        </van-grid-item>
                                        <van-grid-item>
                                            其他
                                        </van-grid-item>
                                        <van-grid-item>
                                        </van-grid-item>
                                    </van-grid>
                                </div>
                                <div style="border:1px solid #C4C4C4;margin-top:8px;border-radius:3%;margin-bottom:8px">
                                    <span style="display:inline-block;margin-top:8px;margin-left:8px"><strong>中考</strong></span>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            教学指导
                                        </van-grid-item>
                                        <van-grid-item>
                                            备考试题
                                        </van-grid-item>
                                        <van-grid-item>
                                            中考真题
                                        </van-grid-item>
                                        <van-grid-item>
                                        </van-grid-item>
                                    </van-grid>
                                </div>
                            </div>
                        </van-tab>
                    </van-tabs>
                    <van-tabs v-model="active4" v-if="active === 3" animated swipeable="true">
                        <van-tab v-for="index in 2" :title="'选项 ' + index">
                            <div v-if="index===1">
                                <van-swipe class="my-swipe" :autoplay="3000" style="flex:4" indicator-color="white">
                                    <van-swipe-item><img src="../assets/f2.png" style="width:100%"></van-swipe-item>
                                    <van-swipe-item><img src="../assets/f1.png" style="width:100%"></van-swipe-item>
                                    <van-swipe-item><img src="../assets/f3.png" style="width:100%"></van-swipe-item>
                                </van-swipe>
                                <div style="border:1px solid #C4C4C4;margin-top:8px;border-radius:3%;margin-bottom:8px">
                                    <span style="display:inline-block;margin-top:8px;margin-left:8px"><strong>中考3</strong></span>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            教学指导
                                        </van-grid-item>
                                        <van-grid-item>
                                            备考试题
                                        </van-grid-item>
                                        <van-grid-item>
                                            中考真题
                                        </van-grid-item>
                                        <van-grid-item>
                                        </van-grid-item>
                                    </van-grid>
                                </div>
                                <div style="border:1px solid #C4C4C4;margin-top:8px;border-radius:3%;">
                                    <span style="display:inline-block;margin-top:8px;margin-left:8px"><strong>专辑</strong></span>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            同步备课
                                        </van-grid-item>
                                        <van-grid-item>
                                            知识点
                                        </van-grid-item>
                                        <van-grid-item>
                                            中考复习
                                        </van-grid-item>
                                        <van-grid-item>
                                            模拟预测
                                        </van-grid-item>
                                    </van-grid>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            中考真题
                                        </van-grid-item>
                                        <van-grid-item>
                                            试题汇编
                                        </van-grid-item>
                                        <van-grid-item>
                                            其他
                                        </van-grid-item>
                                        <van-grid-item>
                                        </van-grid-item>
                                    </van-grid>
                                </div>
                                <div style="border:1px solid #C4C4C4;margin-top:8px;border-radius:3%;">
                                    <span style="display:inline-block;margin-top:8px;margin-left:8px"><strong>试题试卷</strong></span>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            开学测
                                        </van-grid-item>
                                        <van-grid-item>
                                            同步测
                                        </van-grid-item>
                                        <van-grid-item>
                                            单元测
                                        </van-grid-item>
                                        <van-grid-item>
                                            月考
                                        </van-grid-item>
                                    </van-grid>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            期中
                                        </van-grid-item>
                                        <van-grid-item>
                                            期末
                                        </van-grid-item>
                                        <van-grid-item>
                                            学业
                                        </van-grid-item>
                                        <van-grid-item>
                                            联考
                                        </van-grid-item>
                                    </van-grid>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            调研
                                        </van-grid-item>
                                        <van-grid-item>
                                            竞赛
                                        </van-grid-item>
                                        <van-grid-item>
                                            模拟预测
                                        </van-grid-item>
                                        <van-grid-item>
                                            中考真题
                                        </van-grid-item>
                                    </van-grid>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            专题汇编
                                        </van-grid-item>
                                        <van-grid-item>
                                            自主招生
                                        </van-grid-item>
                                        <van-grid-item>
                                        </van-grid-item>
                                        <van-grid-item>
                                        </van-grid-item>
                                    </van-grid>
                                </div>
                                <div style="border:1px solid #C4C4C4;margin-top:8px;border-radius:3%;">
                                    <span style="display:inline-block;margin-top:8px;margin-left:8px"><strong>资源类别</strong></span>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            试卷
                                        </van-grid-item>
                                        <van-grid-item>
                                            教案
                                        </van-grid-item>
                                        <van-grid-item>
                                            课件
                                        </van-grid-item>
                                        <van-grid-item>
                                            素材
                                        </van-grid-item>
                                    </van-grid>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            视频
                                        </van-grid-item>
                                        <van-grid-item>
                                            备课包
                                        </van-grid-item>
                                        <van-grid-item>
                                            学案
                                        </van-grid-item>
                                        <van-grid-item>
                                            作业
                                        </van-grid-item>
                                    </van-grid>
                                </div>
                                <div style="border:1px solid #C4C4C4;margin-top:8px;border-radius:3%;margin-bottom:8px">
                                    <span style="display:inline-block;margin-top:8px;margin-left:8px"><strong>中考</strong></span>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            教学指导
                                        </van-grid-item>
                                        <van-grid-item>
                                            备考试题
                                        </van-grid-item>
                                        <van-grid-item>
                                            中考真题
                                        </van-grid-item>
                                        <van-grid-item>
                                        </van-grid-item>
                                    </van-grid>
                                </div>
                            </div>
                            <div v-if="index===2">
                                <van-swipe class="my-swipe" :autoplay="3000" style="flex:4" indicator-color="white">
                                    <van-swipe-item><img src="../assets/f3.png" style="width:100%"></van-swipe-item>
                                    <van-swipe-item><img src="../assets/f1.png" style="width:100%"></van-swipe-item>
                                    <van-swipe-item><img src="../assets/f2.png" style="width:100%"></van-swipe-item>
                                </van-swipe>
                                <div style="border:1px solid #C4C4C4;margin-top:8px;border-radius:3%;">
                                    <span style="display:inline-block;margin-top:8px;margin-left:8px"><strong>资源类别</strong></span>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            试卷
                                        </van-grid-item>
                                        <van-grid-item>
                                            教案
                                        </van-grid-item>
                                        <van-grid-item>
                                            课件
                                        </van-grid-item>
                                        <van-grid-item>
                                            素材
                                        </van-grid-item>
                                    </van-grid>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            视频
                                        </van-grid-item>
                                        <van-grid-item>
                                            备课包
                                        </van-grid-item>
                                        <van-grid-item>
                                            学案
                                        </van-grid-item>
                                        <van-grid-item>
                                            作业
                                        </van-grid-item>
                                    </van-grid>
                                </div>
                                <div style="border:1px solid #C4C4C4;margin-top:8px;border-radius:3%;">
                                    <span style="display:inline-block;margin-top:8px;margin-left:8px"><strong>试题试卷</strong></span>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            开学测
                                        </van-grid-item>
                                        <van-grid-item>
                                            同步测
                                        </van-grid-item>
                                        <van-grid-item>
                                            单元测
                                        </van-grid-item>
                                        <van-grid-item>
                                            月考
                                        </van-grid-item>
                                    </van-grid>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            期中
                                        </van-grid-item>
                                        <van-grid-item>
                                            期末
                                        </van-grid-item>
                                        <van-grid-item>
                                            学业
                                        </van-grid-item>
                                        <van-grid-item>
                                            联考
                                        </van-grid-item>
                                    </van-grid>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            调研
                                        </van-grid-item>
                                        <van-grid-item>
                                            竞赛
                                        </van-grid-item>
                                        <van-grid-item>
                                            模拟预测
                                        </van-grid-item>
                                        <van-grid-item>
                                            中考真题
                                        </van-grid-item>
                                    </van-grid>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            专题汇编
                                        </van-grid-item>
                                        <van-grid-item>
                                            自主招生
                                        </van-grid-item>
                                        <van-grid-item>
                                        </van-grid-item>
                                        <van-grid-item>
                                        </van-grid-item>
                                    </van-grid>
                                </div>
                                <div style="border:1px solid #C4C4C4;margin-top:8px;border-radius:3%;">
                                    <span style="display:inline-block;margin-top:8px;margin-left:8px"><strong>专辑</strong></span>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            同步备课
                                        </van-grid-item>
                                        <van-grid-item>
                                            知识点
                                        </van-grid-item>
                                        <van-grid-item>
                                            中考复习
                                        </van-grid-item>
                                        <van-grid-item>
                                            模拟预测
                                        </van-grid-item>
                                    </van-grid>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            中考真题
                                        </van-grid-item>
                                        <van-grid-item>
                                            试题汇编
                                        </van-grid-item>
                                        <van-grid-item>
                                            其他
                                        </van-grid-item>
                                        <van-grid-item>
                                        </van-grid-item>
                                    </van-grid>
                                </div>
                            </div>
                        </van-tab>
                    </van-tabs>
                    <van-tabs v-model="active5" v-if="active === 4" animated swipeable="true">
                        <van-tab v-for="index in 2" :title="'选项 ' + index">
                            <div v-if="index===1">
                                <van-swipe class="my-swipe" :autoplay="3000" style="flex:4" indicator-color="white">
                                    <van-swipe-item><img src="../assets/f2.png" style="width:100%"></van-swipe-item>
                                    <van-swipe-item><img src="../assets/f1.png" style="width:100%"></van-swipe-item>
                                    <van-swipe-item><img src="../assets/f3.png" style="width:100%"></van-swipe-item>
                                </van-swipe>
                                <div style="border:1px solid #C4C4C4;margin-top:8px;border-radius:3%;margin-bottom:8px">
                                    <span style="display:inline-block;margin-top:8px;margin-left:8px"><strong>中考4</strong></span>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            教学指导
                                        </van-grid-item>
                                        <van-grid-item>
                                            备考试题
                                        </van-grid-item>
                                        <van-grid-item>
                                            中考真题
                                        </van-grid-item>
                                        <van-grid-item>
                                        </van-grid-item>
                                    </van-grid>
                                </div>
                                <div style="border:1px solid #C4C4C4;margin-top:8px;border-radius:3%;">
                                    <span style="display:inline-block;margin-top:8px;margin-left:8px"><strong>专辑</strong></span>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            同步备课
                                        </van-grid-item>
                                        <van-grid-item>
                                            知识点
                                        </van-grid-item>
                                        <van-grid-item>
                                            中考复习
                                        </van-grid-item>
                                        <van-grid-item>
                                            模拟预测
                                        </van-grid-item>
                                    </van-grid>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            中考真题
                                        </van-grid-item>
                                        <van-grid-item>
                                            试题汇编
                                        </van-grid-item>
                                        <van-grid-item>
                                            其他
                                        </van-grid-item>
                                        <van-grid-item>
                                        </van-grid-item>
                                    </van-grid>
                                </div>
                                <div style="border:1px solid #C4C4C4;margin-top:8px;border-radius:3%;">
                                    <span style="display:inline-block;margin-top:8px;margin-left:8px"><strong>试题试卷</strong></span>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            开学测
                                        </van-grid-item>
                                        <van-grid-item>
                                            同步测
                                        </van-grid-item>
                                        <van-grid-item>
                                            单元测
                                        </van-grid-item>
                                        <van-grid-item>
                                            月考
                                        </van-grid-item>
                                    </van-grid>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            期中
                                        </van-grid-item>
                                        <van-grid-item>
                                            期末
                                        </van-grid-item>
                                        <van-grid-item>
                                            学业
                                        </van-grid-item>
                                        <van-grid-item>
                                            联考
                                        </van-grid-item>
                                    </van-grid>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            调研
                                        </van-grid-item>
                                        <van-grid-item>
                                            竞赛
                                        </van-grid-item>
                                        <van-grid-item>
                                            模拟预测
                                        </van-grid-item>
                                        <van-grid-item>
                                            中考真题
                                        </van-grid-item>
                                    </van-grid>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            专题汇编
                                        </van-grid-item>
                                        <van-grid-item>
                                            自主招生
                                        </van-grid-item>
                                        <van-grid-item>
                                        </van-grid-item>
                                        <van-grid-item>
                                        </van-grid-item>
                                    </van-grid>
                                </div>
                                <div style="border:1px solid #C4C4C4;margin-top:8px;border-radius:3%;">
                                    <span style="display:inline-block;margin-top:8px;margin-left:8px"><strong>资源类别</strong></span>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            试卷
                                        </van-grid-item>
                                        <van-grid-item>
                                            教案
                                        </van-grid-item>
                                        <van-grid-item>
                                            课件
                                        </van-grid-item>
                                        <van-grid-item>
                                            素材
                                        </van-grid-item>
                                    </van-grid>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            视频
                                        </van-grid-item>
                                        <van-grid-item>
                                            备课包
                                        </van-grid-item>
                                        <van-grid-item>
                                            学案
                                        </van-grid-item>
                                        <van-grid-item>
                                            作业
                                        </van-grid-item>
                                    </van-grid>
                                </div>
                                <div style="border:1px solid #C4C4C4;margin-top:8px;border-radius:3%;margin-bottom:8px">
                                    <span style="display:inline-block;margin-top:8px;margin-left:8px"><strong>中考</strong></span>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            教学指导
                                        </van-grid-item>
                                        <van-grid-item>
                                            备考试题
                                        </van-grid-item>
                                        <van-grid-item>
                                            中考真题
                                        </van-grid-item>
                                        <van-grid-item>
                                        </van-grid-item>
                                    </van-grid>
                                </div>
                            </div>
                            <div v-if="index===2">
                                <van-swipe class="my-swipe" :autoplay="3000" style="flex:4" indicator-color="white">
                                    <van-swipe-item><img src="../assets/f3.png" style="width:100%"></van-swipe-item>
                                    <van-swipe-item><img src="../assets/f1.png" style="width:100%"></van-swipe-item>
                                    <van-swipe-item><img src="../assets/f2.png" style="width:100%"></van-swipe-item>
                                </van-swipe>
                                <div style="border:1px solid #C4C4C4;margin-top:8px;border-radius:3%;">
                                    <span style="display:inline-block;margin-top:8px;margin-left:8px"><strong>资源类别</strong></span>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            试卷
                                        </van-grid-item>
                                        <van-grid-item>
                                            教案
                                        </van-grid-item>
                                        <van-grid-item>
                                            课件
                                        </van-grid-item>
                                        <van-grid-item>
                                            素材
                                        </van-grid-item>
                                    </van-grid>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            视频
                                        </van-grid-item>
                                        <van-grid-item>
                                            备课包
                                        </van-grid-item>
                                        <van-grid-item>
                                            学案
                                        </van-grid-item>
                                        <van-grid-item>
                                            作业
                                        </van-grid-item>
                                    </van-grid>
                                </div>
                                <div style="border:1px solid #C4C4C4;margin-top:8px;border-radius:3%;">
                                    <span style="display:inline-block;margin-top:8px;margin-left:8px"><strong>试题试卷</strong></span>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            开学测
                                        </van-grid-item>
                                        <van-grid-item>
                                            同步测
                                        </van-grid-item>
                                        <van-grid-item>
                                            单元测
                                        </van-grid-item>
                                        <van-grid-item>
                                            月考
                                        </van-grid-item>
                                    </van-grid>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            期中
                                        </van-grid-item>
                                        <van-grid-item>
                                            期末
                                        </van-grid-item>
                                        <van-grid-item>
                                            学业
                                        </van-grid-item>
                                        <van-grid-item>
                                            联考
                                        </van-grid-item>
                                    </van-grid>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            调研
                                        </van-grid-item>
                                        <van-grid-item>
                                            竞赛
                                        </van-grid-item>
                                        <van-grid-item>
                                            模拟预测
                                        </van-grid-item>
                                        <van-grid-item>
                                            中考真题
                                        </van-grid-item>
                                    </van-grid>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            专题汇编
                                        </van-grid-item>
                                        <van-grid-item>
                                            自主招生
                                        </van-grid-item>
                                        <van-grid-item>
                                        </van-grid-item>
                                        <van-grid-item>
                                        </van-grid-item>
                                    </van-grid>
                                </div>
                                <div style="border:1px solid #C4C4C4;margin-top:8px;border-radius:3%;">
                                    <span style="display:inline-block;margin-top:8px;margin-left:8px"><strong>专辑</strong></span>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            同步备课
                                        </van-grid-item>
                                        <van-grid-item>
                                            知识点
                                        </van-grid-item>
                                        <van-grid-item>
                                            中考复习
                                        </van-grid-item>
                                        <van-grid-item>
                                            模拟预测
                                        </van-grid-item>
                                    </van-grid>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            中考真题
                                        </van-grid-item>
                                        <van-grid-item>
                                            试题汇编
                                        </van-grid-item>
                                        <van-grid-item>
                                            其他
                                        </van-grid-item>
                                        <van-grid-item>
                                        </van-grid-item>
                                    </van-grid>
                                </div>
                            </div>
                        </van-tab>
                    </van-tabs>
                    <van-tabs v-model="active6" v-if="active === 5" animated swipeable="true">
                        <van-tab v-for="index in 2" :title="'选项 ' + index">
                            <div v-if="index===1">
                                <van-swipe class="my-swipe" :autoplay="3000" style="flex:4" indicator-color="white">
                                    <van-swipe-item><img src="../assets/f2.png" style="width:100%"></van-swipe-item>
                                    <van-swipe-item><img src="../assets/f1.png" style="width:100%"></van-swipe-item>
                                    <van-swipe-item><img src="../assets/f3.png" style="width:100%"></van-swipe-item>
                                </van-swipe>
                                <div style="border:1px solid #C4C4C4;margin-top:8px;border-radius:3%;margin-bottom:8px">
                                    <span style="display:inline-block;margin-top:8px;margin-left:8px"><strong>中考5</strong></span>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            教学指导
                                        </van-grid-item>
                                        <van-grid-item>
                                            备考试题
                                        </van-grid-item>
                                        <van-grid-item>
                                            中考真题
                                        </van-grid-item>
                                        <van-grid-item>
                                        </van-grid-item>
                                    </van-grid>
                                </div>
                                <div style="border:1px solid #C4C4C4;margin-top:8px;border-radius:3%;">
                                    <span style="display:inline-block;margin-top:8px;margin-left:8px"><strong>专辑</strong></span>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            同步备课
                                        </van-grid-item>
                                        <van-grid-item>
                                            知识点
                                        </van-grid-item>
                                        <van-grid-item>
                                            中考复习
                                        </van-grid-item>
                                        <van-grid-item>
                                            模拟预测
                                        </van-grid-item>
                                    </van-grid>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            中考真题
                                        </van-grid-item>
                                        <van-grid-item>
                                            试题汇编
                                        </van-grid-item>
                                        <van-grid-item>
                                            其他
                                        </van-grid-item>
                                        <van-grid-item>
                                        </van-grid-item>
                                    </van-grid>
                                </div>
                                <div style="border:1px solid #C4C4C4;margin-top:8px;border-radius:3%;">
                                    <span style="display:inline-block;margin-top:8px;margin-left:8px"><strong>试题试卷</strong></span>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            开学测
                                        </van-grid-item>
                                        <van-grid-item>
                                            同步测
                                        </van-grid-item>
                                        <van-grid-item>
                                            单元测
                                        </van-grid-item>
                                        <van-grid-item>
                                            月考
                                        </van-grid-item>
                                    </van-grid>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            期中
                                        </van-grid-item>
                                        <van-grid-item>
                                            期末
                                        </van-grid-item>
                                        <van-grid-item>
                                            学业
                                        </van-grid-item>
                                        <van-grid-item>
                                            联考
                                        </van-grid-item>
                                    </van-grid>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            调研
                                        </van-grid-item>
                                        <van-grid-item>
                                            竞赛
                                        </van-grid-item>
                                        <van-grid-item>
                                            模拟预测
                                        </van-grid-item>
                                        <van-grid-item>
                                            中考真题
                                        </van-grid-item>
                                    </van-grid>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            专题汇编
                                        </van-grid-item>
                                        <van-grid-item>
                                            自主招生
                                        </van-grid-item>
                                        <van-grid-item>
                                        </van-grid-item>
                                        <van-grid-item>
                                        </van-grid-item>
                                    </van-grid>
                                </div>
                                <div style="border:1px solid #C4C4C4;margin-top:8px;border-radius:3%;">
                                    <span style="display:inline-block;margin-top:8px;margin-left:8px"><strong>资源类别</strong></span>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            试卷
                                        </van-grid-item>
                                        <van-grid-item>
                                            教案
                                        </van-grid-item>
                                        <van-grid-item>
                                            课件
                                        </van-grid-item>
                                        <van-grid-item>
                                            素材
                                        </van-grid-item>
                                    </van-grid>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            视频
                                        </van-grid-item>
                                        <van-grid-item>
                                            备课包
                                        </van-grid-item>
                                        <van-grid-item>
                                            学案
                                        </van-grid-item>
                                        <van-grid-item>
                                            作业
                                        </van-grid-item>
                                    </van-grid>
                                </div>
                                <div style="border:1px solid #C4C4C4;margin-top:8px;border-radius:3%;margin-bottom:8px">
                                    <span style="display:inline-block;margin-top:8px;margin-left:8px"><strong>中考</strong></span>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            教学指导
                                        </van-grid-item>
                                        <van-grid-item>
                                            备考试题
                                        </van-grid-item>
                                        <van-grid-item>
                                            中考真题
                                        </van-grid-item>
                                        <van-grid-item>
                                        </van-grid-item>
                                    </van-grid>
                                </div>
                            </div>
                            <div v-if="index===2">
                                <van-swipe class="my-swipe" :autoplay="3000" style="flex:4" indicator-color="white">
                                    <van-swipe-item><img src="../assets/f3.png" style="width:100%"></van-swipe-item>
                                    <van-swipe-item><img src="../assets/f1.png" style="width:100%"></van-swipe-item>
                                    <van-swipe-item><img src="../assets/f2.png" style="width:100%"></van-swipe-item>
                                </van-swipe>
                                <div style="border:1px solid #C4C4C4;margin-top:8px;border-radius:3%;">
                                    <span style="display:inline-block;margin-top:8px;margin-left:8px"><strong>资源类别</strong></span>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            试卷
                                        </van-grid-item>
                                        <van-grid-item>
                                            教案
                                        </van-grid-item>
                                        <van-grid-item>
                                            课件
                                        </van-grid-item>
                                        <van-grid-item>
                                            素材
                                        </van-grid-item>
                                    </van-grid>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            视频
                                        </van-grid-item>
                                        <van-grid-item>
                                            备课包
                                        </van-grid-item>
                                        <van-grid-item>
                                            学案
                                        </van-grid-item>
                                        <van-grid-item>
                                            作业
                                        </van-grid-item>
                                    </van-grid>
                                </div>
                                <div style="border:1px solid #C4C4C4;margin-top:8px;border-radius:3%;">
                                    <span style="display:inline-block;margin-top:8px;margin-left:8px"><strong>试题试卷</strong></span>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            开学测
                                        </van-grid-item>
                                        <van-grid-item>
                                            同步测
                                        </van-grid-item>
                                        <van-grid-item>
                                            单元测
                                        </van-grid-item>
                                        <van-grid-item>
                                            月考
                                        </van-grid-item>
                                    </van-grid>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            期中
                                        </van-grid-item>
                                        <van-grid-item>
                                            期末
                                        </van-grid-item>
                                        <van-grid-item>
                                            学业
                                        </van-grid-item>
                                        <van-grid-item>
                                            联考
                                        </van-grid-item>
                                    </van-grid>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            调研
                                        </van-grid-item>
                                        <van-grid-item>
                                            竞赛
                                        </van-grid-item>
                                        <van-grid-item>
                                            模拟预测
                                        </van-grid-item>
                                        <van-grid-item>
                                            中考真题
                                        </van-grid-item>
                                    </van-grid>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            专题汇编
                                        </van-grid-item>
                                        <van-grid-item>
                                            自主招生
                                        </van-grid-item>
                                        <van-grid-item>
                                        </van-grid-item>
                                        <van-grid-item>
                                        </van-grid-item>
                                    </van-grid>
                                </div>
                                <div style="border:1px solid #C4C4C4;margin-top:8px;border-radius:3%;">
                                    <span style="display:inline-block;margin-top:8px;margin-left:8px"><strong>专辑</strong></span>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            同步备课
                                        </van-grid-item>
                                        <van-grid-item>
                                            知识点
                                        </van-grid-item>
                                        <van-grid-item>
                                            中考复习
                                        </van-grid-item>
                                        <van-grid-item>
                                            模拟预测
                                        </van-grid-item>
                                    </van-grid>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            中考真题
                                        </van-grid-item>
                                        <van-grid-item>
                                            试题汇编
                                        </van-grid-item>
                                        <van-grid-item>
                                            其他
                                        </van-grid-item>
                                        <van-grid-item>
                                        </van-grid-item>
                                    </van-grid>
                                </div>
                            </div>
                        </van-tab>
                    </van-tabs>
                    <van-tabs v-model="active7" v-if="active === 6" animated swipeable="true">
                        <van-tab v-for="index in 2" :title="'选项 ' + index">
                            <div v-if="index===1">
                                <van-swipe class="my-swipe" :autoplay="3000" style="flex:4" indicator-color="white">
                                    <van-swipe-item><img src="../assets/f2.png" style="width:100%"></van-swipe-item>
                                    <van-swipe-item><img src="../assets/f1.png" style="width:100%"></van-swipe-item>
                                    <van-swipe-item><img src="../assets/f3.png" style="width:100%"></van-swipe-item>
                                </van-swipe>
                                <div style="border:1px solid #C4C4C4;margin-top:8px;border-radius:3%;margin-bottom:8px">
                                    <span style="display:inline-block;margin-top:8px;margin-left:8px"><strong>中考6</strong></span>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            教学指导
                                        </van-grid-item>
                                        <van-grid-item>
                                            备考试题
                                        </van-grid-item>
                                        <van-grid-item>
                                            中考真题
                                        </van-grid-item>
                                        <van-grid-item>
                                        </van-grid-item>
                                    </van-grid>
                                </div>
                                <div style="border:1px solid #C4C4C4;margin-top:8px;border-radius:3%;">
                                    <span style="display:inline-block;margin-top:8px;margin-left:8px"><strong>专辑</strong></span>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            同步备课
                                        </van-grid-item>
                                        <van-grid-item>
                                            知识点
                                        </van-grid-item>
                                        <van-grid-item>
                                            中考复习
                                        </van-grid-item>
                                        <van-grid-item>
                                            模拟预测
                                        </van-grid-item>
                                    </van-grid>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            中考真题
                                        </van-grid-item>
                                        <van-grid-item>
                                            试题汇编
                                        </van-grid-item>
                                        <van-grid-item>
                                            其他
                                        </van-grid-item>
                                        <van-grid-item>
                                        </van-grid-item>
                                    </van-grid>
                                </div>
                                <div style="border:1px solid #C4C4C4;margin-top:8px;border-radius:3%;">
                                    <span style="display:inline-block;margin-top:8px;margin-left:8px"><strong>试题试卷</strong></span>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            开学测
                                        </van-grid-item>
                                        <van-grid-item>
                                            同步测
                                        </van-grid-item>
                                        <van-grid-item>
                                            单元测
                                        </van-grid-item>
                                        <van-grid-item>
                                            月考
                                        </van-grid-item>
                                    </van-grid>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            期中
                                        </van-grid-item>
                                        <van-grid-item>
                                            期末
                                        </van-grid-item>
                                        <van-grid-item>
                                            学业
                                        </van-grid-item>
                                        <van-grid-item>
                                            联考
                                        </van-grid-item>
                                    </van-grid>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            调研
                                        </van-grid-item>
                                        <van-grid-item>
                                            竞赛
                                        </van-grid-item>
                                        <van-grid-item>
                                            模拟预测
                                        </van-grid-item>
                                        <van-grid-item>
                                            中考真题
                                        </van-grid-item>
                                    </van-grid>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            专题汇编
                                        </van-grid-item>
                                        <van-grid-item>
                                            自主招生
                                        </van-grid-item>
                                        <van-grid-item>
                                        </van-grid-item>
                                        <van-grid-item>
                                        </van-grid-item>
                                    </van-grid>
                                </div>
                                <div style="border:1px solid #C4C4C4;margin-top:8px;border-radius:3%;">
                                    <span style="display:inline-block;margin-top:8px;margin-left:8px"><strong>资源类别</strong></span>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            试卷
                                        </van-grid-item>
                                        <van-grid-item>
                                            教案
                                        </van-grid-item>
                                        <van-grid-item>
                                            课件
                                        </van-grid-item>
                                        <van-grid-item>
                                            素材
                                        </van-grid-item>
                                    </van-grid>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            视频
                                        </van-grid-item>
                                        <van-grid-item>
                                            备课包
                                        </van-grid-item>
                                        <van-grid-item>
                                            学案
                                        </van-grid-item>
                                        <van-grid-item>
                                            作业
                                        </van-grid-item>
                                    </van-grid>
                                </div>
                                <div style="border:1px solid #C4C4C4;margin-top:8px;border-radius:3%;margin-bottom:8px">
                                    <span style="display:inline-block;margin-top:8px;margin-left:8px"><strong>中考</strong></span>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            教学指导
                                        </van-grid-item>
                                        <van-grid-item>
                                            备考试题
                                        </van-grid-item>
                                        <van-grid-item>
                                            中考真题
                                        </van-grid-item>
                                        <van-grid-item>
                                        </van-grid-item>
                                    </van-grid>
                                </div>
                            </div>
                            <div v-if="index===2">
                                <van-swipe class="my-swipe" :autoplay="3000" style="flex:4" indicator-color="white">
                                    <van-swipe-item><img src="../assets/f3.png" style="width:100%"></van-swipe-item>
                                    <van-swipe-item><img src="../assets/f1.png" style="width:100%"></van-swipe-item>
                                    <van-swipe-item><img src="../assets/f2.png" style="width:100%"></van-swipe-item>
                                </van-swipe>
                                <div style="border:1px solid #C4C4C4;margin-top:8px;border-radius:3%;">
                                    <span style="display:inline-block;margin-top:8px;margin-left:8px"><strong>资源类别</strong></span>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            试卷
                                        </van-grid-item>
                                        <van-grid-item>
                                            教案
                                        </van-grid-item>
                                        <van-grid-item>
                                            课件
                                        </van-grid-item>
                                        <van-grid-item>
                                            素材
                                        </van-grid-item>
                                    </van-grid>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            视频
                                        </van-grid-item>
                                        <van-grid-item>
                                            备课包
                                        </van-grid-item>
                                        <van-grid-item>
                                            学案
                                        </van-grid-item>
                                        <van-grid-item>
                                            作业
                                        </van-grid-item>
                                    </van-grid>
                                </div>
                                <div style="border:1px solid #C4C4C4;margin-top:8px;border-radius:3%;">
                                    <span style="display:inline-block;margin-top:8px;margin-left:8px"><strong>试题试卷</strong></span>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            开学测
                                        </van-grid-item>
                                        <van-grid-item>
                                            同步测
                                        </van-grid-item>
                                        <van-grid-item>
                                            单元测
                                        </van-grid-item>
                                        <van-grid-item>
                                            月考
                                        </van-grid-item>
                                    </van-grid>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            期中
                                        </van-grid-item>
                                        <van-grid-item>
                                            期末
                                        </van-grid-item>
                                        <van-grid-item>
                                            学业
                                        </van-grid-item>
                                        <van-grid-item>
                                            联考
                                        </van-grid-item>
                                    </van-grid>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            调研
                                        </van-grid-item>
                                        <van-grid-item>
                                            竞赛
                                        </van-grid-item>
                                        <van-grid-item>
                                            模拟预测
                                        </van-grid-item>
                                        <van-grid-item>
                                            中考真题
                                        </van-grid-item>
                                    </van-grid>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            专题汇编
                                        </van-grid-item>
                                        <van-grid-item>
                                            自主招生
                                        </van-grid-item>
                                        <van-grid-item>
                                        </van-grid-item>
                                        <van-grid-item>
                                        </van-grid-item>
                                    </van-grid>
                                </div>
                                <div style="border:1px solid #C4C4C4;margin-top:8px;border-radius:3%;">
                                    <span style="display:inline-block;margin-top:8px;margin-left:8px"><strong>专辑</strong></span>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            同步备课
                                        </van-grid-item>
                                        <van-grid-item>
                                            知识点
                                        </van-grid-item>
                                        <van-grid-item>
                                            中考复习
                                        </van-grid-item>
                                        <van-grid-item>
                                            模拟预测
                                        </van-grid-item>
                                    </van-grid>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            中考真题
                                        </van-grid-item>
                                        <van-grid-item>
                                            试题汇编
                                        </van-grid-item>
                                        <van-grid-item>
                                            其他
                                        </van-grid-item>
                                        <van-grid-item>
                                        </van-grid-item>
                                    </van-grid>
                                </div>
                            </div>
                        </van-tab>
                    </van-tabs>
                    <van-tabs v-model="active8" v-if="active === 7" animated swipeable="true">
                        <van-tab v-for="index in 2" :title="'选项 ' + index">
                            <div v-if="index===1">
                                <van-swipe class="my-swipe" :autoplay="3000" style="flex:4" indicator-color="white">
                                    <van-swipe-item><img src="../assets/f2.png" style="width:100%"></van-swipe-item>
                                    <van-swipe-item><img src="../assets/f1.png" style="width:100%"></van-swipe-item>
                                    <van-swipe-item><img src="../assets/f3.png" style="width:100%"></van-swipe-item>
                                </van-swipe>
                                <div style="border:1px solid #C4C4C4;margin-top:8px;border-radius:3%;margin-bottom:8px">
                                    <span style="display:inline-block;margin-top:8px;margin-left:8px"><strong>中考7</strong></span>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            教学指导
                                        </van-grid-item>
                                        <van-grid-item>
                                            备考试题
                                        </van-grid-item>
                                        <van-grid-item>
                                            中考真题
                                        </van-grid-item>
                                        <van-grid-item>
                                        </van-grid-item>
                                    </van-grid>
                                </div>
                                <div style="border:1px solid #C4C4C4;margin-top:8px;border-radius:3%;">
                                    <span style="display:inline-block;margin-top:8px;margin-left:8px"><strong>专辑</strong></span>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            同步备课
                                        </van-grid-item>
                                        <van-grid-item>
                                            知识点
                                        </van-grid-item>
                                        <van-grid-item>
                                            中考复习
                                        </van-grid-item>
                                        <van-grid-item>
                                            模拟预测
                                        </van-grid-item>
                                    </van-grid>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            中考真题
                                        </van-grid-item>
                                        <van-grid-item>
                                            试题汇编
                                        </van-grid-item>
                                        <van-grid-item>
                                            其他
                                        </van-grid-item>
                                        <van-grid-item>
                                        </van-grid-item>
                                    </van-grid>
                                </div>
                                <div style="border:1px solid #C4C4C4;margin-top:8px;border-radius:3%;">
                                    <span style="display:inline-block;margin-top:8px;margin-left:8px"><strong>试题试卷</strong></span>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            开学测
                                        </van-grid-item>
                                        <van-grid-item>
                                            同步测
                                        </van-grid-item>
                                        <van-grid-item>
                                            单元测
                                        </van-grid-item>
                                        <van-grid-item>
                                            月考
                                        </van-grid-item>
                                    </van-grid>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            期中
                                        </van-grid-item>
                                        <van-grid-item>
                                            期末
                                        </van-grid-item>
                                        <van-grid-item>
                                            学业
                                        </van-grid-item>
                                        <van-grid-item>
                                            联考
                                        </van-grid-item>
                                    </van-grid>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            调研
                                        </van-grid-item>
                                        <van-grid-item>
                                            竞赛
                                        </van-grid-item>
                                        <van-grid-item>
                                            模拟预测
                                        </van-grid-item>
                                        <van-grid-item>
                                            中考真题
                                        </van-grid-item>
                                    </van-grid>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            专题汇编
                                        </van-grid-item>
                                        <van-grid-item>
                                            自主招生
                                        </van-grid-item>
                                        <van-grid-item>
                                        </van-grid-item>
                                        <van-grid-item>
                                        </van-grid-item>
                                    </van-grid>
                                </div>
                                <div style="border:1px solid #C4C4C4;margin-top:8px;border-radius:3%;">
                                    <span style="display:inline-block;margin-top:8px;margin-left:8px"><strong>资源类别</strong></span>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            试卷
                                        </van-grid-item>
                                        <van-grid-item>
                                            教案
                                        </van-grid-item>
                                        <van-grid-item>
                                            课件
                                        </van-grid-item>
                                        <van-grid-item>
                                            素材
                                        </van-grid-item>
                                    </van-grid>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            视频
                                        </van-grid-item>
                                        <van-grid-item>
                                            备课包
                                        </van-grid-item>
                                        <van-grid-item>
                                            学案
                                        </van-grid-item>
                                        <van-grid-item>
                                            作业
                                        </van-grid-item>
                                    </van-grid>
                                </div>
                                <div style="border:1px solid #C4C4C4;margin-top:8px;border-radius:3%;margin-bottom:8px">
                                    <span style="display:inline-block;margin-top:8px;margin-left:8px"><strong>中考</strong></span>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            教学指导
                                        </van-grid-item>
                                        <van-grid-item>
                                            备考试题
                                        </van-grid-item>
                                        <van-grid-item>
                                            中考真题
                                        </van-grid-item>
                                        <van-grid-item>
                                        </van-grid-item>
                                    </van-grid>
                                </div>
                            </div>
                            <div v-if="index===2">
                                <van-swipe class="my-swipe" :autoplay="3000" style="flex:4" indicator-color="white">
                                    <van-swipe-item><img src="../assets/f3.png" style="width:100%"></van-swipe-item>
                                    <van-swipe-item><img src="../assets/f1.png" style="width:100%"></van-swipe-item>
                                    <van-swipe-item><img src="../assets/f2.png" style="width:100%"></van-swipe-item>
                                </van-swipe>
                                <div style="border:1px solid #C4C4C4;margin-top:8px;border-radius:3%;">
                                    <span style="display:inline-block;margin-top:8px;margin-left:8px"><strong>资源类别</strong></span>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            试卷
                                        </van-grid-item>
                                        <van-grid-item>
                                            教案
                                        </van-grid-item>
                                        <van-grid-item>
                                            课件
                                        </van-grid-item>
                                        <van-grid-item>
                                            素材
                                        </van-grid-item>
                                    </van-grid>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            视频
                                        </van-grid-item>
                                        <van-grid-item>
                                            备课包
                                        </van-grid-item>
                                        <van-grid-item>
                                            学案
                                        </van-grid-item>
                                        <van-grid-item>
                                            作业
                                        </van-grid-item>
                                    </van-grid>
                                </div>
                                <div style="border:1px solid #C4C4C4;margin-top:8px;border-radius:3%;">
                                    <span style="display:inline-block;margin-top:8px;margin-left:8px"><strong>试题试卷</strong></span>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            开学测
                                        </van-grid-item>
                                        <van-grid-item>
                                            同步测
                                        </van-grid-item>
                                        <van-grid-item>
                                            单元测
                                        </van-grid-item>
                                        <van-grid-item>
                                            月考
                                        </van-grid-item>
                                    </van-grid>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            期中
                                        </van-grid-item>
                                        <van-grid-item>
                                            期末
                                        </van-grid-item>
                                        <van-grid-item>
                                            学业
                                        </van-grid-item>
                                        <van-grid-item>
                                            联考
                                        </van-grid-item>
                                    </van-grid>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            调研
                                        </van-grid-item>
                                        <van-grid-item>
                                            竞赛
                                        </van-grid-item>
                                        <van-grid-item>
                                            模拟预测
                                        </van-grid-item>
                                        <van-grid-item>
                                            中考真题
                                        </van-grid-item>
                                    </van-grid>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            专题汇编
                                        </van-grid-item>
                                        <van-grid-item>
                                            自主招生
                                        </van-grid-item>
                                        <van-grid-item>
                                        </van-grid-item>
                                        <van-grid-item>
                                        </van-grid-item>
                                    </van-grid>
                                </div>
                                <div style="border:1px solid #C4C4C4;margin-top:8px;border-radius:3%;">
                                    <span style="display:inline-block;margin-top:8px;margin-left:8px"><strong>专辑</strong></span>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            同步备课
                                        </van-grid-item>
                                        <van-grid-item>
                                            知识点
                                        </van-grid-item>
                                        <van-grid-item>
                                            中考复习
                                        </van-grid-item>
                                        <van-grid-item>
                                            模拟预测
                                        </van-grid-item>
                                    </van-grid>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            中考真题
                                        </van-grid-item>
                                        <van-grid-item>
                                            试题汇编
                                        </van-grid-item>
                                        <van-grid-item>
                                            其他
                                        </van-grid-item>
                                        <van-grid-item>
                                        </van-grid-item>
                                    </van-grid>
                                </div>
                            </div>
                        </van-tab>
                    </van-tabs>
                    <van-tabs v-model="active9" v-if="active === 8" animated swipeable="true">
                        <van-tab v-for="index in 2" :title="'选项 ' + index">
                            <div v-if="index===1">
                                <van-swipe class="my-swipe" :autoplay="3000" style="flex:4" indicator-color="white">
                                    <van-swipe-item><img src="../assets/f2.png" style="width:100%"></van-swipe-item>
                                    <van-swipe-item><img src="../assets/f1.png" style="width:100%"></van-swipe-item>
                                    <van-swipe-item><img src="../assets/f3.png" style="width:100%"></van-swipe-item>
                                </van-swipe>
                                <div style="border:1px solid #C4C4C4;margin-top:8px;border-radius:3%;margin-bottom:8px">
                                    <span style="display:inline-block;margin-top:8px;margin-left:8px"><strong>中考8</strong></span>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            教学指导
                                        </van-grid-item>
                                        <van-grid-item>
                                            备考试题
                                        </van-grid-item>
                                        <van-grid-item>
                                            中考真题
                                        </van-grid-item>
                                        <van-grid-item>
                                        </van-grid-item>
                                    </van-grid>
                                </div>
                                <div style="border:1px solid #C4C4C4;margin-top:8px;border-radius:3%;">
                                    <span style="display:inline-block;margin-top:8px;margin-left:8px"><strong>专辑</strong></span>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            同步备课
                                        </van-grid-item>
                                        <van-grid-item>
                                            知识点
                                        </van-grid-item>
                                        <van-grid-item>
                                            中考复习
                                        </van-grid-item>
                                        <van-grid-item>
                                            模拟预测
                                        </van-grid-item>
                                    </van-grid>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            中考真题
                                        </van-grid-item>
                                        <van-grid-item>
                                            试题汇编
                                        </van-grid-item>
                                        <van-grid-item>
                                            其他
                                        </van-grid-item>
                                        <van-grid-item>
                                        </van-grid-item>
                                    </van-grid>
                                </div>
                                <div style="border:1px solid #C4C4C4;margin-top:8px;border-radius:3%;">
                                    <span style="display:inline-block;margin-top:8px;margin-left:8px"><strong>试题试卷</strong></span>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            开学测
                                        </van-grid-item>
                                        <van-grid-item>
                                            同步测
                                        </van-grid-item>
                                        <van-grid-item>
                                            单元测
                                        </van-grid-item>
                                        <van-grid-item>
                                            月考
                                        </van-grid-item>
                                    </van-grid>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            期中
                                        </van-grid-item>
                                        <van-grid-item>
                                            期末
                                        </van-grid-item>
                                        <van-grid-item>
                                            学业
                                        </van-grid-item>
                                        <van-grid-item>
                                            联考
                                        </van-grid-item>
                                    </van-grid>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            调研
                                        </van-grid-item>
                                        <van-grid-item>
                                            竞赛
                                        </van-grid-item>
                                        <van-grid-item>
                                            模拟预测
                                        </van-grid-item>
                                        <van-grid-item>
                                            中考真题
                                        </van-grid-item>
                                    </van-grid>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            专题汇编
                                        </van-grid-item>
                                        <van-grid-item>
                                            自主招生
                                        </van-grid-item>
                                        <van-grid-item>
                                        </van-grid-item>
                                        <van-grid-item>
                                        </van-grid-item>
                                    </van-grid>
                                </div>
                                <div style="border:1px solid #C4C4C4;margin-top:8px;border-radius:3%;">
                                    <span style="display:inline-block;margin-top:8px;margin-left:8px"><strong>资源类别</strong></span>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            试卷
                                        </van-grid-item>
                                        <van-grid-item>
                                            教案
                                        </van-grid-item>
                                        <van-grid-item>
                                            课件
                                        </van-grid-item>
                                        <van-grid-item>
                                            素材
                                        </van-grid-item>
                                    </van-grid>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            视频
                                        </van-grid-item>
                                        <van-grid-item>
                                            备课包
                                        </van-grid-item>
                                        <van-grid-item>
                                            学案
                                        </van-grid-item>
                                        <van-grid-item>
                                            作业
                                        </van-grid-item>
                                    </van-grid>
                                </div>
                                <div style="border:1px solid #C4C4C4;margin-top:8px;border-radius:3%;margin-bottom:8px">
                                    <span style="display:inline-block;margin-top:8px;margin-left:8px"><strong>中考</strong></span>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            教学指导
                                        </van-grid-item>
                                        <van-grid-item>
                                            备考试题
                                        </van-grid-item>
                                        <van-grid-item>
                                            中考真题
                                        </van-grid-item>
                                        <van-grid-item>
                                        </van-grid-item>
                                    </van-grid>
                                </div>
                            </div>
                            <div v-if="index===2">
                                <van-swipe class="my-swipe" :autoplay="3000" style="flex:4" indicator-color="white">
                                    <van-swipe-item><img src="../assets/f3.png" style="width:100%"></van-swipe-item>
                                    <van-swipe-item><img src="../assets/f1.png" style="width:100%"></van-swipe-item>
                                    <van-swipe-item><img src="../assets/f2.png" style="width:100%"></van-swipe-item>
                                </van-swipe>
                                <div style="border:1px solid #C4C4C4;margin-top:8px;border-radius:3%;">
                                    <span style="display:inline-block;margin-top:8px;margin-left:8px"><strong>资源类别</strong></span>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            试卷
                                        </van-grid-item>
                                        <van-grid-item>
                                            教案
                                        </van-grid-item>
                                        <van-grid-item>
                                            课件
                                        </van-grid-item>
                                        <van-grid-item>
                                            素材
                                        </van-grid-item>
                                    </van-grid>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            视频
                                        </van-grid-item>
                                        <van-grid-item>
                                            备课包
                                        </van-grid-item>
                                        <van-grid-item>
                                            学案
                                        </van-grid-item>
                                        <van-grid-item>
                                            作业
                                        </van-grid-item>
                                    </van-grid>
                                </div>
                                <div style="border:1px solid #C4C4C4;margin-top:8px;border-radius:3%;">
                                    <span style="display:inline-block;margin-top:8px;margin-left:8px"><strong>试题试卷</strong></span>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            开学测
                                        </van-grid-item>
                                        <van-grid-item>
                                            同步测
                                        </van-grid-item>
                                        <van-grid-item>
                                            单元测
                                        </van-grid-item>
                                        <van-grid-item>
                                            月考
                                        </van-grid-item>
                                    </van-grid>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            期中
                                        </van-grid-item>
                                        <van-grid-item>
                                            期末
                                        </van-grid-item>
                                        <van-grid-item>
                                            学业
                                        </van-grid-item>
                                        <van-grid-item>
                                            联考
                                        </van-grid-item>
                                    </van-grid>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            调研
                                        </van-grid-item>
                                        <van-grid-item>
                                            竞赛
                                        </van-grid-item>
                                        <van-grid-item>
                                            模拟预测
                                        </van-grid-item>
                                        <van-grid-item>
                                            中考真题
                                        </van-grid-item>
                                    </van-grid>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            专题汇编
                                        </van-grid-item>
                                        <van-grid-item>
                                            自主招生
                                        </van-grid-item>
                                        <van-grid-item>
                                        </van-grid-item>
                                        <van-grid-item>
                                        </van-grid-item>
                                    </van-grid>
                                </div>
                                <div style="border:1px solid #C4C4C4;margin-top:8px;border-radius:3%;">
                                    <span style="display:inline-block;margin-top:8px;margin-left:8px"><strong>专辑</strong></span>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            同步备课
                                        </van-grid-item>
                                        <van-grid-item>
                                            知识点
                                        </van-grid-item>
                                        <van-grid-item>
                                            中考复习
                                        </van-grid-item>
                                        <van-grid-item>
                                            模拟预测
                                        </van-grid-item>
                                    </van-grid>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            中考真题
                                        </van-grid-item>
                                        <van-grid-item>
                                            试题汇编
                                        </van-grid-item>
                                        <van-grid-item>
                                            其他
                                        </van-grid-item>
                                        <van-grid-item>
                                        </van-grid-item>
                                    </van-grid>
                                </div>
                            </div>
                        </van-tab>
                    </van-tabs>
                    <van-tabs v-model="active10" v-if="active === 9" animated swipeable="true">
                        <van-tab v-for="index in 2" :title="'选项 ' + index">
                            <div v-if="index===1">
                                <van-swipe class="my-swipe" :autoplay="3000" style="flex:4" indicator-color="white">
                                    <van-swipe-item><img src="../assets/f2.png" style="width:100%"></van-swipe-item>
                                    <van-swipe-item><img src="../assets/f1.png" style="width:100%"></van-swipe-item>
                                    <van-swipe-item><img src="../assets/f3.png" style="width:100%"></van-swipe-item>
                                </van-swipe>
                                <div style="border:1px solid #C4C4C4;margin-top:8px;border-radius:3%;margin-bottom:8px">
                                    <span style="display:inline-block;margin-top:8px;margin-left:8px"><strong>中考9</strong></span>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            教学指导
                                        </van-grid-item>
                                        <van-grid-item>
                                            备考试题
                                        </van-grid-item>
                                        <van-grid-item>
                                            中考真题
                                        </van-grid-item>
                                        <van-grid-item>
                                        </van-grid-item>
                                    </van-grid>
                                </div>
                                <div style="border:1px solid #C4C4C4;margin-top:8px;border-radius:3%;">
                                    <span style="display:inline-block;margin-top:8px;margin-left:8px"><strong>专辑</strong></span>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            同步备课
                                        </van-grid-item>
                                        <van-grid-item>
                                            知识点
                                        </van-grid-item>
                                        <van-grid-item>
                                            中考复习
                                        </van-grid-item>
                                        <van-grid-item>
                                            模拟预测
                                        </van-grid-item>
                                    </van-grid>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            中考真题
                                        </van-grid-item>
                                        <van-grid-item>
                                            试题汇编
                                        </van-grid-item>
                                        <van-grid-item>
                                            其他
                                        </van-grid-item>
                                        <van-grid-item>
                                        </van-grid-item>
                                    </van-grid>
                                </div>
                                <div style="border:1px solid #C4C4C4;margin-top:8px;border-radius:3%;">
                                    <span style="display:inline-block;margin-top:8px;margin-left:8px"><strong>试题试卷</strong></span>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            开学测
                                        </van-grid-item>
                                        <van-grid-item>
                                            同步测
                                        </van-grid-item>
                                        <van-grid-item>
                                            单元测
                                        </van-grid-item>
                                        <van-grid-item>
                                            月考
                                        </van-grid-item>
                                    </van-grid>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            期中
                                        </van-grid-item>
                                        <van-grid-item>
                                            期末
                                        </van-grid-item>
                                        <van-grid-item>
                                            学业
                                        </van-grid-item>
                                        <van-grid-item>
                                            联考
                                        </van-grid-item>
                                    </van-grid>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            调研
                                        </van-grid-item>
                                        <van-grid-item>
                                            竞赛
                                        </van-grid-item>
                                        <van-grid-item>
                                            模拟预测
                                        </van-grid-item>
                                        <van-grid-item>
                                            中考真题
                                        </van-grid-item>
                                    </van-grid>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            专题汇编
                                        </van-grid-item>
                                        <van-grid-item>
                                            自主招生
                                        </van-grid-item>
                                        <van-grid-item>
                                        </van-grid-item>
                                        <van-grid-item>
                                        </van-grid-item>
                                    </van-grid>
                                </div>
                                <div style="border:1px solid #C4C4C4;margin-top:8px;border-radius:3%;">
                                    <span style="display:inline-block;margin-top:8px;margin-left:8px"><strong>资源类别</strong></span>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            试卷
                                        </van-grid-item>
                                        <van-grid-item>
                                            教案
                                        </van-grid-item>
                                        <van-grid-item>
                                            课件
                                        </van-grid-item>
                                        <van-grid-item>
                                            素材
                                        </van-grid-item>
                                    </van-grid>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            视频
                                        </van-grid-item>
                                        <van-grid-item>
                                            备课包
                                        </van-grid-item>
                                        <van-grid-item>
                                            学案
                                        </van-grid-item>
                                        <van-grid-item>
                                            作业
                                        </van-grid-item>
                                    </van-grid>
                                </div>
                                <div style="border:1px solid #C4C4C4;margin-top:8px;border-radius:3%;margin-bottom:8px">
                                    <span style="display:inline-block;margin-top:8px;margin-left:8px"><strong>中考</strong></span>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            教学指导
                                        </van-grid-item>
                                        <van-grid-item>
                                            备考试题
                                        </van-grid-item>
                                        <van-grid-item>
                                            中考真题
                                        </van-grid-item>
                                        <van-grid-item>
                                        </van-grid-item>
                                    </van-grid>
                                </div>
                            </div>
                            <div v-if="index===2">
                                <van-swipe class="my-swipe" :autoplay="3000" style="flex:4" indicator-color="white">
                                    <van-swipe-item><img src="../assets/f3.png" style="width:100%"></van-swipe-item>
                                    <van-swipe-item><img src="../assets/f1.png" style="width:100%"></van-swipe-item>
                                    <van-swipe-item><img src="../assets/f2.png" style="width:100%"></van-swipe-item>
                                </van-swipe>
                                <div style="border:1px solid #C4C4C4;margin-top:8px;border-radius:3%;">
                                    <span style="display:inline-block;margin-top:8px;margin-left:8px"><strong>资源类别</strong></span>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            试卷
                                        </van-grid-item>
                                        <van-grid-item>
                                            教案
                                        </van-grid-item>
                                        <van-grid-item>
                                            课件
                                        </van-grid-item>
                                        <van-grid-item>
                                            素材
                                        </van-grid-item>
                                    </van-grid>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            视频
                                        </van-grid-item>
                                        <van-grid-item>
                                            备课包
                                        </van-grid-item>
                                        <van-grid-item>
                                            学案
                                        </van-grid-item>
                                        <van-grid-item>
                                            作业
                                        </van-grid-item>
                                    </van-grid>
                                </div>
                                <div style="border:1px solid #C4C4C4;margin-top:8px;border-radius:3%;">
                                    <span style="display:inline-block;margin-top:8px;margin-left:8px"><strong>试题试卷</strong></span>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            开学测
                                        </van-grid-item>
                                        <van-grid-item>
                                            同步测
                                        </van-grid-item>
                                        <van-grid-item>
                                            单元测
                                        </van-grid-item>
                                        <van-grid-item>
                                            月考
                                        </van-grid-item>
                                    </van-grid>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            期中
                                        </van-grid-item>
                                        <van-grid-item>
                                            期末
                                        </van-grid-item>
                                        <van-grid-item>
                                            学业
                                        </van-grid-item>
                                        <van-grid-item>
                                            联考
                                        </van-grid-item>
                                    </van-grid>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            调研
                                        </van-grid-item>
                                        <van-grid-item>
                                            竞赛
                                        </van-grid-item>
                                        <van-grid-item>
                                            模拟预测
                                        </van-grid-item>
                                        <van-grid-item>
                                            中考真题
                                        </van-grid-item>
                                    </van-grid>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            专题汇编
                                        </van-grid-item>
                                        <van-grid-item>
                                            自主招生
                                        </van-grid-item>
                                        <van-grid-item>
                                        </van-grid-item>
                                        <van-grid-item>
                                        </van-grid-item>
                                    </van-grid>
                                </div>
                                <div style="border:1px solid #C4C4C4;margin-top:8px;border-radius:3%;">
                                    <span style="display:inline-block;margin-top:8px;margin-left:8px"><strong>专辑</strong></span>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            同步备课
                                        </van-grid-item>
                                        <van-grid-item>
                                            知识点
                                        </van-grid-item>
                                        <van-grid-item>
                                            中考复习
                                        </van-grid-item>
                                        <van-grid-item>
                                            模拟预测
                                        </van-grid-item>
                                    </van-grid>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            中考真题
                                        </van-grid-item>
                                        <van-grid-item>
                                            试题汇编
                                        </van-grid-item>
                                        <van-grid-item>
                                            其他
                                        </van-grid-item>
                                        <van-grid-item>
                                        </van-grid-item>
                                    </van-grid>
                                </div>
                            </div>
                        </van-tab>
                    </van-tabs>
                    <van-tabs v-model="active11" v-if="active === 10" animated swipeable="true">
                        <van-tab v-for="index in 2" :title="'选项 ' + index">
                            <div v-if="index===1">
                                <van-swipe class="my-swipe" :autoplay="3000" style="flex:4" indicator-color="white">
                                    <van-swipe-item><img src="../assets/f2.png" style="width:100%"></van-swipe-item>
                                    <van-swipe-item><img src="../assets/f1.png" style="width:100%"></van-swipe-item>
                                    <van-swipe-item><img src="../assets/f3.png" style="width:100%"></van-swipe-item>
                                </van-swipe>
                                <div style="border:1px solid #C4C4C4;margin-top:8px;border-radius:3%;margin-bottom:8px">
                                    <span style="display:inline-block;margin-top:8px;margin-left:8px"><strong>中考10</strong></span>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            教学指导
                                        </van-grid-item>
                                        <van-grid-item>
                                            备考试题
                                        </van-grid-item>
                                        <van-grid-item>
                                            中考真题
                                        </van-grid-item>
                                        <van-grid-item>
                                        </van-grid-item>
                                    </van-grid>
                                </div>
                                <div style="border:1px solid #C4C4C4;margin-top:8px;border-radius:3%;">
                                    <span style="display:inline-block;margin-top:8px;margin-left:8px"><strong>专辑</strong></span>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            同步备课
                                        </van-grid-item>
                                        <van-grid-item>
                                            知识点
                                        </van-grid-item>
                                        <van-grid-item>
                                            中考复习
                                        </van-grid-item>
                                        <van-grid-item>
                                            模拟预测
                                        </van-grid-item>
                                    </van-grid>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            中考真题
                                        </van-grid-item>
                                        <van-grid-item>
                                            试题汇编
                                        </van-grid-item>
                                        <van-grid-item>
                                            其他
                                        </van-grid-item>
                                        <van-grid-item>
                                        </van-grid-item>
                                    </van-grid>
                                </div>
                                <div style="border:1px solid #C4C4C4;margin-top:8px;border-radius:3%;">
                                    <span style="display:inline-block;margin-top:8px;margin-left:8px"><strong>试题试卷</strong></span>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            开学测
                                        </van-grid-item>
                                        <van-grid-item>
                                            同步测
                                        </van-grid-item>
                                        <van-grid-item>
                                            单元测
                                        </van-grid-item>
                                        <van-grid-item>
                                            月考
                                        </van-grid-item>
                                    </van-grid>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            期中
                                        </van-grid-item>
                                        <van-grid-item>
                                            期末
                                        </van-grid-item>
                                        <van-grid-item>
                                            学业
                                        </van-grid-item>
                                        <van-grid-item>
                                            联考
                                        </van-grid-item>
                                    </van-grid>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            调研
                                        </van-grid-item>
                                        <van-grid-item>
                                            竞赛
                                        </van-grid-item>
                                        <van-grid-item>
                                            模拟预测
                                        </van-grid-item>
                                        <van-grid-item>
                                            中考真题
                                        </van-grid-item>
                                    </van-grid>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            专题汇编
                                        </van-grid-item>
                                        <van-grid-item>
                                            自主招生
                                        </van-grid-item>
                                        <van-grid-item>
                                        </van-grid-item>
                                        <van-grid-item>
                                        </van-grid-item>
                                    </van-grid>
                                </div>
                                <div style="border:1px solid #C4C4C4;margin-top:8px;border-radius:3%;">
                                    <span style="display:inline-block;margin-top:8px;margin-left:8px"><strong>资源类别</strong></span>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            试卷
                                        </van-grid-item>
                                        <van-grid-item>
                                            教案
                                        </van-grid-item>
                                        <van-grid-item>
                                            课件
                                        </van-grid-item>
                                        <van-grid-item>
                                            素材
                                        </van-grid-item>
                                    </van-grid>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            视频
                                        </van-grid-item>
                                        <van-grid-item>
                                            备课包
                                        </van-grid-item>
                                        <van-grid-item>
                                            学案
                                        </van-grid-item>
                                        <van-grid-item>
                                            作业
                                        </van-grid-item>
                                    </van-grid>
                                </div>
                                <div style="border:1px solid #C4C4C4;margin-top:8px;border-radius:3%;margin-bottom:8px">
                                    <span style="display:inline-block;margin-top:8px;margin-left:8px"><strong>中考</strong></span>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            教学指导
                                        </van-grid-item>
                                        <van-grid-item>
                                            备考试题
                                        </van-grid-item>
                                        <van-grid-item>
                                            中考真题
                                        </van-grid-item>
                                        <van-grid-item>
                                        </van-grid-item>
                                    </van-grid>
                                </div>
                            </div>
                            <div v-if="index===2">
                                <van-swipe class="my-swipe" :autoplay="3000" style="flex:4" indicator-color="white">
                                    <van-swipe-item><img src="../assets/f3.png" style="width:100%"></van-swipe-item>
                                    <van-swipe-item><img src="../assets/f1.png" style="width:100%"></van-swipe-item>
                                    <van-swipe-item><img src="../assets/f2.png" style="width:100%"></van-swipe-item>
                                </van-swipe>
                                <div style="border:1px solid #C4C4C4;margin-top:8px;border-radius:3%;">
                                    <span style="display:inline-block;margin-top:8px;margin-left:8px"><strong>资源类别</strong></span>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            试卷
                                        </van-grid-item>
                                        <van-grid-item>
                                            教案
                                        </van-grid-item>
                                        <van-grid-item>
                                            课件
                                        </van-grid-item>
                                        <van-grid-item>
                                            素材
                                        </van-grid-item>
                                    </van-grid>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            视频
                                        </van-grid-item>
                                        <van-grid-item>
                                            备课包
                                        </van-grid-item>
                                        <van-grid-item>
                                            学案
                                        </van-grid-item>
                                        <van-grid-item>
                                            作业
                                        </van-grid-item>
                                    </van-grid>
                                </div>
                                <div style="border:1px solid #C4C4C4;margin-top:8px;border-radius:3%;">
                                    <span style="display:inline-block;margin-top:8px;margin-left:8px"><strong>试题试卷</strong></span>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            开学测
                                        </van-grid-item>
                                        <van-grid-item>
                                            同步测
                                        </van-grid-item>
                                        <van-grid-item>
                                            单元测
                                        </van-grid-item>
                                        <van-grid-item>
                                            月考
                                        </van-grid-item>
                                    </van-grid>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            期中
                                        </van-grid-item>
                                        <van-grid-item>
                                            期末
                                        </van-grid-item>
                                        <van-grid-item>
                                            学业
                                        </van-grid-item>
                                        <van-grid-item>
                                            联考
                                        </van-grid-item>
                                    </van-grid>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            调研
                                        </van-grid-item>
                                        <van-grid-item>
                                            竞赛
                                        </van-grid-item>
                                        <van-grid-item>
                                            模拟预测
                                        </van-grid-item>
                                        <van-grid-item>
                                            中考真题
                                        </van-grid-item>
                                    </van-grid>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            专题汇编
                                        </van-grid-item>
                                        <van-grid-item>
                                            自主招生
                                        </van-grid-item>
                                        <van-grid-item>
                                        </van-grid-item>
                                        <van-grid-item>
                                        </van-grid-item>
                                    </van-grid>
                                </div>
                                <div style="border:1px solid #C4C4C4;margin-top:8px;border-radius:3%;">
                                    <span style="display:inline-block;margin-top:8px;margin-left:8px"><strong>专辑</strong></span>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            同步备课
                                        </van-grid-item>
                                        <van-grid-item>
                                            知识点
                                        </van-grid-item>
                                        <van-grid-item>
                                            中考复习
                                        </van-grid-item>
                                        <van-grid-item>
                                            模拟预测
                                        </van-grid-item>
                                    </van-grid>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            中考真题
                                        </van-grid-item>
                                        <van-grid-item>
                                            试题汇编
                                        </van-grid-item>
                                        <van-grid-item>
                                            其他
                                        </van-grid-item>
                                        <van-grid-item>
                                        </van-grid-item>
                                    </van-grid>
                                </div>
                            </div>
                        </van-tab>
                    </van-tabs>
                    <van-tabs v-model="active12" v-if="active === 11" animated swipeable="true">
                        <van-tab v-for="index in 2" :title="'选项 ' + index">
                            <div v-if="index===1">
                                <van-swipe class="my-swipe" :autoplay="3000" style="flex:4" indicator-color="white">
                                    <van-swipe-item><img src="../assets/f2.png" style="width:100%"></van-swipe-item>
                                    <van-swipe-item><img src="../assets/f1.png" style="width:100%"></van-swipe-item>
                                    <van-swipe-item><img src="../assets/f3.png" style="width:100%"></van-swipe-item>
                                </van-swipe>
                                <div style="border:1px solid #C4C4C4;margin-top:8px;border-radius:3%;margin-bottom:8px">
                                    <span style="display:inline-block;margin-top:8px;margin-left:8px"><strong>中考11</strong></span>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            教学指导
                                        </van-grid-item>
                                        <van-grid-item>
                                            备考试题
                                        </van-grid-item>
                                        <van-grid-item>
                                            中考真题
                                        </van-grid-item>
                                        <van-grid-item>
                                        </van-grid-item>
                                    </van-grid>
                                </div>
                                <div style="border:1px solid #C4C4C4;margin-top:8px;border-radius:3%;">
                                    <span style="display:inline-block;margin-top:8px;margin-left:8px"><strong>专辑</strong></span>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            同步备课
                                        </van-grid-item>
                                        <van-grid-item>
                                            知识点
                                        </van-grid-item>
                                        <van-grid-item>
                                            中考复习
                                        </van-grid-item>
                                        <van-grid-item>
                                            模拟预测
                                        </van-grid-item>
                                    </van-grid>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            中考真题
                                        </van-grid-item>
                                        <van-grid-item>
                                            试题汇编
                                        </van-grid-item>
                                        <van-grid-item>
                                            其他
                                        </van-grid-item>
                                        <van-grid-item>
                                        </van-grid-item>
                                    </van-grid>
                                </div>
                                <div style="border:1px solid #C4C4C4;margin-top:8px;border-radius:3%;">
                                    <span style="display:inline-block;margin-top:8px;margin-left:8px"><strong>试题试卷</strong></span>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            开学测
                                        </van-grid-item>
                                        <van-grid-item>
                                            同步测
                                        </van-grid-item>
                                        <van-grid-item>
                                            单元测
                                        </van-grid-item>
                                        <van-grid-item>
                                            月考
                                        </van-grid-item>
                                    </van-grid>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            期中
                                        </van-grid-item>
                                        <van-grid-item>
                                            期末
                                        </van-grid-item>
                                        <van-grid-item>
                                            学业
                                        </van-grid-item>
                                        <van-grid-item>
                                            联考
                                        </van-grid-item>
                                    </van-grid>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            调研
                                        </van-grid-item>
                                        <van-grid-item>
                                            竞赛
                                        </van-grid-item>
                                        <van-grid-item>
                                            模拟预测
                                        </van-grid-item>
                                        <van-grid-item>
                                            中考真题
                                        </van-grid-item>
                                    </van-grid>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            专题汇编
                                        </van-grid-item>
                                        <van-grid-item>
                                            自主招生
                                        </van-grid-item>
                                        <van-grid-item>
                                        </van-grid-item>
                                        <van-grid-item>
                                        </van-grid-item>
                                    </van-grid>
                                </div>
                                <div style="border:1px solid #C4C4C4;margin-top:8px;border-radius:3%;">
                                    <span style="display:inline-block;margin-top:8px;margin-left:8px"><strong>资源类别</strong></span>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            试卷
                                        </van-grid-item>
                                        <van-grid-item>
                                            教案
                                        </van-grid-item>
                                        <van-grid-item>
                                            课件
                                        </van-grid-item>
                                        <van-grid-item>
                                            素材
                                        </van-grid-item>
                                    </van-grid>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            视频
                                        </van-grid-item>
                                        <van-grid-item>
                                            备课包
                                        </van-grid-item>
                                        <van-grid-item>
                                            学案
                                        </van-grid-item>
                                        <van-grid-item>
                                            作业
                                        </van-grid-item>
                                    </van-grid>
                                </div>
                                <div style="border:1px solid #C4C4C4;margin-top:8px;border-radius:3%;margin-bottom:8px">
                                    <span style="display:inline-block;margin-top:8px;margin-left:8px"><strong>中考</strong></span>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            教学指导
                                        </van-grid-item>
                                        <van-grid-item>
                                            备考试题
                                        </van-grid-item>
                                        <van-grid-item>
                                            中考真题
                                        </van-grid-item>
                                        <van-grid-item>
                                        </van-grid-item>
                                    </van-grid>
                                </div>
                            </div>
                            <div v-if="index===2">
                                <van-swipe class="my-swipe" :autoplay="3000" style="flex:4" indicator-color="white">
                                    <van-swipe-item><img src="../assets/f3.png" style="width:100%"></van-swipe-item>
                                    <van-swipe-item><img src="../assets/f1.png" style="width:100%"></van-swipe-item>
                                    <van-swipe-item><img src="../assets/f2.png" style="width:100%"></van-swipe-item>
                                </van-swipe>
                                <div style="border:1px solid #C4C4C4;margin-top:8px;border-radius:3%;">
                                    <span style="display:inline-block;margin-top:8px;margin-left:8px"><strong>资源类别</strong></span>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            试卷
                                        </van-grid-item>
                                        <van-grid-item>
                                            教案
                                        </van-grid-item>
                                        <van-grid-item>
                                            课件
                                        </van-grid-item>
                                        <van-grid-item>
                                            素材
                                        </van-grid-item>
                                    </van-grid>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            视频
                                        </van-grid-item>
                                        <van-grid-item>
                                            备课包
                                        </van-grid-item>
                                        <van-grid-item>
                                            学案
                                        </van-grid-item>
                                        <van-grid-item>
                                            作业
                                        </van-grid-item>
                                    </van-grid>
                                </div>
                                <div style="border:1px solid #C4C4C4;margin-top:8px;border-radius:3%;">
                                    <span style="display:inline-block;margin-top:8px;margin-left:8px"><strong>试题试卷</strong></span>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            开学测
                                        </van-grid-item>
                                        <van-grid-item>
                                            同步测
                                        </van-grid-item>
                                        <van-grid-item>
                                            单元测
                                        </van-grid-item>
                                        <van-grid-item>
                                            月考
                                        </van-grid-item>
                                    </van-grid>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            期中
                                        </van-grid-item>
                                        <van-grid-item>
                                            期末
                                        </van-grid-item>
                                        <van-grid-item>
                                            学业
                                        </van-grid-item>
                                        <van-grid-item>
                                            联考
                                        </van-grid-item>
                                    </van-grid>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            调研
                                        </van-grid-item>
                                        <van-grid-item>
                                            竞赛
                                        </van-grid-item>
                                        <van-grid-item>
                                            模拟预测
                                        </van-grid-item>
                                        <van-grid-item>
                                            中考真题
                                        </van-grid-item>
                                    </van-grid>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            专题汇编
                                        </van-grid-item>
                                        <van-grid-item>
                                            自主招生
                                        </van-grid-item>
                                        <van-grid-item>
                                        </van-grid-item>
                                        <van-grid-item>
                                        </van-grid-item>
                                    </van-grid>
                                </div>
                                <div style="border:1px solid #C4C4C4;margin-top:8px;border-radius:3%;">
                                    <span style="display:inline-block;margin-top:8px;margin-left:8px"><strong>专辑</strong></span>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            同步备课
                                        </van-grid-item>
                                        <van-grid-item>
                                            知识点
                                        </van-grid-item>
                                        <van-grid-item>
                                            中考复习
                                        </van-grid-item>
                                        <van-grid-item>
                                            模拟预测
                                        </van-grid-item>
                                    </van-grid>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            中考真题
                                        </van-grid-item>
                                        <van-grid-item>
                                            试题汇编
                                        </van-grid-item>
                                        <van-grid-item>
                                            其他
                                        </van-grid-item>
                                        <van-grid-item>
                                        </van-grid-item>
                                    </van-grid>
                                </div>
                            </div>
                        </van-tab>
                    </van-tabs>
                    <van-tabs v-model="active13" v-if="active === 12" animated swipeable="true">
                        <van-tab v-for="index in 2" :title="'选项 ' + index">
                            <div v-if="index===1">
                                <van-swipe class="my-swipe" :autoplay="3000" style="flex:4" indicator-color="white">
                                    <van-swipe-item><img src="../assets/f2.png" style="width:100%"></van-swipe-item>
                                    <van-swipe-item><img src="../assets/f1.png" style="width:100%"></van-swipe-item>
                                    <van-swipe-item><img src="../assets/f3.png" style="width:100%"></van-swipe-item>
                                </van-swipe>
                                <div style="border:1px solid #C4C4C4;margin-top:8px;border-radius:3%;margin-bottom:8px">
                                    <span style="display:inline-block;margin-top:8px;margin-left:8px"><strong>中考12</strong></span>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            教学指导
                                        </van-grid-item>
                                        <van-grid-item>
                                            备考试题
                                        </van-grid-item>
                                        <van-grid-item>
                                            中考真题
                                        </van-grid-item>
                                        <van-grid-item>
                                        </van-grid-item>
                                    </van-grid>
                                </div>
                                <div style="border:1px solid #C4C4C4;margin-top:8px;border-radius:3%;">
                                    <span style="display:inline-block;margin-top:8px;margin-left:8px"><strong>专辑</strong></span>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            同步备课
                                        </van-grid-item>
                                        <van-grid-item>
                                            知识点
                                        </van-grid-item>
                                        <van-grid-item>
                                            中考复习
                                        </van-grid-item>
                                        <van-grid-item>
                                            模拟预测
                                        </van-grid-item>
                                    </van-grid>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            中考真题
                                        </van-grid-item>
                                        <van-grid-item>
                                            试题汇编
                                        </van-grid-item>
                                        <van-grid-item>
                                            其他
                                        </van-grid-item>
                                        <van-grid-item>
                                        </van-grid-item>
                                    </van-grid>
                                </div>
                                <div style="border:1px solid #C4C4C4;margin-top:8px;border-radius:3%;">
                                    <span style="display:inline-block;margin-top:8px;margin-left:8px"><strong>试题试卷</strong></span>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            开学测
                                        </van-grid-item>
                                        <van-grid-item>
                                            同步测
                                        </van-grid-item>
                                        <van-grid-item>
                                            单元测
                                        </van-grid-item>
                                        <van-grid-item>
                                            月考
                                        </van-grid-item>
                                    </van-grid>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            期中
                                        </van-grid-item>
                                        <van-grid-item>
                                            期末
                                        </van-grid-item>
                                        <van-grid-item>
                                            学业
                                        </van-grid-item>
                                        <van-grid-item>
                                            联考
                                        </van-grid-item>
                                    </van-grid>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            调研
                                        </van-grid-item>
                                        <van-grid-item>
                                            竞赛
                                        </van-grid-item>
                                        <van-grid-item>
                                            模拟预测
                                        </van-grid-item>
                                        <van-grid-item>
                                            中考真题
                                        </van-grid-item>
                                    </van-grid>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            专题汇编
                                        </van-grid-item>
                                        <van-grid-item>
                                            自主招生
                                        </van-grid-item>
                                        <van-grid-item>
                                        </van-grid-item>
                                        <van-grid-item>
                                        </van-grid-item>
                                    </van-grid>
                                </div>
                                <div style="border:1px solid #C4C4C4;margin-top:8px;border-radius:3%;">
                                    <span style="display:inline-block;margin-top:8px;margin-left:8px"><strong>资源类别</strong></span>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            试卷
                                        </van-grid-item>
                                        <van-grid-item>
                                            教案
                                        </van-grid-item>
                                        <van-grid-item>
                                            课件
                                        </van-grid-item>
                                        <van-grid-item>
                                            素材
                                        </van-grid-item>
                                    </van-grid>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            视频
                                        </van-grid-item>
                                        <van-grid-item>
                                            备课包
                                        </van-grid-item>
                                        <van-grid-item>
                                            学案
                                        </van-grid-item>
                                        <van-grid-item>
                                            作业
                                        </van-grid-item>
                                    </van-grid>
                                </div>
                                <div style="border:1px solid #C4C4C4;margin-top:8px;border-radius:3%;margin-bottom:8px">
                                    <span style="display:inline-block;margin-top:8px;margin-left:8px"><strong>中考</strong></span>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            教学指导
                                        </van-grid-item>
                                        <van-grid-item>
                                            备考试题
                                        </van-grid-item>
                                        <van-grid-item>
                                            中考真题
                                        </van-grid-item>
                                        <van-grid-item>
                                        </van-grid-item>
                                    </van-grid>
                                </div>
                            </div>
                            <div v-if="index===2">
                                <van-swipe class="my-swipe" :autoplay="3000" style="flex:4" indicator-color="white">
                                    <van-swipe-item><img src="../assets/f3.png" style="width:100%"></van-swipe-item>
                                    <van-swipe-item><img src="../assets/f1.png" style="width:100%"></van-swipe-item>
                                    <van-swipe-item><img src="../assets/f2.png" style="width:100%"></van-swipe-item>
                                </van-swipe>
                                <div style="border:1px solid #C4C4C4;margin-top:8px;border-radius:3%;">
                                    <span style="display:inline-block;margin-top:8px;margin-left:8px"><strong>资源类别</strong></span>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            试卷
                                        </van-grid-item>
                                        <van-grid-item>
                                            教案
                                        </van-grid-item>
                                        <van-grid-item>
                                            课件
                                        </van-grid-item>
                                        <van-grid-item>
                                            素材
                                        </van-grid-item>
                                    </van-grid>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            视频
                                        </van-grid-item>
                                        <van-grid-item>
                                            备课包
                                        </van-grid-item>
                                        <van-grid-item>
                                            学案
                                        </van-grid-item>
                                        <van-grid-item>
                                            作业
                                        </van-grid-item>
                                    </van-grid>
                                </div>
                                <div style="border:1px solid #C4C4C4;margin-top:8px;border-radius:3%;">
                                    <span style="display:inline-block;margin-top:8px;margin-left:8px"><strong>试题试卷</strong></span>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            开学测
                                        </van-grid-item>
                                        <van-grid-item>
                                            同步测
                                        </van-grid-item>
                                        <van-grid-item>
                                            单元测
                                        </van-grid-item>
                                        <van-grid-item>
                                            月考
                                        </van-grid-item>
                                    </van-grid>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            期中
                                        </van-grid-item>
                                        <van-grid-item>
                                            期末
                                        </van-grid-item>
                                        <van-grid-item>
                                            学业
                                        </van-grid-item>
                                        <van-grid-item>
                                            联考
                                        </van-grid-item>
                                    </van-grid>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            调研
                                        </van-grid-item>
                                        <van-grid-item>
                                            竞赛
                                        </van-grid-item>
                                        <van-grid-item>
                                            模拟预测
                                        </van-grid-item>
                                        <van-grid-item>
                                            中考真题
                                        </van-grid-item>
                                    </van-grid>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            专题汇编
                                        </van-grid-item>
                                        <van-grid-item>
                                            自主招生
                                        </van-grid-item>
                                        <van-grid-item>
                                        </van-grid-item>
                                        <van-grid-item>
                                        </van-grid-item>
                                    </van-grid>
                                </div>
                                <div style="border:1px solid #C4C4C4;margin-top:8px;border-radius:3%;">
                                    <span style="display:inline-block;margin-top:8px;margin-left:8px"><strong>专辑</strong></span>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            同步备课
                                        </van-grid-item>
                                        <van-grid-item>
                                            知识点
                                        </van-grid-item>
                                        <van-grid-item>
                                            中考复习
                                        </van-grid-item>
                                        <van-grid-item>
                                            模拟预测
                                        </van-grid-item>
                                    </van-grid>
                                    <van-grid :border="false" :column-num="4">
                                        <van-grid-item>
                                            中考真题
                                        </van-grid-item>
                                        <van-grid-item>
                                            试题汇编
                                        </van-grid-item>
                                        <van-grid-item>
                                            其他
                                        </van-grid-item>
                                        <van-grid-item>
                                        </van-grid-item>
                                    </van-grid>
                                </div>
                            </div>
                        </van-tab>
                    </van-tabs>
                </template>
            </van-tree-select>
        </div>
        <Dibu></Dibu>
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
        active: 0,
      items: [{ text: '语文' }, { text: '数学' }, { text: '英语' }, { text: '物理' }, { text: '化学' }, { text: '生物' }, { text: '政治' }, { text: '历史' }, { text: '地理' }, { text: '科学' }, { text: '信息' }, { text: '综合' }, { text: '其他' }],
    };
  },
}
</script>
<style scoped>
[class*=van-hairline]::after{
    border:none
}
.van-tree-select__content{
    margin-left: 5px;
    margin-right: 5px;
    flex:4;
}
</style>