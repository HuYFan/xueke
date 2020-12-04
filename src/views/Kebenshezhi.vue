<template>
    <div id="keben">
        <van-sticky>
        <div class="div1">
            <van-nav-bar title="课本设置" left-arrow @click-left="onClickLeft"/>
        </div>
         </van-sticky>
        <div class="div2">
            <van-tabs v-model="active">
                <van-tab title="初中">
                    <van-tabs>
                        <van-tab title="语文">
                            <van-collapse v-model="activeName1" accordion>
                                <van-collapse-item title="部编版（2016）" name="1">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="部编版（2018）" name="2">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="语文版（2016）" name="3">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="苏教版（2016）" name="4">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="京改版（2018）" name="5">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="北师大版（2016）" name="6">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="河大版（2016）" name="7">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="长春版（2018）" name="8">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="鄂教版（2016）" name="9">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="沪教版（2016）" name="10">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="鲁教版（2018）" name="11">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                            </van-collapse>
                        </van-tab>
                        <van-tab title="数学">
                            <van-collapse v-model="activeName2" accordion>
                                <van-collapse-item title="部编版（2016）" name="1">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="部编版（2018）" name="2">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="语文版（2016）" name="3">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="苏教版（2016）" name="4">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="京改版（2018）" name="5">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="北师大版（2016）" name="6">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="河大版（2016）" name="7">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="长春版（2018）" name="8">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="鄂教版（2016）" name="9">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="沪教版（2016）" name="10">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="鲁教版（2018）" name="11">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                            </van-collapse>
                        </van-tab>
                        <van-tab title="英语">
                            <van-collapse v-model="activeName3" accordion>
                                <van-collapse-item title="部编版（2016）" name="1">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="部编版（2018）" name="2">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="语文版（2016）" name="3">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="苏教版（2016）" name="4">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="京改版（2018）" name="5">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="北师大版（2016）" name="6">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="河大版（2016）" name="7">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="长春版（2018）" name="8">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="鄂教版（2016）" name="9">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="沪教版（2016）" name="10">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="鲁教版（2018）" name="11">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                            </van-collapse>
                        </van-tab>
                        <van-tab title="物理">
                            <van-collapse v-model="activeName4" accordion>
                                <van-collapse-item title="部编版（2016）" name="1">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="部编版（2018）" name="2">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="语文版（2016）" name="3">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="苏教版（2016）" name="4">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="京改版（2018）" name="5">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="北师大版（2016）" name="6">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="河大版（2016）" name="7">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="长春版（2018）" name="8">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="鄂教版（2016）" name="9">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="沪教版（2016）" name="10">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="鲁教版（2018）" name="11">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                            </van-collapse>
                        </van-tab>
                        <van-tab title="化学">
                            <van-collapse v-model="activeName5" accordion>
                                <van-collapse-item title="部编版（2016）" name="1">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="部编版（2018）" name="2">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="语文版（2016）" name="3">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="苏教版（2016）" name="4">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="京改版（2018）" name="5">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="北师大版（2016）" name="6">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="河大版（2016）" name="7">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="长春版（2018）" name="8">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="鄂教版（2016）" name="9">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="沪教版（2016）" name="10">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="鲁教版（2018）" name="11">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                            </van-collapse>
                        </van-tab>
                        <van-tab title="生物">
                            <van-collapse v-model="activeName6" accordion>
                                <van-collapse-item title="部编版（2016）" name="1">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="部编版（2018）" name="2">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="语文版（2016）" name="3">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="苏教版（2016）" name="4">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="京改版（2018）" name="5">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="北师大版（2016）" name="6">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="河大版（2016）" name="7">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="长春版（2018）" name="8">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="鄂教版（2016）" name="9">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="沪教版（2016）" name="10">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="鲁教版（2018）" name="11">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                            </van-collapse>
                        </van-tab>
                        <van-tab title="政治">
                            <van-collapse v-model="activeName7" accordion>
                                <van-collapse-item title="部编版（2016）" name="1">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="部编版（2018）" name="2">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="语文版（2016）" name="3">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="苏教版（2016）" name="4">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="京改版（2018）" name="5">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="北师大版（2016）" name="6">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="河大版（2016）" name="7">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="长春版（2018）" name="8">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="鄂教版（2016）" name="9">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="沪教版（2016）" name="10">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="鲁教版（2018）" name="11">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                            </van-collapse>
                        </van-tab>
                        <van-tab title="历史">
                            <van-collapse v-model="activeName8" accordion>
                                <van-collapse-item title="部编版（2016）" name="1">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="部编版（2018）" name="2">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="语文版（2016）" name="3">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="苏教版（2016）" name="4">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="京改版（2018）" name="5">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="北师大版（2016）" name="6">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="河大版（2016）" name="7">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="长春版（2018）" name="8">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="鄂教版（2016）" name="9">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="沪教版（2016）" name="10">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="鲁教版（2018）" name="11">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                            </van-collapse>
                        </van-tab>
                        <van-tab title="地理">
                            <van-collapse v-model="activeName9" accordion>
                                <van-collapse-item title="部编版（2016）" name="1">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="部编版（2018）" name="2">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="语文版（2016）" name="3">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="苏教版（2016）" name="4">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="京改版（2018）" name="5">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="北师大版（2016）" name="6">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="河大版（2016）" name="7">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="长春版（2018）" name="8">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="鄂教版（2016）" name="9">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="沪教版（2016）" name="10">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="鲁教版（2018）" name="11">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                            </van-collapse>
                        </van-tab>
                        <van-tab title="科学">
                            <van-collapse v-model="activeName10" accordion>
                                <van-collapse-item title="部编版（2016）" name="1">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="部编版（2018）" name="2">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="语文版（2016）" name="3">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="苏教版（2016）" name="4">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="京改版（2018）" name="5">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="北师大版（2016）" name="6">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="河大版（2016）" name="7">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="长春版（2018）" name="8">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="鄂教版（2016）" name="9">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="沪教版（2016）" name="10">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="鲁教版（2018）" name="11">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                            </van-collapse>
                        </van-tab>
                        <van-tab title="信息">
                            <van-collapse v-model="activeName11" accordion>
                                <van-collapse-item title="部编版（2016）" name="1">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="部编版（2018）" name="2">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="语文版（2016）" name="3">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="苏教版（2016）" name="4">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="京改版（2018）" name="5">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="北师大版（2016）" name="6">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="河大版（2016）" name="7">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="长春版（2018）" name="8">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="鄂教版（2016）" name="9">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="沪教版（2016）" name="10">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="鲁教版（2018）" name="11">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                            </van-collapse>
                        </van-tab>
                    </van-tabs>
                </van-tab>
                <van-tab title="高中">
                    <van-tabs>
                        <van-tab title="语文">
                            <van-collapse v-model="activeName21" accordion>
                                <van-collapse-item title="部编版（2016）" name="1">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="部编版（2018）" name="2">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="语文版（2016）" name="3">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="苏教版（2016）" name="4">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="京改版（2018）" name="5">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="北师大版（2016）" name="6">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="河大版（2016）" name="7">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="长春版（2018）" name="8">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="鄂教版（2016）" name="9">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="沪教版（2016）" name="10">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="鲁教版（2018）" name="11">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                            </van-collapse>
                        </van-tab>
                        <van-tab title="数学">
                            <van-collapse v-model="activeName22" accordion>
                                <van-collapse-item title="部编版（2016）" name="1">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="部编版（2018）" name="2">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="语文版（2016）" name="3">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="苏教版（2016）" name="4">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="京改版（2018）" name="5">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="北师大版（2016）" name="6">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="河大版（2016）" name="7">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="长春版（2018）" name="8">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="鄂教版（2016）" name="9">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="沪教版（2016）" name="10">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="鲁教版（2018）" name="11">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                            </van-collapse>
                        </van-tab>
                        <van-tab title="英语">
                            <van-collapse v-model="activeName23" accordion>
                                <van-collapse-item title="部编版（2016）" name="1">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="部编版（2018）" name="2">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="语文版（2016）" name="3">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="苏教版（2016）" name="4">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="京改版（2018）" name="5">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="北师大版（2016）" name="6">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="河大版（2016）" name="7">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="长春版（2018）" name="8">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="鄂教版（2016）" name="9">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="沪教版（2016）" name="10">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="鲁教版（2018）" name="11">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                            </van-collapse>
                        </van-tab>
                        <van-tab title="物理">
                            <van-collapse v-model="activeName24" accordion>
                                <van-collapse-item title="部编版（2016）" name="1">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="部编版（2018）" name="2">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="语文版（2016）" name="3">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="苏教版（2016）" name="4">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="京改版（2018）" name="5">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="北师大版（2016）" name="6">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="河大版（2016）" name="7">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="长春版（2018）" name="8">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="鄂教版（2016）" name="9">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="沪教版（2016）" name="10">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="鲁教版（2018）" name="11">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                            </van-collapse>
                        </van-tab>
                        <van-tab title="化学">
                            <van-collapse v-model="activeName25" accordion>
                                <van-collapse-item title="部编版（2016）" name="1">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="部编版（2018）" name="2">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="语文版（2016）" name="3">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="苏教版（2016）" name="4">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="京改版（2018）" name="5">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="北师大版（2016）" name="6">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="河大版（2016）" name="7">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="长春版（2018）" name="8">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="鄂教版（2016）" name="9">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="沪教版（2016）" name="10">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="鲁教版（2018）" name="11">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                            </van-collapse>
                        </van-tab>
                        <van-tab title="生物">
                            <van-collapse v-model="activeName26" accordion>
                                <van-collapse-item title="部编版（2016）" name="1">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="部编版（2018）" name="2">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="语文版（2016）" name="3">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="苏教版（2016）" name="4">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="京改版（2018）" name="5">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="北师大版（2016）" name="6">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="河大版（2016）" name="7">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="长春版（2018）" name="8">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="鄂教版（2016）" name="9">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="沪教版（2016）" name="10">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="鲁教版（2018）" name="11">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                            </van-collapse>
                        </van-tab>
                        <van-tab title="政治">
                            <van-collapse v-model="activeName27" accordion>
                                <van-collapse-item title="部编版（2016）" name="1">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="部编版（2018）" name="2">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="语文版（2016）" name="3">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="苏教版（2016）" name="4">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="京改版（2018）" name="5">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="北师大版（2016）" name="6">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="河大版（2016）" name="7">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="长春版（2018）" name="8">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="鄂教版（2016）" name="9">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="沪教版（2016）" name="10">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="鲁教版（2018）" name="11">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                            </van-collapse>
                        </van-tab>
                        <van-tab title="历史">
                            <van-collapse v-model="activeName28" accordion>
                                <van-collapse-item title="部编版（2016）" name="1">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="部编版（2018）" name="2">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="语文版（2016）" name="3">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="苏教版（2016）" name="4">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="京改版（2018）" name="5">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="北师大版（2016）" name="6">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="河大版（2016）" name="7">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="长春版（2018）" name="8">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="鄂教版（2016）" name="9">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="沪教版（2016）" name="10">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="鲁教版（2018）" name="11">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                            </van-collapse>
                        </van-tab>
                        <van-tab title="地理">
                            <van-collapse v-model="activeName29" accordion>
                                <van-collapse-item title="部编版（2016）" name="1">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="部编版（2018）" name="2">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="语文版（2016）" name="3">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="苏教版（2016）" name="4">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="京改版（2018）" name="5">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="北师大版（2016）" name="6">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="河大版（2016）" name="7">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="长春版（2018）" name="8">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="鄂教版（2016）" name="9">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="沪教版（2016）" name="10">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="鲁教版（2018）" name="11">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                            </van-collapse>
                        </van-tab>
                        <van-tab title="科学">
                            <van-collapse v-model="activeName30" accordion>
                                <van-collapse-item title="部编版（2016）" name="1">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="部编版（2018）" name="2">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="语文版（2016）" name="3">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="苏教版（2016）" name="4">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="京改版（2018）" name="5">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="北师大版（2016）" name="6">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="河大版（2016）" name="7">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="长春版（2018）" name="8">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="鄂教版（2016）" name="9">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="沪教版（2016）" name="10">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="鲁教版（2018）" name="11">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                            </van-collapse>
                        </van-tab>
                        <van-tab title="信息">
                            <van-collapse v-model="activeName31" accordion>
                                <van-collapse-item title="部编版（2016）" name="1">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="部编版（2018）" name="2">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="语文版（2016）" name="3">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="苏教版（2016）" name="4">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="京改版（2018）" name="5">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="北师大版（2016）" name="6">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="河大版（2016）" name="7">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="长春版（2018）" name="8">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="鄂教版（2016）" name="9">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="沪教版（2016）" name="10">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                                <van-collapse-item title="鲁教版（2018）" name="11">七年级上册<br><br>七年级下册<br><br>八年级上册<br><br>八年级下册<br><br>九年级上册<br><br>九年级下册</van-collapse-item>
                            </van-collapse>
                        </van-tab>
                    </van-tabs>
                </van-tab>
            </van-tabs>
        </div>
        <div class="div3">
            <van-button size="large" color="#F8931F" style="position:fixed;bottom:0;">确定</van-button>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            activeName1:'1',
            activeName2:'0',
            activeName3:'0',
            activeName4:'0',
            activeName5:'0',
            activeName6:'0',
            activeName7:'0',
            activeName8:'0',
            activeName9:'0',
            activeName10:'0',
            activeName11:'0',
            activeName21:'1',
            activeName22:'0',
            activeName23:'0',
            activeName24:'0',
            activeName25:'0',
            activeName26:'0',
            activeName27:'0',
            activeName28:'0',
            activeName29:'0',
            activeName30:'0',
            activeName31:'0',
        }
    },
    methods: {
    onClickLeft() {
      this.$router.go(-1)
    }
}
}
</script>