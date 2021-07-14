import { createApp } from 'vue';
import { createRouter, createWebHashHistory} from 'vue-router';
import { ConfigProvider, Locale } from 'vant';
import 'lib-flexible/flexible';
// 引入英文语言包
import enUS from 'vant/es/locale/lang/en-US';
import { Toast  } from 'vant';
import routes from '@/routes/index';
import App from './App.vue';
import { exclude_path } from './constants/app_exclude_path';
import { useGlobalHooks } from './hooks';
import './styles/reset_vantcss.less';
import './styles/common.less';

const app = createApp(App);

const router = createRouter({
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写
})

/** 路由守卫 */
router.beforeEach((to, from, next) => {
  const { isShowTabbar, onShowTabbar } = useGlobalHooks();
  const tabbarIndex = exclude_path.indexOf(to.path)
  if(tabbarIndex === -1) {
    if (isShowTabbar.value) onShowTabbar(false, tabbarIndex);
  } else {
    onShowTabbar(true, tabbarIndex);
  }
  window.scrollTo({top: 0});
  next();
})

app.use(ConfigProvider);
app.use(router)
app.use(Toast);
Locale.use('en-US', enUS);

app.mount('#app')