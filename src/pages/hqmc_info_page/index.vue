<!-- 资产详情 -->
<template>
  <CustomNavBar title="HQMC" />
  <div class="page-wrap">
      <div class="hqmc_info_page">
          <div class="assets-head">
              <span class="assets-head-label">HQMC 当前余额</span>
              <span class="assets-head-value">888.00</span>
          </div>
          <div class="assets-btn-group">
              <div class="assets-btn-item" v-for="item,index in btnItems" :key="index" @click="onRouter(item.path)">{{item.text}}</div>
          </div>
          <div class="warning-text">
              <p class="warning-text-title">充值注意事项：</p>
              <p>此地址只接受TRC20模式的USDT转入充值，请勿充值任何非USDT资产，否则资产不可找回，区块链得到确认后，平台即自动入账，请务必保证您的波场钱包有充足的USDT资产，以及确认电脑及浏览器安全，防止信息被篡改或泄露。</p>
              <p class="warning-text-title">提币注意事项：</p>
              <p>为保障您的资金安全，请勿填写支持TRC20通道的提币合约地址，以及务必确认电脑及浏览器安全，防止信息被篡改和泄露。</p>
          </div>
      </div>
  </div>
</template>

<script lang='ts'>
import { } from 'vue';
import { useRoute } from 'vue-router';
import { useRouter } from 'vue-router';
import CustomNavBar from '@/components/custom_nav_bar/index.vue';
import * as routerPaths from '@/constant/app_routes_path';
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
                text: '兑换',
                path: routerPaths.exchange_page
            },
            {
                text: '转让',
                path: routerPaths.transform_page
            },
            {
                text: '销毁',
                path: routerPaths.destroy_page
            }
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