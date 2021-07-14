<!-- 公共卡片 -->
<template>
  <div class="card-item">
    <div class="card-item-head">
        <span class="head-stage">第20120123期</span>
        <span class="head-text" v-if="showHead">HQC预计产出量<span class="head-text-active">5000</span>万</span>
    </div>
    <div class="card-item-row">
        <span class="card-item-row-text"><span>开启日期：</span>2021.08.14</span>
        <span class="card-item-row-text"><span>结束日期：</span>2021.08.14</span>
    </div>
    <div class="card-item-row">
        <span class="card-item-row-text"><span>锁定HQMC: </span>100</span>
        <span class="card-item-row-text"><span>本期HQC预估产量: </span>0.2%-0.8%</span>
    </div>
    <div class="card-item-row flex-space-between">
        <span class="card-item-row-text"><span>锁定HQMC: </span>100</span>
        <span class="card-item-row-btn" :class="{'disabeld-btn': disabeld}" @click="onClick">{{btnText}}</span>
    </div>
</div>
</template>

<script lang='ts'>
import { } from 'vue'
export default {
    name: 'card-item',
    props: {
      btnText: {
          type: String,
          default: '开启'
      },
      showHead: {
          type: Boolean,
          default: true
      },
      disabeld: {
          type: Boolean,
          default: false
      },
      onClick: {
          type: Function,
          default: null
      },
      item: {
          type: Object,
          default: ()=> ({})
      }
    },
    setup() {
       return {}
    }
  };
</script>
<style lang="less">
 @import url('./style.less');
</style>