<!-- 公共卡片 -->
<template>
  <div class="card-item">
    <div class="card-item-head">
        <span class="head-stage">第{{item.no}}期</span>
        <span class="head-text" v-if="showHead">HQC预计产出量<span class="head-text-active">{{item.output}}</span>万</span>
    </div>
    <div class="card-item-row">
        <span class="card-item-row-text"><span>开启日期：</span>{{item.start_time}}</span>
        <span class="card-item-row-text"><span>结束日期：</span>{{item.end_time}}</span>
    </div>
    <div class="card-item-row">
        <span class="card-item-row-text"><span>锁定HQMC: </span>{{item.price}}</span>
        <span class="card-item-row-text"><span>本期HQC预估产量: </span>{{item.expected_outpu_start}}%-{{item.expected_outpu_end}}%</span>
    </div>
    <div class="card-item-row flex-space-between">
        <span class="card-item-row-text"><span>本期HQMC预估消耗: </span>{{item.expected_consume_start}}%-{{item.expected_consume_end}}%</span>
        <span class="card-item-row-btn" :class="{'disabeld-btn': item.status_tip === 2}" @click="onClick(item)">{{btnText}}</span>
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