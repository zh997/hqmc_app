<!-- 交易 -->
<template>
    <NavBar title="交易" fixed/>
    <div class="page-wrap tabbar-page">
        <Header :isShowHeader="false" :banners="banners"/>
        <div class="switch-bar-head">
            <div class="switch-bar">
                <span :class="{'switch-bar-selected': current === 1}" @click="onSwitch(1)">购买</span>
                <span :class="{'switch-bar-selected': current === 2}" @click="onSwitch(2)">出售</span>
            </div>
            <img :src="require('@/assets/icon_record@2x.png')" @click="onShowPopup" alt="">
        </div>
        <div class="selector-bar-wrap">
            <div class="selector-bar">
               <span class="selector-bar-item">HQC</span>
            </div>
            <span @click="onSort">{{sort === 'asc' ? '降序' : '升序'}}<img :src="require('@/assets/icon_down_arrow@2x.png')" alt=""></span> 
        </div>
        <List
            v-model="loading"
            :finished="finished"
            @load="onLoad"
            :offset="0"
        >
          <div class="dealcard-item-wrap" v-for="item in tradList" :key="item.id">
            <div class="dealcard-item">
                <div class="dealcard-item-head">
                    <img :src="item.head_img" alt="">
                    <span class="head-title">{{item.username}}</span>
                    <span class="head-subtitle"></span>
                </div>
                <div class="dealcard-item-row">
                    <span class="dealcard-item-row-text">数量：{{item?.num}} HQC</span>
                    <span class="dealcard-item-row-value">$ {{item?.total}}</span>
                </div>
                <div class="dealcard-item-row">
                    <span class="dealcard-item-row-text"></span>
                    <span class="dealcard-item-row-btn" @click="onBuyIn(item.id)">{{ current === 1 ? '买入' : '卖出'}}</span>
                </div>
            </div>
            </div>
        </List>
        
        <Popup  v-model:show="show" round position="bottom">
         <Picker title="排序"
            :columns="columns"
            @confirm="onConfirm"
            @cancel="onCancel"
            confirm-button-text="确认" cancel-button-text="取消"
            />
      </Popup>
      <div class="publish-btn" @click="onRouter('/publish_order_page')">
          <img :src="require('@/assets/icon_add@2x.png')" alt="">
      </div>
    </div>
</template>

<script lang='ts'>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { NavBar, Toast,  Popup, Picker, List } from 'vant';
import Header from '@/components/header/index.vue';
import * as services from '@/services/index';
import { IHomeBannerResDTO, ITradeListResDTO } from '@/services/interface/response.d';
import * as utils from '@/utils';
export default {
    name: '',
    components: {
        Header,
        NavBar,
        Popup,
        Picker,
        List
    },
    setup() {
        const router = useRouter();
        const pageSize: number = 10;
        const show = ref<boolean>(false);
        const current = ref<number>(1);
        const page = ref<number>(0);
        const pageTotal = ref<number>(1);
        const sort = ref<string>('asc');
        const order = ref<string>('price');
        const loading = ref<Boolean>(false);
        const finished = ref<Boolean>(false);
        const columns = [{text: '创建时间', value: 'created_at'}, {text: '价格', value: 'price'}];
        const tradList = ref<ITradeListResDTO[]>();
        const banners = ref<IHomeBannerResDTO[]>([]);
        const onSwitch = (value: number) => {
            page.value = 1;
            current.value = value;
            onGetTradeList();
        }
        const onShowPopup = () => show.value = true; 

        const onInitData = async () => {
            utils.loading('加载中');
            const [bannerRes] = await Promise.all([services.homeBanner({lang: 'zh_CN'})]) ;
            banners.value = bannerRes.data;
            utils.loadingClean();
        }

        const onGetTradeList = async () => {
            // utils.loading('加载中');
            loading.value = true;
            const res = await services.tradeList({
                page: page.value,
                size: pageSize,
                type: current.value,
                sort: sort.value,
                order: order.value
            });
            utils.loadingClean();
            const pageNum = Math.ceil(res.data.total / pageSize);
            if (page.value !== 1) {
              tradList.value = tradList.value?.concat(res.data.list);
            } else {
              tradList.value = res.data.list
            }
            pageTotal.value = pageNum;
            finished.value = page.value >= pageNum;
            loading.value = false;
            return res;
        }

        const onBuyIn = async (id: number) => {
             utils.loading('加载中');
            if (current.value === 1) {
                await services.buyIn({id: id});
                Toast.success({message: '买入成功', onClose: () => {
                    onInitData()
                }});
            }
             if (current.value === 2) {
                await services.sellOut({id: id});
                Toast.success({message: '卖出成功', onClose: () => {
                    onInitData()
                }});
            }
        }

        const onLoad = () => {
           page.value = page.value + 1;
           if ( page.value <= pageTotal.value)   onGetTradeList();
        }

        const onSort = () => {
            page.value = 1;
            sort.value = sort.value === 'asc' ? 'desc' : 'asc';
            onGetTradeList();
        }
        
        onMounted(()=> {
            onInitData()
        })
        
        const onConfirm = (item: {value: string, text: string}) => {
           show.value = false;
           order.value = item.value;
           page.value = 1;
           onGetTradeList();
        };
        const onCancel = () => show.value = false;

        const onRouter = (path: string) => {
            router.push(path);
        }

        return {current, banners, tradList, sort, columns, show,loading, finished, onRouter, onSwitch, onBuyIn, onSort, onShowPopup, onConfirm, onCancel, onLoad}
    }
  };
</script>
<style lang="less">
 @import url('./style.less');
</style>