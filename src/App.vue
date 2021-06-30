<template>
   <router-view></router-view>
   <TabbarPage v-if="isShowTabbar"/>
</template>

<script lang="ts">
import { useGlobalHooks } from '@/hooks';
import TabbarPage from '@/pages/tabbar_page/index.vue';

export default {
   components: {
    TabbarPage,
  },
  setup(){
    return { ...useGlobalHooks() }
  }
}
</script>

<style>
</style>
