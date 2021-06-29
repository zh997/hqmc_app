<!-- 首页 -->
<template>
  <div class="top-bar">
    <div class="both-sides"></div>
    <img :src="require('@/assets/LOGO@2x.png')" class="logo-img" alt="">
    <div class="both-sides local-btn"><span class="local-btn-active">中文</span> / <span>英文</span></div>
  </div>
  <div class="banner"></div>
  <Swipe class="home-swipe" indicator-color="white">
    <SwipeItem v-for="item,index in swiperData" :key="index">
      <img :src="item.url" alt="">
    </SwipeItem>
  </Swipe>
  <div class="grid-group">
    <div class="grid-group-item" v-for="item,index in gridItems" :key="index">
      <img :src="item.icon" alt="">
      <span>{{item.text}}</span>
    </div>
  </div>
</template>

<script lang='ts'>
import { reactive } from 'vue'
import { Swipe, SwipeItem } from 'vant';
export default {
    name: 'home_page',
    components: {
      Swipe,
      SwipeItem
    },
    setup() {
      const swiperData = reactive([
        {
          url: require('@/assets/banner_img_1@2x.png')
        },
        {
          url: require('@/assets/banner_img_1@2x.png')
        },
        {
          url: require('@/assets/banner_img_1@2x.png')
        },
        {
          url: require('@/assets/banner_img_1@2x.png')
        }
      ])
      const gridItems = reactive([
        {
          icon: require('@/assets/home_icon_1@2x.png'),
          text: 'USDT'
        },
        {
          icon: require('@/assets/home_icon_2@2x.png'),
          text: 'HQC'
        },
        {
          icon: require('@/assets/LOGO@2x.png'),
          text: 'HQMC'
        },
        {
          icon: require('@/assets/home_icon_4@2x.png'),
          text: '推荐奖励'
        },
        {
          icon: require('@/assets/home_icon_5@2x.png'),
          text: '矿池'
        },
        {
          icon: require('@/assets/home_icon_6@2x.png'),
          text: '交易区'
        },
        {
          icon: require('@/assets/home_icon_7@2x.png'),
          text: '空投'
        },
        {
          icon: require('@/assets/home_icon_8@2x.png'),
          text: '生态'
        },
      ])
      return { swiperData, gridItems }
    }
  };
</script>
<style lang="less">
 @import url('./style.less');
</style>