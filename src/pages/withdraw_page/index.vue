<!-- 充币 -->
<template>
  <CustomNavBar :title="t('extract')"/>
  <div class='page-wrap'>
      <div class="withdraw-page">
          <div class="withdraw-code-panel">
              <!-- <div class="withdraw-select" @click="onShowPopup">
                  <span class="withdraw-select-label">币种选择：</span>
                  <div class="withdraw-select-value">
                      <span>USDT</span>
                      <img :src="require('@/assets/icon_down_arrow@2x.png')" alt="">
                  </div>
              </div> -->
              <div class="withdraw-select">
                  <span class="withdraw-select-label">{{t('extraction_quantity')}}：</span>
                  <input type="number" v-model="num" :placeholder="t('extraction_quantity_placeholder')" class="withdraw-select-value">
              </div>
              <!-- <div class="withdraw-select">
                  <span class="withdraw-select-label">{{t('withdrawal_limit')}}：</span>
                  <div class="withdraw-select-value border-clean">
                      <span>{{query?.money}}</span>
                  </div>
              </div> -->
              <div class="withdraw-select">
                  <span class="withdraw-select-label">{{t('extract_charges_fee')}}：</span>
                  <div class="withdraw-select-value border-clean">
                      <span>{{money_config?.withdraw_config.withdraw_rate}}% USDT</span>
                  </div>
              </div>
              <!-- <div class="withdraw-select">
                  <span class="withdraw-select-label">提币地址：</span>
                  <div class="withdraw-select-value border-clean">
                      <span>{{query?.receive_address}}</span>
                  </div>
              </div> -->
              <div class="withdraw-btn" @click="onSubmit">{{t('extract')}}</div>
          </div>
           <!-- <div class="warning-text">
              <p class="warning-text-title">注意事项：</p>
              <p>此地址只接受TRC20模式的USDT转入充值，请勿充值任何非USDT资产，否则资产不可找回，区块链得到确认后，平台即自动入账，请务必保证您的波场钱包有充足的USDT资产，以及确认电脑及浏览器安全，防止信息被篡改或泄露。</p>
          </div> -->
      </div>
      <Popup  v-model:show="show" round position="bottom">
         <Picker title="标题"
            :columns="columns"
            @confirm="onConfirm"
            @cancel="onCancel"
            @change="onChange"
            confirm-button-text="确认" cancel-button-text="取消"
            />
      </Popup>
  </div>
</template>

<script lang='ts'>
import { onMounted, ref } from 'vue';
import ClipboardJS from 'clipboard';
import { useRoute } from 'vue-router';
import { useI18n } from "vue-i18n";
import { Toast, Popup, Picker,Dialog } from 'vant';
import { useGlobalHooks } from '@/hooks';
import * as services from '@/services/index';
import * as utils from '@/utils';
import CustomNavBar from '@/components/custom_nav_bar/index.vue';
export default {
    name: '',
    components: {
       CustomNavBar,
       Popup,
       Picker 
    },
    setup() {
        const { t } = useI18n();
        const { money_config } = useGlobalHooks();
        const { query } = useRoute();
        const num = ref<string>('');
        const columns = ['USDT'];
        const money_type = ref<string>(columns[0]) ;
        const show = ref(false);
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
        const onChange = (value: any) => {
           money_type.value = value;
        }
        const onShowPopup = () => show.value = true; 
        const onConfirm = () => show.value = false;
        const onCancel = () => show.value = false;

        const onSubmit = async () => {
            if (num.value) {
                Dialog.confirm({
                    title: '提示',
                    message: `确定提币吗？`,
                })
                .then(async () => {
                    // on confirm
                    utils.loading(t('loading'));
                    await services.usdtWithdraw({
                        receive_address: query.receive_address,
                        money_type: 'money',
                        num: Number(num.value) 
                    });
                    Toast.success(t('extraction_successful'));
                })
                .catch(() => {
                    // on cancel
                });
                
            } else {
                utils.toast(t('extraction_quantity_placeholder'))
            }
        }

        return {columns, show, query, num, money_config, t,  onShowPopup, onConfirm, onCancel, onChange, onSubmit}
    }
  };
</script>
<style lang="less">
 @import url('./style.less');
</style>