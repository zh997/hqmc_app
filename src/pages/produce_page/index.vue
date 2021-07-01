<!-- 产币记录 -->
<template>
    <CustomNavBar title="产币记录"/>
    <div class="page-wrap">
        <div class="produce-page">
            <CardItem btnText="已加入" :disabeld="true" :showHead="false"/>
            <CardItem btnText="已加入" :disabeld="true" :showHead="false"/>
            <CardItem btnText="已加入" :disabeld="true" :showHead="false"/>
        </div>
    </div>
</template>

<script lang='ts'>
import { } from 'vue';
import CustomNavBar from '@/components/custom_nav_bar/index.vue';
import CardItem from '@/components/card_item/index.vue';

export default {
    name: 'produce-page',
    components:{
        CustomNavBar,
        CardItem
    },
    setup() {
       return {}
    }
  };
</script>
<style lang="less">
 @import url('./style.less');
</style>