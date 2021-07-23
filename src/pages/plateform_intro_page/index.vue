<!-- 平台介绍 -->
<template>
  <CustomNavBar title="平台介绍"/>
  <div class="page-wrap">
      <div class="plateform-intro-page">
        <img :src="require('@/assets/intro_banner@2x.png')" alt="">
        <div class="plateform-intro" v-html="platform && platform[0].content"></div>
        <div class="plateform-intro-group">
            <div class="plateform-intro-item" @click="onRouter('/plateform_intro_detail_page?name=服务协议&index=1')">
                <span class="plateform-intro-item-label">服务协议</span>
                <img :src="require('@/assets/icon_right_arrow_light@2x.png')" alt="">
            </div>
            <div class="plateform-intro-item" @click="onRouter('/plateform_intro_detail_page?name=隐私条款&index=2')">
                <span class="plateform-intro-item-label">隐私条款</span>
                <img :src="require('@/assets/icon_right_arrow_light@2x.png')" alt="">
            </div>
            <div class="plateform-intro-item" @click="onRouter('/plateform_intro_detail_page?name=版本日记&index=3')">
                <span class="plateform-intro-item-label">版本日记</span>
                <img :src="require('@/assets/icon_right_arrow_light@2x.png')" alt="">
            </div>
            <div class="plateform-intro-item" @click="onRouter('/plateform_intro_detail_page?name=当前版本&index=4')">
                <span class="plateform-intro-item-label">当前版本</span>
                <img :src="require('@/assets/icon_right_arrow_light@2x.png')" alt="">
            </div>
        </div>
      </div>
  </div>
</template>

<script lang='ts'>
import { useRouter } from 'vue-router';
import { ref, onMounted } from 'vue';
import CustomNavBar from '@/components/custom_nav_bar/index.vue';
import * as services from '@/services/index';
import * as utils from '@/utils';
import { IPlatFormResDTO } from '@/services/interface/response.d';

export default {
    name: '',
    components: {
        CustomNavBar
    },
    setup() {
        const router = useRouter();
        const platform = ref<IPlatFormResDTO[]>();
        const onGetPlatintro = async () => {
            utils.loading('加载中');
            const res = await services.plat_form();
            platform.value = res.data;
            utils.loadingClean()
        }
        onMounted(() =>{
            onGetPlatintro();
        })
       return {platform, onRouter: (path: string) => {
          router.push(path)
       }}
    }
  };
</script>
<style lang="less">
 @import url('./style.less');
</style>