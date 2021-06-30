<!-- 交易 -->
<template>
    <NavBar title="交易" fixed/>
    <div class="page-wrap tabbar-page">
        <Header :isShowHeader="false"/>
        <div class="switch-bar-head">
            <div class="switch-bar">
                <span>购买</span>
                <span class="switch-bar-selected">出售</span>
            </div>
            <img :src="require('@/assets/icon_record@2x.png')" alt="">
        </div>
        <div class="selector-bar-wrap">
            <div class="selector-bar">
               <span class="selector-bar-item">HQC</span>
            </div>
            <span>降序<img :src="require('@/assets/icon_down_arrow@2x.png')" alt=""></span> 
        </div>
        <div class="dealcard-item-wrap">
           <div class="dealcard-item">
               <div class="dealcard-item-head">
                   <img :src="require('@/assets/logo.png')" alt="">
                   <span class="head-title">昵称/账号</span>
                   <span class="head-subtitle">月销量：0单</span>
               </div>
               <div class="dealcard-item-row">
                   <span class="dealcard-item-row-text">限额：100</span>
                   <span class="dealcard-item-row-value">$ 880</span>
               </div>
               <div class="dealcard-item-row">
                   <span class="dealcard-item-row-text">数量：900 HQC</span>
                   <span class="dealcard-item-row-btn"> 卖出</span>
               </div>
           </div>
        </div>
        <div class="dealcard-item-wrap">
           <div class="dealcard-item">
               <div class="dealcard-item-head">
                   <img :src="require('@/assets/logo.png')" alt="">
                   <span class="head-title">昵称/账号</span>
                   <span class="head-subtitle">月销量：0单</span>
               </div>
               <div class="dealcard-item-row">
                   <span class="dealcard-item-row-text">限额：100</span>
                   <span class="dealcard-item-row-value">$ 880</span>
               </div>
               <div class="dealcard-item-row">
                   <span class="dealcard-item-row-text">数量：900 HQC</span>
                   <span class="dealcard-item-row-btn"> 卖出</span>
               </div>
           </div>
        </div>
    </div>
</template>

<script lang='ts'>
import { } from 'vue';
import { NavBar } from 'vant';
import Header from '@/components/header/index.vue';
export default {
    name: '',
    components: {
        Header,
        NavBar
    },
    setup() {
        return {}
    }
  };
</script>
<style lang="less">
 @import url('./style.less');
</style>