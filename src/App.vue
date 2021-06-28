<template>
  <van-config-provider :theme-vars="themeVars">
    <router-view></router-view>
    <TabbarPage />
  </van-config-provider>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import TabbarPage from '@/pages/tabbar_page/index.vue';
import themeVars from '@/styles/themes_vars'

@Options({
  components: {
    TabbarPage,
  },
})
export default class App extends Vue {
  setup(){
     return {themeVars}
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
