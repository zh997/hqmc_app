<!-- 公共标题 -->
<template>
  <div class="block-title">
    <div class="block-title-label">
        <img :src="icon" alt="">
        <span>{{title}}</span>
    </div>
    <span class="block-title-value" @click="onClickRight">{{value}}</span>
  </div>
</template>

<script lang='ts'>
import { } from 'vue';
export default {
    name: 'block_title',
    props: {
        icon: {
            type: String,
            default: require('@/assets/home_icon_9@2x.png')
        },
        title: {
            type: String,
            default: '资产'
        },
        value: {
            type: String,
            default: ''
        },
        onClickRight: {
            type: Function,
            default: null
        }
    },
    setup() {}
  };
</script>
<style lang="less">
 @import url('./style.less');
</style>