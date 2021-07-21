<!-- 充币 -->
<template>
  <CustomNavBar title="提币"/>
  <div class='page-wrap'>
      <div class="withdraw-page">
          <div class="withdraw-code-panel">
              <div class="withdraw-select" @click="onShowPopup">
                  <span class="withdraw-select-label">币种选择：</span>
                  <div class="withdraw-select-value">
                      <span>USDT</span>
                      <img :src="require('@/assets/icon_down_arrow@2x.png')" alt="">
                  </div>
              </div>
              <div class="withdraw-select">
                  <span class="withdraw-select-label">提币数量：</span>
                  <input type="number" v-model="num" placeholder="请输入提币数量" class="withdraw-select-value">
              </div>
              <div class="withdraw-select">
                  <span class="withdraw-select-label">提币额度：</span>
                  <div class="withdraw-select-value border-clean">
                      <span>{{query?.money}}</span>
                  </div>
              </div>
              <div class="withdraw-select">
                  <span class="withdraw-select-label">提币地址：</span>
                  <div class="withdraw-select-value border-clean">
                      <span>{{query?.receive_address}}</span>
                  </div>
              </div>
              <div class="withdraw-btn" @click="onSubmit">提币</div>
          </div>
           <div class="warning-text">
              <p class="warning-text-title">注意事项：</p>
              <p>此地址只接受TRC20模式的USDT转入充值，请勿充值任何非USDT资产，否则资产不可找回，区块链得到确认后，平台即自动入账，请务必保证您的波场钱包有充足的USDT资产，以及确认电脑及浏览器安全，防止信息被篡改或泄露。</p>
          </div>
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
import { Toast, Popup, Picker  } from 'vant';
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
        const { query } = useRoute();
        const num = ref<string>('');
        const columns = ['USDT'];
        const money_type = ref<string>(columns[0]) ;
        const show = ref(false);
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
        const onChange = (value: any) => {
           money_type.value = value;
        }
        const onShowPopup = () => show.value = true; 
        const onConfirm = () => show.value = false;
        const onCancel = () => show.value = false;

        const onSubmit = async () => {
            if (num.value) {
                utils.loading('加载中');
                await services.usdtWithdraw({
                    receive_address: query.receive_address,
                    money_type: 'money',
                    num: Number(num.value) 
                });
                Toast.success('提币成功');
            } else {
                utils.toast('请输入提币数量')
            }
        }

        return {columns, show, query, num, onShowPopup, onConfirm, onCancel, onChange, onSubmit}
    }
  };
</script>
<style lang="less">
 @import url('./style.less');
</style>