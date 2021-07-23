<!-- 兑换 -->
<template>
  <CustomNavBar title="兑换"/>
  <div class='page-wrap'>
      <div class="exchange-page">
         <div class="exchange-form-panel">
              <div class="withdraw-select">
                  <span class="withdraw-select-label">兑换HQMC数量：</span>
                  <input type="number" v-model="num" class="withdraw-select-value" placeholder="请输入兑换数量">
              </div>
              <div class="blance-text">HQMC余额：{{query?.money}}</div>
               <div class="withdraw-select">
                  <span class="withdraw-select-label">消耗USDT数量：</span>
                  <span class="withdraw-select-text">{{dec_usdt || '0'}}</span>
                  <!-- <input type="number" class="withdraw-select-value" placeholder="888.88"> -->
              </div>
              <div class="blance-text"></div>
               <div class="withdraw-select">
                  <span class="withdraw-select-label">消耗HQC数量：</span>
                  <span class="withdraw-select-text">{{dec_hqc || '0'}}</span>
                  <!-- <input type="number" class="withdraw-select-value" placeholder="888.88"> -->
              </div>
               <!-- <div class="blance-text">HQMC余额：888</div> -->
              <div class="withdraw-btn" @click="onSubmit">兑换</div>
         </div>
      </div>
  </div>
</template>

<script lang='ts'>
import { ref, onMounted, computed } from 'vue';
import { Toast  } from 'vant';
import { useRoute } from 'vue-router';
import Decimal from 'decimal.js';
import * as utils from '@/utils';
import * as services from '@/services/index';
import CustomNavBar from '@/components/custom_nav_bar/index.vue';
import { IMoneyConfigResDTO, IHomeAssetResDTO } from '@/services/interface/response';

export default {
    name: '',
    components: {
       CustomNavBar,
    },
    setup() {
        const { query } = useRoute();
        const num = ref<string>('');
        const moneyConfig = ref<IMoneyConfigResDTO>();
        const indexAsset = ref<IHomeAssetResDTO>();
        const onSubmit = async () => {
            if (num.value) {
                utils.loading('加载中');
                await services.hqmcChange({
                    num: parseInt(num.value, 10) 
                });
                Toast.success('兑换成功');
            } else {
                utils.toast('请输入兑换数量');
            }
        }

        const dec_usdt = computed({
            get: () => {
                const change_dec_usdt = moneyConfig.value?.change_config.change_dec_usdt;
                const hqmc_usdt_price =  moneyConfig.value?.price_config.hqmc_usdt_price;
                const z = new Decimal(Number(change_dec_usdt));
                const rate = z.dividedBy(100).mul(Number(num.value)).dividedBy(Number(hqmc_usdt_price));
                return Number(rate);
            },
            set: () => {

            }
        })

        const dec_hqc = computed({
            get: () => {
                const change_dec_hqc = moneyConfig.value?.change_config.change_dec_hqc;
                 const hqc_hqmc_price =  moneyConfig.value?.price_config.hqc_hqmc_price;
                const z = new Decimal(Number(change_dec_hqc));
                const rate = z.dividedBy(100).mul(Number(num.value)).dividedBy(Number(hqc_hqmc_price));
                return Number(rate);
            },
            set: () => {

            }
        })

        onMounted(async () => {
            utils.loading('加载中');
            const [moneyConfigRes, indexAssetRes] = await Promise.all([services.money_config(), services.homeWalletAsset()]) ;
            moneyConfig.value = moneyConfigRes.data;
            indexAsset.value = indexAssetRes.data;
            utils.loadingClean();
        })

        return { query, num, moneyConfig, onSubmit, dec_usdt, dec_hqc}
    }
  };
</script>
<style lang="less">
 @import url('./style.less');
</style>