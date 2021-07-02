<!-- 充提 -->
<template>
  <CustomNavBar :title="query.name" />
  <div class="page-wrap">
      <div class="full-extraction-page">
          <div class="assets-head">
              <span class="assets-head-label">{{query.name}} 当前余额</span>
              <span class="assets-head-value">888.00</span>
          </div>
          <div class="assets-btn-group">
              <div class="assets-btn-item" v-for="item,index in btnItems" :key="index" @click="onRouter(item.path)">{{item.text}}</div>
          </div>
          <div class="charge-code-panel">
              <img :src="require('@/assets/share_code_black@2x.png')" class="share-code" alt="">
              <div class="team-link-group">
                <span>充币地址：<span id="copy">https://www.hqmc.com/dasd/wadawda/131233333333</span></span>
                <img :src="require('@/assets/icon_copy@2x.png')" alt="" class="team-link-copy-img" data-clipboard-target="#copy">
            </div>
          </div>
      </div>
  </div>
</template>

<script lang='ts'>
import { } from 'vue';
import { useRoute } from 'vue-router';
import { useRouter } from 'vue-router';
import CustomNavBar from '@/components/custom_nav_bar/index.vue';
import * as routerPaths from '@/constants/app_routes_path';
export default {
    name: '',
    components: {
       CustomNavBar
    },
    setup() {
        const { query } = useRoute();
        const router = useRouter();
        const btnItems = [
            {
                text: '充币',
                path: routerPaths.charge_page
            },
            {
                text: '提币',
                path: routerPaths.withdraw_page
            },
        ]
        return {query, btnItems,onRouter: (path: string) => {
                router.push(path);
            }}
    }
  };
</script>
<style lang="less">
 @import url('./style.less');
</style>