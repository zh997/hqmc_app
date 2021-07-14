<!-- 团队收益 -->
<template>
   <CustomNavBar title="团队收益"/>
   <div class="page-wrap">
     <div class="team-income-page">
        <BlockTitle :icon="require('@/assets/icon_income@2x.png')" title="总收益：888" value="查看更多" :onClickRight="onCheckMore"/>
        <div class="income-group-wrap">
          <div class="asstes-group">
            <div class="asstes-group-item">
              <span>USDT钱包</span>
              <span class="asstes-value">￥{{teamBenefits?.store_info?.money}}</span>
            </div>
            <div class="asstes-group-item">
              <span>HQC钱包</span>
              <span class="asstes-value">￥{{teamBenefits?.store_info?.hqc_money}}</span>
            </div>
            
            <div class="asstes-group-item">
              <span>HQMC钱包</span>
              <span class="asstes-value">￥{{teamBenefits?.store_info?.hqmc_money}}</span>
            </div>
          </div>
          <div class="team-income-type">
            <div class="team-income-type-item">
              <img :src="require('@/assets/team_income_icon_1@2x.png')" alt="">
              <span class="team-income-type-item-label">矿池收益</span>
              <span class="team-income-type-item-value">{{teamBenefits?.profit_info?.mining_profit}}</span>
            </div>
            <div class="line"></div>
            <div class="team-income-type-item">
              <img :src="require('@/assets/team_income_icon_2@2x.png')" alt="">
              <span class="team-income-type-item-label">分享收益</span>
              <span class="team-income-type-item-value">{{teamBenefits?.profit_info?.share_profit}}</span>
            </div>
            <div class="line"></div>
            <div class="team-income-type-item">
              <img :src="require('@/assets/team_income_icon_3@2x.png')" alt="">
              <span class="team-income-type-item-label">团队收益</span>
              <span class="team-income-type-item-value">{{teamBenefits?.profit_info?.team_profit}}</span>
            </div>
          </div>
        </div>
     </div>
     
   </div>
   
</template>

<script lang='ts'>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import CustomNavBar from '@/components/custom_nav_bar/index.vue';
import BlockTitle from '@/components/block_title/index.vue';
import * as routesPaths from '@/constants/app_routes_path';
import * as services from '@/services/index';
import { ITeamBenefitsResDTO } from '@/services/interface/response.d';
import * as utils from '@/utils';

export default {
    name: 'team_income_page',
    components: {
      CustomNavBar,
      BlockTitle
    },
    setup() {
      const router = useRouter();
        const teamBenefits = ref<ITeamBenefitsResDTO>();
        onMounted(async () => {
           try {
               utils.loading('加载中');
               const response = await services.teamBenefits();
               teamBenefits.value = response.data;
               utils.loadingClean()
           } catch(err) {
               utils.toast(err || err.msg);
           }
        })
       return {
         teamBenefits,
         onCheckMore: () => {
           console.log('dasda');
           router.push(routesPaths.team_income_record_page);
         }
       }
    }
  };
</script>
<style lang="less">
 @import url('./style.less');
</style>