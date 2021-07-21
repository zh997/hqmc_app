<!-- 确认转让 -->
<template>
  <CustomNavBar title="确认转让"/>
  <div class='page-wrap'>
      <div class="transform_confirm-page">
          <div class="withdraw-code-panel">
              <div class="withdraw-select" v-if="query?.receive_address">
                  <span class="withdraw-select-label">我的地址：</span>
                  <div class="withdraw-select-value border-clean">
                      <span>{{query?.receive_address}}</span>
                  </div>
              </div>
              <div class="blance-text"></div>
              <div class="withdraw-select">
                  <span class="withdraw-select-label">转让地址：</span>
                  <input type="text" v-model="address" class="withdraw-select-value" placeholder="请输入转让地址">
              </div>
              <div class="blance-text"></div>
              <div class="withdraw-select">
                  <span class="withdraw-select-label">转让{{query?.type}}数量：</span>
                  <input type="number" v-model="num" class="withdraw-select-value" placeholder="请输入转让数量">
              </div>
               <div class="blance-text">{{query?.type}}余额：{{query?.money}}</div>
              <!-- <div class="withdraw-select">
                  <span class="withdraw-select-label">消耗HQC数量：</span>
                  <div class="withdraw-select-value border-clean">
                      <span>888.88</span>
                  </div>
              </div> -->
              <div class="withdraw-btn" @click="onSubmit">确认转让</div>
          </div>
      </div>
  </div>
</template>

<script lang='ts'>
import { onMounted, ref } from 'vue';
import ClipboardJS from 'clipboard';
import { Toast  } from 'vant';
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
        const { query } = useRoute();
        const address = ref<string>('');
        const num = ref<string>('');
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

        const onSubmit = async () => {
            if (query.type === 'HQC') {
                utils.loading('加载中');
                await services.hqcTransfer({
                    address: address.value,
                    money_type: 'hqc_money',
                    num:  Number(num.value) 
                });
                Toast.success('转让成功');
            }
            if (query.type === 'HQMC') {
                utils.loading('加载中');
                await services.hqmcTransfer({
                    address: address.value,
                    money_type: 'hqmc_money',
                    num:  Number(num.value) 
                });
                Toast.success('转让成功');
            }
        }

        return { query, num, address, onSubmit}
    }
  };
</script>
<style lang="less">
 @import url('./style.less');
</style>