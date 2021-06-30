<!-- 公共头部区域 -->
<template>
    <div class="top-bar" v-if="isShowHeader">
        <div class="both-sides"></div>
        <img :src="require('@/assets/LOGO@2x.png')" class="logo-img" alt="">
        <div class="both-sides local-btn"><span class="local-btn-active">中文</span> / <span>英文</span></div>
    </div>
    <swipe v-if="isShowSwiper" class="home-swipe" indicator-color="white">
        <swipe-item v-for="item,index in swiperData" :key="index">
        <img :src="item.url" alt="">
        </swipe-item>
    </swipe>
</template>

<script lang='ts'>
import { reactive } from 'vue'
import { Swipe, SwipeItem } from 'vant';
export default {
    name: 'Header',
    props: {
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
        return {
            swiperData
        }

    }
  };
</script>
<style lang="less">
 @import url('./style.less');
</style>