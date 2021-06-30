<!-- 首页 -->
<template>
  <div class="tabbar-page">
    <Header/>
    <div class="grid-group">
      <div class="grid-group-item" v-for="item,index in gridItems" :key="index">
        <img :src="item.icon" alt="">
        <span>{{item.text}}</span>
      </div>
    </div>
    
    <div class="block-title">
      <img :src="require('@/assets/home_icon_9@2x.png')" alt="">
      <span>资产</span>
    </div>
    <div class="asstes-group">
      <div class="asstes-group-item">
        <span>USDT钱包</span>
        <span class="asstes-value">￥888.88</span>
      </div>
      <div class="asstes-group-item">
        <span>HQC钱包</span>
        <span class="asstes-value">￥888.88</span>
      </div>
      <div class="asstes-group-item">
        <span>HQMC钱包</span>
        <span class="asstes-value">￥888.88</span>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { reactive, ref } from 'vue'
import Header from '@/components/header/index.vue';

export default {
    name: 'home_page',
    components: {
      Header
    },
    setup() {
      const swiperData = reactive([
        {
          url: require('@/assets/banner_img_1@2x.png')
        },
        {
          url: require('@/assets/banner_img_1@2x.png')
        },
        {
          url: require('@/assets/banner_img_1@2x.png')
        },
        {
          url: require('@/assets/banner_img_1@2x.png')
        }
      ])
      const gridItems = reactive([
        {
          icon: require('@/assets/home_icon_1@2x.png'),
          text: 'USDT'
        },
        {
          icon: require('@/assets/home_icon_2@2x.png'),
          text: 'HQC'
        },
        {
          icon: require('@/assets/LOGO@2x.png'),
          text: 'HQMC'
        },
        {
          icon: require('@/assets/home_icon_4@2x.png'),
          text: '推荐奖励'
        },
        {
          icon: require('@/assets/home_icon_5@2x.png'),
          text: '矿池'
        },
        {
          icon: require('@/assets/home_icon_6@2x.png'),
          text: '交易区'
        },
        {
          icon: require('@/assets/home_icon_7@2x.png'),
          text: '空投'
        },
        {
          icon: require('@/assets/home_icon_8@2x.png'),
          text: '生态'
        },
      ])

      const option = ref({
            tooltip: {
                trigger: 'axis'
            },
            // legend: {
            //     data: ['最高气温', '最低气温']
            // },
            // toolbox: {
            //     show: true,
            //     feature: {
            //         dataZoom: {
            //             yAxisIndex: 'none'
            //         },
            //         dataView: {readOnly: false},
            //         magicType: {type: ['line', 'bar']},
            //         restore: {},
            //         saveAsImage: {}
            //     }
            // },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['09:30', '10:30', '11:30', '14:00', '15:00', '16:00', '18:00']
            },
            yAxis: {
                type: 'value',
                axisLabel: {
                    formatter: '{value}'
                }
            },
            series: [
                {
                    name: '最高气温',
                    type: 'line',
                    data: [10, 11, 13, 11, 12, 12, 9],
                    markPoint: {
                        data: [
                            {type: 'max', name: '最大值'},
                            {type: 'min', name: '最小值'}
                        ]
                    },
                    markLine: {
                        data: [
                            {type: 'average', name: '平均值'}
                        ]
                    }
                },
                {
                    name: '最低气温',
                    type: 'line',
                    data: [1, -2, 2, 5, 3, 2, 0],
                    markPoint: {
                        data: [
                            {name: '周最低', value: -2, xAxis: 1, yAxis: -1.5}
                        ]
                    },
                    markLine: {
                        data: [
                            {type: 'average', name: '平均值'},
                            [{
                                symbol: 'none',
                                x: '90%',
                                yAxis: 'max'
                            }, {
                                symbol: 'circle',
                                label: {
                                    position: 'start',
                                    formatter: '最大值'
                                },
                                type: 'max',
                                name: '最高点'
                            }]
                        ]
                    }
                }
            ]
      });
      return { swiperData, gridItems, option }
    }
  };
</script>
<style lang="less">
 @import url('./style.less');
</style>