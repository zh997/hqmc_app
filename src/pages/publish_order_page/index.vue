<!-- 订单发布 -->
<template>
    <CustomNavBar title="订单发布"/>
    <div class="page-wrap">
        <div class="publish-order-page">
            <div class="publish-order-tab">
                <div class="publish-order-tabitem" :class="type === 1 ? 'tabitem-active': '' " @click="onSwitchTab(1)">我要卖币</div>
                <div class="publish-order-tabitem" :class="type === 2 ? 'tabitem-active': '' " @click="onSwitchTab(2)">我要买币</div>
            </div>
            <div class="publish-order-form">
                <div class="publish-order-formitem">
                    <div class="publish-order-formitem-label">价格：</div>
                    <div class="publish-order-formitem-value">
                        <input type="text" v-model="price" placeholder="请输入价格">
                        <div class="publish-order-formitem-sufix">USDT</div>
                    </div>
                </div>
                <div class="publish-order-formitem">
                    <div class="publish-order-formitem-label">交易数量：</div>
                    <div class="publish-order-formitem-value">
                        <input type="number" v-model="num" placeholder="请输入交易数量">
                        <!-- <div class="publish-order-formitem-sufix"></div> -->
                    </div>
                </div>
            </div>
            <Button type="primary" size="large" @click="onSubmit">发布</Button>
        </div>
    </div>
</template>

<script lang='ts'>
import { ref } from 'vue';
import { Button, Toast } from 'vant';
import CustomNavBar from '@/components/custom_nav_bar/index.vue';
import * as services from '@/services/index';
import * as utils from '@/utils';

export default {
    name: 'publish-order-page',
    components:{
        CustomNavBar,
        Button
    },
    setup() {
       const type = ref<number>(1);
       const price = ref<string>('');
       const num = ref<string>('');
       const onSwitchTab = (value: number) => type.value = value;
       const onSubmit = async () => {
            utils.loading('加载中');
            await services.releaeOrder({
                type: type.value,
                price: price.value,
                num: Number(num.value)
            });
            Toast.success('发布成功');
       }
       return {type, price, num,  onSwitchTab, onSubmit}
    }
  };
</script>
<style lang="less">
 @import url('./style.less');
</style>