<!-- 平台介绍 -->
<template>
  <CustomNavBar title="平台介绍"/>
  <div class="page-wrap">
      <div class="plateform-intro-page">
        <img :src="require('@/assets/intro_banner@2x.png')" alt="">
        <div class="plateform-intro">专注于传统互联网及区块链技术研发和服务的专业性技术公司，是一支熟悉业务、精于技术、热心服务、甘愿为所从事的事业奉献理想和青春的充满朝气的团队，是经过市场长期检验得到一致好评并 充分认可和信任的合作伙伴。</div>
        <div class="plateform-intro-group">
            <div class="plateform-intro-item">
                <span class="plateform-intro-item-label">服务协议</span>
                <img :src="require('@/assets/icon_right_arrow_light@2x.png')" alt="">
            </div>
            <div class="plateform-intro-item">
                <span class="plateform-intro-item-label">隐私条款</span>
                <img :src="require('@/assets/icon_right_arrow_light@2x.png')" alt="">
            </div>
            <div class="plateform-intro-item">
                <span class="plateform-intro-item-label">版本日记</span>
                <img :src="require('@/assets/icon_right_arrow_light@2x.png')" alt="">
            </div>
            <div class="plateform-intro-item">
                <span class="plateform-intro-item-label">当前版本</span>
                <img :src="require('@/assets/icon_right_arrow_light@2x.png')" alt="">
            </div>
        </div>
      </div>
  </div>
</template>

<script lang='ts'>
import { } from 'vue';
import CustomNavBar from '@/components/custom_nav_bar/index.vue';
export default {
    name: '',
    components: {
        CustomNavBar
    },
    setup() {
       return {}
    }
  };
</script>
<style lang="less">
 @import url('./style.less');
</style>