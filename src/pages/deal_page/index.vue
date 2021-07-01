<!-- 交易 -->
<template>
    <NavBar title="交易" fixed/>
    <div class="page-wrap tabbar-page">
        <Header :isShowHeader="false"/>
        <div class="switch-bar-head">
            <div class="switch-bar">
                <span :class="{'switch-bar-selected': current === 1}" @click="onSwitch(1)">购买</span>
                <span :class="{'switch-bar-selected': current === 2}" @click="onSwitch(2)">出售</span>
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
                   <span class="dealcard-item-row-btn" @click="onBuy">{{ current === 1 ? '买入' : '卖出'}}</span>
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
                   <span class="dealcard-item-row-btn" @click="onBuy">{{ current === 1 ? '买入' : '卖出'}}</span>
               </div>
           </div>
        </div>
    </div>
</template>

<script lang='ts'>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { NavBar } from 'vant';
import Header from '@/components/header/index.vue';
import * as routerPaths from '@/constant/app_routes_path';
export default {
    name: '',
    components: {
        Header,
        NavBar
    },
    setup() {
        const router = useRouter();
        const current = ref(1);
        const onSwitch = (value: number) => current.value = value;
        const onBuy = () => {
           router.push(routerPaths.exchange_page);
        }
        return {current, onSwitch, onBuy}
    }
  };
</script>
<style lang="less">
 @import url('./style.less');
</style>