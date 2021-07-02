<!-- 我的团队 -->
<template>
  <CustomNavBar title="我的团队"/>
  <div class="page-wrap team-page">
      <div class="team-link-group">
          <span>我的地址：https://www.hqmc.com/dasd/wadawda/131233333333</span>
          <img :src="require('@/assets/icon_copy@2x.png')" alt="" class="team-link-copy-img" data-clipboard-target="#copy">
      </div>
      <BlockTitle :icon="require('@/assets/icon_team@2x.png')" title="我的团队" value="查看更多" :onClickRight="onCheckMore"/>
      <div class="team-card">
        <div class="team-income-type">
            <div class="team-income-type-item">
                <img :src="require('@/assets/team_income_icon_1@2x.png')" alt="">
                <span class="team-income-type-item-label">收益</span>
                <span class="team-income-type-item-value">888</span>
            </div>
            <div class="line"></div>
            <div class="team-income-type-item">
                <img :src="require('@/assets/team_income_icon_2@2x.png')" alt="">
                <span class="team-income-type-item-label">团队总量</span>
                <span class="team-income-type-item-value">888</span>
            </div>
            <div class="line"></div>
            <div class="team-income-type-item">
                <img :src="require('@/assets/team_income_icon_3@2x.png')" alt="">
                <span class="team-income-type-item-label">团队人数</span>
                <span class="team-income-type-item-value">8</span>
            </div>
        </div>
        <div class="team-link-group">
          <span>我的地址：https://www.hqmc.com/dasd/wadawda/131233333333</span>
          <span class="team-link-copy" data-clipboard-target="#copy">复制</span>
        </div>
      </div>
      <div class="team-card">
        <div class="team-income-type">
            <div class="team-income-type-item">
                <img :src="require('@/assets/team_income_icon_1@2x.png')" alt="">
                <span class="team-income-type-item-label">收益</span>
                <span class="team-income-type-item-value">888</span>
            </div>
            <div class="line"></div>
            <div class="team-income-type-item">
                <img :src="require('@/assets/team_income_icon_2@2x.png')" alt="">
                <span class="team-income-type-item-label">团队总量</span>
                <span class="team-income-type-item-value">888</span>
            </div>
            <div class="line"></div>
            <div class="team-income-type-item">
                <img :src="require('@/assets/team_income_icon_3@2x.png')" alt="">
                <span class="team-income-type-item-label">团队人数</span>
                <span class="team-income-type-item-value">8</span>
            </div>
        </div>
        <div class="team-link-group">
          <span>我的地址：<span id="copy">https://www.hqmc.com/dasd/wadawda/131233333333</span></span>
          <span class="team-link-copy" data-clipboard-target="#copy">复制</span>
        </div>
      </div>
  </div>
</template>

<script lang='ts'>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import ClipboardJS from 'clipboard';
import { Toast } from 'vant';
import CustomNavBar from '@/components/custom_nav_bar/index.vue';
import BlockTitle from '@/components/block_title/index.vue';
import * as routesPaths from '@/constants/app_routes_path';

export default {
    name: '',
    components:{
        CustomNavBar,
        BlockTitle
    },
    setup() {
        const router = useRouter();
        onMounted(() => {
            let ClipboardJSObj=new ClipboardJS('.team-link-copy,.team-link-copy-img')
            ClipboardJSObj.on('success', function(e) {
                Toast.success('复制成功！');
                e.clearSelection();
            });
            ClipboardJSObj.on('error', function(e) {
                e.clearSelection();
            })
        })
        return {
            onCheckMore: () => {
                console.log('dasda');
               
                router.push(routesPaths.team_income_record_page);
            }
        }
    }
  };
</script>
<style lang="less">
 @import url('./style.less');
</style>