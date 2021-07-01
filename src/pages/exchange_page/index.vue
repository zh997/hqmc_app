<!-- 兑换 -->
<template>
  <CustomNavBar title="兑换"/>
  <div class='page-wrap'>
      <div class="exchange-page">
         <div class="exchange-form-panel">
              <div class="withdraw-select">
                  <span class="withdraw-select-label">消毁HQMC数量：</span>
                  <input type="number" class="withdraw-select-value" placeholder="请输入兑换数量">
              </div>
              <div class="blance-text">HQMC余额：888</div>
               <div class="withdraw-select">
                  <span class="withdraw-select-label">获得USDT数量：</span>
                  <input type="number" class="withdraw-select-value" placeholder="888.88">
              </div>
              <div class="blance-text"></div>
               <div class="withdraw-select">
                  <span class="withdraw-select-label">消耗HQC数量：</span>
                  <input type="number" class="withdraw-select-value" placeholder="888.88">
              </div>
               <div class="blance-text">HQMC余额：888</div>
              <div class="withdraw-btn">兑换</div>
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
        })
        const onShowPopup = () => show.value = true; 
        const onConfirm = () => show.value = false;
        const onCancel = () => show.value = false;

        return {columns, show, onShowPopup, onConfirm, onCancel}
    }
  };
</script>
<style lang="less">
 @import url('./style.less');
</style>