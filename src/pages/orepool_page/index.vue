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
        <!-- <div class="hqctotal-header">
            <span class="hqctotal-header-label">已产出HQC888枚</span>
            <span class="progrecess-item">
                <span class="progrecess-item-cover"></span>
                <span class="progrecess-item-value">10%</span>
            </span>
        </div> -->
        <CardItem v-for="item,index in minerList" :item="item" :key="index" :onClick="onButMachine"/>
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
       const option = ref();
        
        const minerList = ref<IMinerListResDTO[]>();
        
        const onInitData = async () => {
            try{
              utils.loading('加载中');
              const response = await services.minerList();
              minerList.value = response.data;
              const xAxis = response.data.map(item => '第' + item.no + '期');
              const series = [
                {
                    name: '实际收益',
                    type: 'line',
                    smooth:true, 
                    symbol: "none", //去掉圆点 //让曲线变平滑的  
                    data: response.data.map(item => item.expected_outpu_actual),
                },
                {
                    name: '预计产出量',
                    type: 'line',
                    smooth:true, 
                    symbol: "none", //去掉圆点 //让曲线变平滑的  
                    data: response.data.map(item => Number(item.output)),
                },
                {
                    name: '锁定HQMC数量',
                    type: 'line',
                    smooth:true, 
                    symbol: "none", //去掉圆点 //让曲线变平滑的  
                    data: response.data.map(item => Number(item.price)),
                },
                 {
                    name: '实际消耗',
                    type: 'line',
                    smooth:true, 
                    symbol: "none", //去掉圆点 //让曲线变平滑的  
                    
                    data: response.data.map(item => item.expected_consume_actual),
                }
              ];
              option.value = {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        label: {
                            backgroundColor: '#6a7985'
                        }
                    }
                },
                grid: {
                    x: "15%",//x 偏移量
                    y: "20%", // y 偏移量
                    width: "87%", // 宽度
                },
                legend: {
                    data: ['实际收益', '预计产出量', '锁定HQMC数量', '实际消耗'],
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: xAxis
                },
                yAxis: {
                    type: 'value',
                    axisLabel: {
                        formatter: function(value: number){
                            if (value > 999) {
                                return value / 10000 + '万';
                            }
                            return value;
                        }
                    }
                },
                series:series
             }
             utils.loadingClean();
            } catch(err){
              utils.toast(err || err.msg);
            }
        }

        const onButMachine = async (item: IMinerListResDTO) => {
            console.log(item);
            if (item.status_tip === 1) {
                utils.loading('加载中');
                await services.buyMachine({id: item.id});
                Toast.success({message: '开启成功', onClose: () => {
                     onInitData();
                }})
            }
        }

        onMounted(() => {
          onInitData();
        })
        
        return {
            option,
            minerList,
            onButMachine
        }

    }
  };
</script>
<style lang="less">
 @import url('./style.less');
</style>