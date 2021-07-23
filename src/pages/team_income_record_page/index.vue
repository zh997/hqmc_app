<!-- 团队收益记录 -->
<template>
  <CustomNavBar :title="`${query.name}记录`"/>
  <div class="page-wrap">
      <div class="team-income-record-page">
          <table class="table-wrap">
              <tr class="table-header">
                  <td class="table-header-cell">币种</td>
                  <td class="table-header-cell">金额</td>
                  <td class="table-header-cell">类型</td>
                  <td class="table-header-cell">时间</td>
              </tr>
              <tr class="table-row" v-for="item in list" :key="item.id">
                  <td class="table-row-cell">{{item.money_name}}</td>
                  <td class="table-row-cell">{{item.total}}</td>
                  <td class="table-row-cell">
                      {{item.type === 1 && '矿池收益'}}
                      {{item.type === 2 && '分享收益'}}
                      {{item.type === 3 && '团队收益'}}
                  </td>
                  <td class="table-row-cell">{{item.åcreated_at}}</td>
              </tr>
          </table>
      </div>
  </div>
</template>

<script lang='ts'>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import CustomNavBar from '@/components/custom_nav_bar/index.vue';
import * as services from '@/services/index';
import * as utils from '@/utils';
import { IIncomeListResDTO } from '@/services/interface/response.d';

export default {
    name: '',
    components: {
        CustomNavBar,
    },
    setup() {
        const { query } = useRoute();
        const list = ref<IIncomeListResDTO[]>();
        const onGetIncomeList = async () => {
            utils.loading('加载中');
            let type = null;
            if (query.type !== '0')  type =  Number(query.type);
            const res = await services.income_list({type: type});
            list.value = res.data;
            utils.loadingClean()
        }
        onMounted(() =>{
            onGetIncomeList();
        })
       return {list, query}
    }
  };
</script>
<style lang="less">
 @import url('./style.less');
</style>