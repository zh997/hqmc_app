<!-- 公共头部区域 -->
<template>
    <div class="top-bar" v-if="isShowHeader">
        <div class="both-sides"></div>
        <img :src="require('@/assets/LOGO@2x.png')" class="logo-img" alt="">
        <div class="both-sides local-btn"><span class="local-btn-active">中文</span> / <span>英文</span></div>
    </div>
    
    <swipe v-if="isShowSwiper" class="home-swipe" indicator-color="white">
        <swipe-item v-for="item,index in banners" :key="index">
          <img :src="item.banner" alt="">
        </swipe-item>
    </swipe>
</template>

<script lang='ts'>
import { Swipe, SwipeItem } from 'vant';
export default {
    name: 'Header',
    props: {
        banners: {
          type: Array,
          default: () => [
            {
                banner: require('@/assets/banner_img_1@2x.png')
            },
            {
                banner: require('@/assets/banner_img_1@2x.png')
            },
            {
                banner: require('@/assets/banner_img_1@2x.png')
            },
            {
                banner: require('@/assets/banner_img_1@2x.png')
            }
          ]
        },
        isShowSwiper: {
           type: Boolean,
           default: true,
        },
        isShowHeader: {
           type: Boolean,
           default: true,
        }
    },
    components: {
        Swipe,
        SwipeItem,
    },
    setup() {
        return {}

    }
  };
</script>
<style lang="less">
 @import url('./style.less');
</style>