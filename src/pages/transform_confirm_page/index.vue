<!-- 确认转让 -->
<template>
  <CustomNavBar title="确认转让"/>
  <div class='page-wrap'>
      <div class="transform_confirm-page">
          <div class="withdraw-code-panel">
              <div class="withdraw-select">
                  <span class="withdraw-select-label">我的地址：</span>
                  <div class="withdraw-select-value border-clean">
                      <span>http://www.baidu.com</span>
                  </div>
              </div>
              <div class="blance-text"></div>
              <div class="withdraw-select">
                  <span class="withdraw-select-label">转让地址：</span>
                  <div class="withdraw-select-value border-clean">
                      <span>https://www.baidu.com</span>
                  </div>
              </div>
              <div class="blance-text"></div>
              <div class="withdraw-select">
                  <span class="withdraw-select-label">转让HQMC数量：</span>
                  <input type="number" class="withdraw-select-value" placeholder="最高转让金额">
              </div>
               <div class="blance-text">HQMC余额：888</div>
              <div class="withdraw-select">
                  <span class="withdraw-select-label">消耗HQC数量：</span>
                  <div class="withdraw-select-value border-clean">
                      <span>888.88</span>
                  </div>
              </div>
              <div class="withdraw-btn">确认转让</div>
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