<!-- 充提 -->
<template>
  <CustomNavBar :title="query.name" />
  <div class="page-wrap">
      <div class="full-extraction-page">
          <div class="assets-head">
              <span class="assets-head-label">{{query.name}} 当前余额</span>
              <span class="assets-head-value">{{walletUsdt?.money || walletHqc?.hqc_money}}</span>
          </div>
          <div class="assets-btn-group">
              <div class="assets-btn-item" v-for="item,index in btnItems" :key="index" @click="onRouter(item.path)">{{item.text}}</div>
          </div>
          <div class="charge-code-panel">
              <img :src="require('@/assets/share_code_black@2x.png')" class="share-code" alt="">
              <div class="team-link-group">
                <span>充币地址：<span id="copy">{{walletUsdt?.usdt_wallet || walletHqc?.hqc_wallet}}</span></span>
                <img :src="require('@/assets/icon_copy@2x.png')" alt="" class="team-link-copy-img" data-clipboard-target="#copy">
            </div>
          </div>
      </div>
  </div>
</template>

<script lang='ts'>
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import CustomNavBar from '@/components/custom_nav_bar/index.vue';
import * as routerPaths from '@/constants/app_routes_path';
import * as services from '@/services/index';
import * as utils from '@/utils';
import { IHomeWalletUsdtResDTO, IHomeWalletHqcResDTO } from '@/services/interface/response';

export default {
    name: '',
    components: {
       CustomNavBar
    },
    setup() {
        const { query } = useRoute();
        const router = useRouter();
        const walletUsdt = ref<IHomeWalletUsdtResDTO>();
        const walletHqc = ref<IHomeWalletHqcResDTO>();
        let btnItems = ref();
        
        onMounted(async () => {
            utils.loading('加载中');
            if (query.name === 'USDT') {
                const res = await services.homeWalletUsdt();
                walletUsdt.value = res.data;
                utils.loadingClean();
                btnItems.value = [
                    {
                        text: '充币',
                        path: routerPaths.charge_page
                    },
                    {
                        text: '提币',
                        path: routerPaths.withdraw_page
                    },
                ]
            }
            if (query.name === 'HQC') {
                const res = await services.homeWalletHqc();
                walletHqc.value = res.data;
                utils.loadingClean();
                btnItems.value = [
                    {
                        text: '转让',
                        path: routerPaths.transform_confirm_page
                    }
                ]
            }
        })

        return {query, btnItems,walletUsdt, walletHqc, onRouter: (path: string) => {
                if (query.name === 'USDT'){
                    path = path + `?receive_address=${walletUsdt.value?.usdt_wallet}&money=${walletUsdt.value?.money}&type=USDT`
                } else {
                     path = path + `?receive_address=${walletHqc.value?.hqc_wallet}&money=${walletHqc.value?.hqc_money}&type=HQC`
                }
                router.push(path);
            }}
    }
  };
</script>
<style lang="less">
 @import url('./style.less');
</style>