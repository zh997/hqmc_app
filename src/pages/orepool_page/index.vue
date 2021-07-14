<!-- 矿池 -->
<template>
    <NavBar title="挖矿" fixed/>
    <div class="page-wrap tabbar-page">
        <div class="v-chart-wrap">
            <v-chart class="v-chart" :option="option" />
        </div>
        <div class="main-title">
            <span class="main-title-bgtext">HQMC Ore Pit</span>
            <span class="main-title-text">HQMC矿池</span>
            <span class="main-title-line"></span>
        </div>
        <div class="hqctotal-header">
            <span class="hqctotal-header-label">已产出HQC888枚</span>
            <span class="progrecess-item">
                <span class="progrecess-item-cover"></span>
                <span class="progrecess-item-value">10%</span>
            </span>
        </div>
        <CardItem v-for="item,index in minerList" :key="index" :onClick="onOpen"/>
        <CardItem />
        <CardItem />
    </div>
</template>

<script lang='ts'>
import { onMounted, ref } from 'vue';
import { Toast } from 'vant';
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { LineChart } from "echarts/charts";
import {
  TitleComponent,
  LegendComponent,
  ToolboxComponent,
  TooltipComponent,
  SingleAxisComponent,
  GridComponent
} from "echarts/components";
import VChart, { THEME_KEY } from "vue-echarts";
import { NavBar } from 'vant';
import CardItem from '@/components/card_item/index.vue';
import * as services from '@/services/index';
import { IMinerListResDTO } from '@/services/interface/response.d';
import * as utils from '@/utils';

use([
  CanvasRenderer,
  LineChart,
  TitleComponent,
  TooltipComponent,
  ToolboxComponent,
  LegendComponent,
  SingleAxisComponent,
  GridComponent
]);

export default {
    name: 'orepoll_page',
     provide: {
      [THEME_KEY]: "light"
    },
    components: {
        VChart,
        NavBar,
        CardItem
    },
    setup() {
       const option = ref({
            tooltip: {
                trigger: 'axis'
            },
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
        
        const minerList = ref<IMinerListResDTO[]>();
        
        const onInitData = async () => {
            try{
              const response = await services.minerList();
              minerList.value = response.data;
            } catch(err){
              utils.toast(err || err.msg);
            }
        }

        onMounted(() => {
          onInitData();
        })
        
        const onOpen = () => {
            Toast.success('开启成功')
        }
        return {
            option,
            minerList,
            onOpen
        }

    }
  };
</script>
<style lang="less">
 @import url('./style.less');
</style>