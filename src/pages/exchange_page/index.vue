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
               <!-- <div class="withdraw-select">
                  <span class="withdraw-select-label">获得USDT数量：</span>
                  <input type="number" class="withdraw-select-value" placeholder="888.88">
              </div>
              <div class="blance-text"></div>
               <div class="withdraw-select">
                  <span class="withdraw-select-label">消耗HQC数量：</span>
                  <input type="number" class="withdraw-select-value" placeholder="888.88">
              </div>
               <div class="blance-text">HQMC余额：888</div> -->
              <div class="withdraw-btn" @click="onSubmit">兑换</div>
         </div>
      </div>
  </div>
</template>

<script lang='ts'>
import { ref } from 'vue';
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
        const num = ref<string>('');
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

        return { query, num, onSubmit}
    }
  };
</script>
<style lang="less">
 @import url('./style.less');
</style>