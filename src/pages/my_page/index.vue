<!-- 个人中心 -->
<template>
  <div class="tabbar-page">
    <div class="my-header">
        <div class="my-avatar">
            <div class="avatar-clip">
                <img :src="require('@/assets/logo.png')" alt="">
            </div>
            <img :src="require('@/assets/member_grade@2x.png')" class="member-grade" alt="">
        </div>
        <span class="my-nickname">输入您的名称</span>
        <span class="my-member-status">会员状态: 有效会员</span>
        <img :src="require('@/assets/icon_edit@2x.png')" class="icon-edit" alt="">
    </div>
    <div class="list-item-wrap">
        <div class="list-item" v-for="item,index in listItemData" :key="index" @click="onRouter(item.path)">
            <div class="list-item-label">
                <img :src="item.icon" alt="">
                <span>{{item.title}}</span>
            </div>
            <img :src="require('@/assets/icon_right_arrow@2x.png')" alt="">
        </div>
    </div>
    
  </div>
</template>

<script lang='ts'>
import { } from 'vue';
import {  } from 'vant';
import { useRouter } from 'vue-router';
import { listItemData } from './hooks/useInit';
import { IInitState } from './type.d';



export default {
    name: 'my_page',
    components:{
    },
    setup(): IInitState {
        const router = useRouter();
        return {
            listItemData: listItemData(),
            onRouter: (path: string) => {
                router.push(path);
            }
        }
    },
  };
</script>
<style lang="less">
 @import url('./style.less');
</style>