<!-- 产币记录 -->
<template>
    <CustomNavBar title="产币记录"/>
    <div class="page-wrap">
        <div class="produce-page">
            <CardItem :showBtn="false" v-for="item in list" :key="item.id" :item="item" :showHead="false"/>
            <!-- <CardItem btnText="已加入" :disabeld="true" :showHead="false"/>
            <CardItem btnText="已加入" :disabeld="true" :showHead="false"/> -->
        </div>
    </div>
</template>

<script lang='ts'>
import { ref, onMounted } from 'vue';
import CustomNavBar from '@/components/custom_nav_bar/index.vue';
import CardItem from '@/components/card_item/index.vue';
import * as services from '@/services/index';
import * as utils from '@/utils';
import { ICoinProfitResDTO } from '@/services/interface/response.d';

export default {
    name: 'produce-page',
    components:{
        CustomNavBar,
        CardItem
    },
    setup() {
        const list = ref<ICoinProfitResDTO[]>();
        const onGetCoinProfit = async () => {
            utils.loading('加载中');
            const res = await services.coinProfit();
            list.value = res.data;
            utils.loadingClean()
        }
        onMounted(() =>{
            onGetCoinProfit();
        })
        return { list }
    }
  };
</script>
<style lang="less">
 @import url('./style.less');
</style>