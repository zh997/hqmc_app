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
        <div class="card-item">
            <div class="card-item-head">
                <span class="head-stage">第20120123期</span>
                <span class="head-text">HQC预计产出量<span class="head-text-active">5000</span>万</span>
            </div>
            <div class="card-item-row">
                <span class="card-item-row-text"><span>开启日期：</span>2021.08.14</span>
                <span class="card-item-row-text"><span>结束日期：</span>2021.08.14</span>
            </div>
            <div class="card-item-row">
                <span class="card-item-row-text"><span>锁定HQMC: </span>100</span>
                <span class="card-item-row-text"><span>本期HQC预估产量: </span>0.2%-0.8%</span>
            </div>
            <div class="card-item-row">
                <span class="card-item-row-text"><span>锁定HQMC: </span>100</span>
                <span class="card-item-row-btn">开启</span>
            </div>
        </div>
         <div class="card-item">
            <div class="card-item-head">
                <span class="head-stage">第20120123期</span>
                <span class="head-text">HQC预计产出量<span class="head-text-active">5000</span>万</span>
            </div>
            <div class="card-item-row">
                <span class="card-item-row-text"><span>开启日期：</span>2021.08.14</span>
                <span class="card-item-row-text"><span>结束日期：</span>2021.08.14</span>
            </div>
            <div class="card-item-row">
                <span class="card-item-row-text"><span>锁定HQMC: </span>100</span>
                <span class="card-item-row-text"><span>本期HQC预估产量: </span>0.2%-0.8%</span>
            </div>
            <div class="card-item-row">
                <span class="card-item-row-text"><span>锁定HQMC: </span>100</span>
                <span class="card-item-row-btn">开启</span>
            </div>
        </div>
         <div class="card-item">
            <div class="card-item-head">
                <span class="head-stage">第20120123期</span>
                <span class="head-text">HQC预计产出量<span class="head-text-active">5000</span>万</span>
            </div>
            <div class="card-item-row">
                <span class="card-item-row-text"><span>开启日期：</span>2021.08.14</span>
                <span class="card-item-row-text"><span>结束日期：</span>2021.08.14</span>
            </div>
            <div class="card-item-row">
                <span class="card-item-row-text"><span>锁定HQMC: </span>100</span>
                <span class="card-item-row-text"><span>本期HQC预估产量: </span>0.2%-0.8%</span>
            </div>
            <div class="card-item-row">
                <span class="card-item-row-text"><span>锁定HQMC: </span>100</span>
                <span class="card-item-row-btn">开启</span>
            </div>
        </div>
    </div>
</template>

<script lang='ts'>
import { ref } from 'vue';
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
        NavBar
    },
    setup() {
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
        return {
            option
        }

    }
  };
</script>
<style lang="less">
 @import url('./style.less');
</style>