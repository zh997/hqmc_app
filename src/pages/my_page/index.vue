<!-- 个人中心 -->
<template>
  <div class="page-wrap tabbar-page">
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
        <div class="list-item">
            <div class="list-item-label">
                <img :src="require('@/assets/my_icon_1@2x.png')" alt="">
                <span>邀请好友</span>
            </div>
            <img :src="require('@/assets/icon_right_arrow@2x.png')" alt="">
        </div>
        <div class="list-item">
            <div class="list-item-label">
                <img :src="require('@/assets/my_icon_2@2x.png')" alt="">
                <span>团队收益</span>
            </div>
            <img :src="require('@/assets/icon_right_arrow@2x.png')" alt="">
        </div>
        <div class="list-item">
            <div class="list-item-label">
                <img :src="require('@/assets/my_icon_6@2x.png')" alt="">
                <span>产币记录</span>
            </div>
            <img :src="require('@/assets/icon_right_arrow@2x.png')" alt="">
        </div>
        <div class="list-item">
            <div class="list-item-label">
                <img :src="require('@/assets/my_icon_3@2x.png')" alt="">
                <span>账号安全</span>
            </div>
            <img :src="require('@/assets/icon_right_arrow@2x.png')" alt="">
        </div>
        <div class="list-item">
            <div class="list-item-label">
                <img :src="require('@/assets/my_icon_5@2x.png')" alt="">
                <span>语言设置</span>
            </div>
            <img :src="require('@/assets/icon_right_arrow@2x.png')" alt="">
        </div>
        <div class="list-item">
            <div class="list-item-label">
                <img :src="require('@/assets/my_icon_4@2x.png')" alt="">
                <span>平台介绍</span>
            </div>
            <img :src="require('@/assets/icon_right_arrow@2x.png')" alt="">
        </div>
    </div>
    
  </div>
</template>

<script lang='ts'>
import {  } from 'vue';
import {  } from 'vant';
import { useRouter } from 'vue-router';
import { listItemData } from './hooks/init';
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