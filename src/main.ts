import { createApp } from 'vue';
import { createRouter, createWebHashHistory} from 'vue-router';
import { ConfigProvider, Locale } from 'vant';
import 'lib-flexible/flexible';
// 引入英文语言包
import enUS from 'vant/es/locale/lang/en-US';
import routes from '@/routes/index';
import App from './App.vue';
import './styles/reset_vantcss.less';
import './styles/common.less';
import { exclude_path } from './constant/app_exclude_path';
import { useGlobalHooks } from './hooks';


const app = createApp(App);

const router = createRouter({
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写
})

/** 路由守卫 */
router.beforeEach((to, from, next) => {
  console.log(to)
  const { isShowTabbar, onShowTabbar } = useGlobalHooks();
  const tabbarIndex = exclude_path.indexOf(to.fullPath)
  if(tabbarIndex === -1) {
    if (isShowTabbar.value) onShowTabbar(false, tabbarIndex);
  } else {
    onShowTabbar(true, tabbarIndex);
  }
  next();
})

app.use(ConfigProvider);
app.use(router)
Locale.use('en-US', enUS);

app.mount('#app')