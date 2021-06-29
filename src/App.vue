<template>
   <router-view></router-view>
   <TabbarPage />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import TabbarPage from '@/pages/tabbar_page/index.vue';

@Options({
  components: {
    TabbarPage,
  },
})
export default class App extends Vue {
  setup(){
     return {}
  }
}
</script>

<style>
</style>
