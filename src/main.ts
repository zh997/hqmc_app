import { createApp } from 'vue';
import { createRouter, createWebHashHistory} from 'vue-router';
import { ConfigProvider, Locale } from 'vant';
import 'lib-flexible/flexible';
// 引入英文语言包
import enUS from 'vant/es/locale/lang/en-US';
import routes from '@/routes/index';
import App from './App.vue';
import './styles/reset_vantcss.less';


const app = createApp(App);

const router = createRouter({
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写
})
app.use(ConfigProvider);
app.use(router)
Locale.use('en-US', enUS);

app.mount('#app')