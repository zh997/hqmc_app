<!-- 矿池 -->
<template>
    <NavBar :title="t('mining')" fixed/>
    <div class="page-wrap tabbar-page">
        <div class="v-chart-wrap">
            <div class="v-chart-title">HQC {{t('chart')}}</div>
            <v-chart class="v-chart" :option="option" />
        </div>
        <div class="main-title">
            <span class="main-title-bgtext">HQMC Ore Pit</span>
            <span class="main-title-text">HQMC {{t('mining')}}</span>
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
import { useI18n } from "vue-i18n";
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
        const { t } = useI18n();
        const minerList = ref<IMinerListResDTO[]>();
        
        const onInitData = async () => {
            try{
              utils.loading(t('loading'));
              const response = await services.minerList();
              minerList.value = response.data;
              const language = localStorage.getItem('language')
              const xAxis = response.data.map(item => language === 'zh-CN' ? '第' + item.no + '期' : 'Issue' + item.no);
              const series = [
                {
                    name: t('real_income'),
                    type: 'line',
                    smooth:true, 
                    symbol: "none", //去掉圆点 //让曲线变平滑的  
                    data: response.data.map(item => item.expected_outpu_actual),
                },
                {
                    name: t('estimated_output'),
                    type: 'line',
                    smooth:true, 
                    symbol: "none", //去掉圆点 //让曲线变平滑的  
                    data: response.data.map(item => Number(item.output)),
                },
                {
                    name: t('Locking_hqmc_quantity'),
                    type: 'line',
                    smooth:true, 
                    symbol: "none", //去掉圆点 //让曲线变平滑的  
                    data: response.data.map(item => Number(item.price)),
                },
                 {
                    name: t('actual_consumption'),
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
                    data: [t('real_income'), t('estimated_output'), t('Locking_hqmc_quantity'), t('actual_consumption')],
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
                                return value / 10000 + t('thousand');
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
                utils.loading(t('loading'));
                await services.buyMachine({id: item.id});
                Toast.success({message: t('open_successfully'), onClose: () => {
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
            onButMachine,
            t
        }

    }
  };
</script>
<style lang="less">
 @import url('./style.less');
</style>