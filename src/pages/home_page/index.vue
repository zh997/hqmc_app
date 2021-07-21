<!-- 首页 -->
<template>
  <div class="tabbar-page">
    <Header :banners="banners"/>
    <div class="grid-group">
      <div class="grid-group-item" v-for="item,index in gridItems" :key="index" @click="onRouter(item.path)">
        <img :src="item.icon" alt="">
        <span>{{item.text}}</span>
      </div>
    </div>
    <BlockTitle />
    <!-- <div class="asstes-group">
      <div class="asstes-group-item" @click="onRouter('/assets_info?name=USDT')">
        <span>USDT钱包</span>
        <span class="asstes-value">￥{{indexAsset?.money}}</span>
      </div>
      <div class="asstes-group-item" @click="onRouter('/assets_info?name=HQC')">
        <span>HQC钱包</span>
        <span class="asstes-value">￥{{indexAsset?.hqc_money}}</span>
      </div>
      <div class="asstes-group-item" @click="onRouter('/assets_info?name=HQMC')">
        <span>HQMC钱包</span>
        <span class="asstes-value">￥{{indexAsset?.hqmc_money}}</span>
      </div>
    </div> -->
    <div class="asstes-group">
      <div class="asstes-group-item">
        <span>USDT钱包</span>
        <span class="asstes-value">￥{{indexAsset?.money}}</span>
      </div>
      <div class="asstes-group-item">
        <span>HQC钱包</span>
        <span class="asstes-value">￥{{indexAsset?.hqc_money}}</span>
      </div>
      <div class="asstes-group-item">
        <span>HQMC钱包</span>
        <span class="asstes-value">￥{{indexAsset?.hqmc_money}}</span>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { reactive, onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import Header from '@/components/header/index.vue';
import BlockTitle from '@/components/block_title/index.vue';
import * as routesPaths from '@/constants/app_routes_path';
import * as services from '@/services/index';
import { IHomeBannerResDTO, IHomeAssetResDTO } from '@/services/interface/response.d';
import * as utils from '@/utils';

export default {
    name: 'home_page',
    components: {
      Header,
      BlockTitle
    },
    setup() {
      const router = useRouter();
      const banners = ref<IHomeBannerResDTO[]>([]);
      const indexAsset = ref<IHomeAssetResDTO>();

      const onInitData = async () => {
        try {
          utils.loading('加载中');
          const [bannerRes, indexAssetRes] = await Promise.all([services.homeBanner({lang: 'zh_CN'}), services.homeWalletAsset()]) ;
          banners.value = bannerRes.data;
          indexAsset.value = indexAssetRes.data;
          utils.loadingClean();
        } catch(err) {
          utils.toast(err || err.msg);
        }
      }
      
      onMounted(()=> {
        onInitData()
      })

      const gridItems = reactive([
        {
          icon: require('@/assets/home_icon_1@2x.png'),
          text: 'USDT',
          path: routesPaths.full_extraction_page + `?name=USDT`
        },
        {
          icon: require('@/assets/home_icon_2@2x.png'),
          text: 'HQC',
          path: routesPaths.full_extraction_page + `?name=HQC`
        },
        {
          icon: require('@/assets/LOGO@2x.png'),
          text: 'HQMC',
          path: routesPaths.hqmc_info_page
        },
        {
          icon: require('@/assets/home_icon_4@2x.png'),
          text: '分享',
          path: routesPaths.share_page
        },
        {
          icon: require('@/assets/home_icon_5@2x.png'),
          text: '矿池',
          path: routesPaths.orepool_page
        },
        {
          icon: require('@/assets/home_icon_6@2x.png'),
          text: '交易区',
          path: routesPaths.deal_page
        },
        {
          icon: require('@/assets/home_icon_7@2x.png'),
          text: '空投',
          path: '/'
        },
        {
          icon: require('@/assets/home_icon_8@2x.png'),
          text: '生态',
          path: '/'
        },
      ])
      return { 
        banners: banners,
        indexAsset, gridItems, onRouter: (path: string) => {
          router.push(path)
        }
      }
    }
  };
</script>
<style lang="less">
 @import url('./style.less');
</style>