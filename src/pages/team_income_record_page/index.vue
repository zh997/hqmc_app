<!-- 团队收益记录 -->
<template>
  <CustomNavBar :title="`${query.name} ${t('record')}`"/>
  <div class="page-wrap">
      <div class="team-income-record-page">
          <table class="table-wrap">
              <tr class="table-header">
                  <td class="table-header-cell">{{t('currency')}}</td>
                  <td class="table-header-cell">{{t('amount')}}</td>
                  <td class="table-header-cell">{{t('type')}}</td>
                  <td class="table-header-cell">{{t('time')}}</td>
              </tr>
              <tr class="table-row" v-for="item in list" :key="item.id">
                  <td class="table-row-cell">{{item.money_name}}</td>
                  <td class="table-row-cell">{{item.total}}</td>
                  <td class="table-row-cell">
                      {{item.type === 1 ? t('pool_income') : ''}}
                      {{item.type === 2 ? t('share_income') : ''}}
                      {{item.type === 3 ? t('team_benefits') : ''}}
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
import { useI18n } from "vue-i18n";
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
        const { t } = useI18n();
        const { query } = useRoute();
        const list = ref<IIncomeListResDTO[]>();
        const onGetIncomeList = async () => {
            utils.loading(t('loading'));
            let type = null;
            if (query.type !== '0')  type =  Number(query.type);
            const res = await services.income_list({type: type});
            list.value = res.data;
            utils.loadingClean()
        }
        onMounted(() =>{
            onGetIncomeList();
        })
       return {list, query, t}
    }
  };
</script>
<style lang="less">
 @import url('./style.less');
</style>