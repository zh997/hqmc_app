<template>
   <router-view v-if="isShowRouter"></router-view>
   <TabbarPage v-if="isShowTabbar"/>
</template>

<script lang="ts">
import { onMounted, ref } from 'vue';
import { useGlobalHooks } from '@/hooks';
import TabbarPage from '@/pages/tabbar_page/index.vue';
import { getTronlinkAddress } from '@/tronlink/index';
import * as services from '@/services'; 
import * as utils from '@/utils/index';

export default {
   components: {
    TabbarPage,
  },
  setup(){
    const isShowRouter = ref<boolean>(false);
    onMounted(async () => {
        /** 获取钱包地址登录 */
        try {
          utils.loading('登录中');
          const query = utils.getUrlQuery(window.location.hash)
          const address = await getTronlinkAddress();
          const response = await services.authLogin({name: address, code: query.code});
          localStorage.setItem('token', response.data.token);
          utils.loadingClean()
          isShowRouter.value = true;
        } catch(err) {
          utils.toast(err || err.msg);
           isShowRouter.value = true;
        }
    })
    return { ...useGlobalHooks(), isShowRouter}
  }
}
</script>

<style>
</style>
