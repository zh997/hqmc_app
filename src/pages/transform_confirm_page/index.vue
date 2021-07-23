<!-- 确认转让 -->
<template>
  <CustomNavBar :title="t('confirmation_of_transfer')"/>
  <div class='page-wrap'>
      <div class="transform_confirm-page">
          <div class="withdraw-code-panel">
              <div class="withdraw-select" v-if="query?.receive_address">
                  <span class="withdraw-select-label">{{t('my_address')}}：</span>
                  <div class="withdraw-select-value border-clean">
                      <span>{{query?.receive_address}}</span>
                  </div>
              </div>
              <div class="blance-text"></div>
              <div class="withdraw-select">
                  <span class="withdraw-select-label">{{t('transfer_address')}}：</span>
                  <input type="text" v-model="address" class="withdraw-select-value" :placeholder="t('transfer_address_placeholder')">
              </div>
              <div class="blance-text"></div>
              <div class="withdraw-select">
                  <span class="withdraw-select-label">{{t('transfer')}} {{query?.type}} {{t('quantity')}}：</span>
                  <input type="number" v-model="num" class="withdraw-select-value" :placeholder="t('transfer_quantity_placeholder')">
              </div>
               <div class="blance-text">{{query?.type}} {{t('balance')}}：{{query?.money}}</div>
              <!-- <div class="withdraw-select">
                  <span class="withdraw-select-label">消耗HQC数量：</span>
                  <div class="withdraw-select-value border-clean">
                      <span>888.88</span>
                  </div>
              </div> -->
              <div class="withdraw-btn" @click="onSubmit">{{t('confirmation_of_transfer')}}</div>
          </div>
      </div>
  </div>
</template>

<script lang='ts'>
import { onMounted, ref } from 'vue';
import ClipboardJS from 'clipboard';
import { Toast  } from 'vant';
import { useI18n } from "vue-i18n";
import { useRoute } from 'vue-router';
import * as utils from '@/utils';
import * as services from '@/services/index';
import CustomNavBar from '@/components/custom_nav_bar/index.vue';
export default {
    name: '',
    components: {
       CustomNavBar,
    },
    setup() {
        const { t } = useI18n();
        const { query } = useRoute();
        const address = ref<string>('');
        const num = ref<string>('');
        onMounted(() => {
            let ClipboardJSObj=new ClipboardJS('.team-link-copy,.team-link-copy-img')
            ClipboardJSObj.on('success', function(e) {
                Toast.success(t('copy_succeeded')); 
                e.clearSelection();
            });
            ClipboardJSObj.on('error', function(e) {
                e.clearSelection();
            })
        })

        const onSubmit = async () => {
            if (!address.value) {
                return utils.toast(t('transfer_address_placeholder'));
            }
            if (!num.value) {
                return utils.toast(t('transfer_quantity_placeholder'));
            }
            if (query.type === 'HQC') {
                utils.loading(t('loading'));
                await services.hqcTransfer({
                    address: address.value,
                    money_type: 'hqc_money',
                    num:  Number(num.value) 
                });
                Toast.success(t('successful_transfer'));
            }
            if (query.type === 'HQMC') {
                utils.loading(t('loading'));
                await services.hqmcTransfer({
                    address: address.value,
                    money_type: 'hqmc_money',
                    num:  Number(num.value) 
                });
                Toast.success(t('successful_transfer'));
            }
        }

        return { query, num, address, t , onSubmit}
    }
  };
</script>
<style lang="less">
 @import url('./style.less');
</style>