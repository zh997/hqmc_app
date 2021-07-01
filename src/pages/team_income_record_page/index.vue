<!-- 团队收益记录 -->
<template>
  <CustomNavBar title="团队收益记录"/>
  <div class="page-wrap">
      <div class="team-income-record-page">
          <table class="table-wrap">
              <tr class="table-header">
                  <td class="table-header-cell">币种</td>
                  <td class="table-header-cell">金额</td>
                  <td class="table-header-cell">类型</td>
                  <td class="table-header-cell">时间</td>
              </tr>
              <tr class="table-row">
                  <td class="table-row-cell">HQMC</td>
                  <td class="table-row-cell">888</td>
                  <td class="table-row-cell">直推奖励</td>
                  <td class="table-row-cell">2021.06.26 23:56:00</td>
              </tr>
              <tr class="table-row">
                  <td class="table-row-cell">HQMC</td>
                  <td class="table-row-cell">888</td>
                  <td class="table-row-cell">直推奖励</td>
                  <td class="table-row-cell">2021.06.26 23:56:00</td>
              </tr>
              <tr class="table-row">
                  <td class="table-row-cell">HQMC</td>
                  <td class="table-row-cell">888</td>
                  <td class="table-row-cell">直推奖励</td>
                  <td class="table-row-cell">2021.06.26 23:56:00</td>
              </tr>
              <tr class="table-row">
                  <td class="table-row-cell">HQMC</td>
                  <td class="table-row-cell">888</td>
                  <td class="table-row-cell">直推奖励</td>
                  <td class="table-row-cell">2021.06.26 23:56:00</td>
              </tr>
          </table>
      </div>
  </div>
</template>

<script lang='ts'>
import { } from 'vue';
import CustomNavBar from '@/components/custom_nav_bar/index.vue';
export default {
    name: '',
    components: {
        CustomNavBar,
    },
    setup() {
       return {}
    }
  };
</script>
<style lang="less">
 @import url('./style.less');
</style>