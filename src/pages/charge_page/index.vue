<!-- 充币 -->
<template>
  <CustomNavBar title="充币"/>
  <div class='page-wrap'>
      <div class="charge-page">
          <div class="charge-code-panel">
              <div class="charge-select" @click="onShowPopup">
                  <span class="charge-select-label">币种选择</span>
                  <div class="charge-select-value">
                      <span>USDT</span>
                      <img :src="require('@/assets/icon_down_arrow@2x.png')" alt="">
                  </div>
              </div>
              <div id="qrcode" class="share-code"></div>
              <!-- <img :src="require('@/assets/share_code_black@2x.png')" class="share-code" alt=""> -->
              <div class="team-link-group">
                <span>充币地址：<span id="copy">{{query?.receive_address}}</span></span>
                <img :src="require('@/assets/icon_copy@2x.png')" alt="" class="team-link-copy-img" data-clipboard-target="#copy">
            </div>
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
import { qrcanvas } from 'qrcanvas';
import { Toast, Popup, Picker  } from 'vant';
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
        const columns = ['杭州', '宁波', '温州', '绍兴', '湖州', '嘉兴', '金华'];
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

            onRenderQrcode(query.receive_address);
        })
        const onShowPopup = () => show.value = true; 
        const onConfirm = () => show.value = false;
        const onCancel = () => show.value = false;

        const onRenderQrcode = (url: any) => {
            var canvas = qrcanvas({
                data: url,
                size: 4234,
            })

            document.getElementById('qrcode')?.appendChild(canvas);
        }

        return {columns, show, query, onShowPopup, onConfirm, onCancel}
    }
  };
</script>
<style lang="less">
 @import url('./style.less');
</style>