<!-- 首页 -->
<template>
  <Tabbar v-model="active" @change="onChange">
    <TabbarItem v-for="item, index in tabbar" :key="index" :to="item.path">
       <span>{{item.title}}</span>
       <template #icon="props">
          <img :src="props.active ? item.selected_icon : item.icon" />
       </template>
    </TabbarItem>
  </Tabbar>
</template>

<script lang='ts'>
import { ref, reactive, onMounted } from 'vue'
import { Tabbar, TabbarItem } from 'vant';
import { useRouter } from 'vue-router';
import { ITabbarItem } from './type';
export default {
    name: 'home_page',
    components: {
        Tabbar,
        TabbarItem
    },
    setup() {
      const active = ref(0);
      const tabbar = reactive<ITabbarItem[]>([
        {
          icon: require('@/assets/tabbar_icon_home@2x.png'),
          selected_icon: require('@/assets/tabbar_icon_home_selected@2x.png'),
          title: '首页',
          path: '/home'
        },
        {
          icon: require('@/assets/tabbar_icon_orepool@2x.png'),
          selected_icon: require('@/assets/tabbar_icon_orepool_selected@2x.png'),
          title: '挖矿',
          path: '/orepool'
        },
        {
          icon: require('@/assets/tabbar_icon_deal@2x.png'),
          selected_icon: require('@/assets/tabbar_icon_deal_selected@2x.png'),
          title: '交易',
          path: '/deal'
        },
        {
          icon: require('@/assets/tabbar_icon_my@2x.png'),
          selected_icon: require('@/assets/tabbar_icon_my_selected@2x.png'),
          title: '我的',
          path: '/my'
        }
      ])
      onMounted(() => {
        const router = useRouter();
        const currentRoute = router.currentRoute.value;
        const tabbarPaths = tabbar.map(item => item.path);
        if (tabbarPaths.includes(currentRoute.fullPath)) {
          console.log(tabbarPaths.indexOf(currentRoute.fullPath));
          active.value = tabbarPaths.indexOf(currentRoute.fullPath);
        }
      })
      
      const onChange = (index: number) => active.value = index;

      return {
          active,
          onChange,
          tabbar
      };
    }
  };
</script>
<style scoped>
</style>