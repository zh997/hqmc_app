import { createApp } from 'vue';
import VueRouter from 'vue-router';
import routes from '@/routes/index';
import App from './App.vue';


const app = createApp(App);

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes, // `routes: routes` 的缩写
})


app.use(router)

app.mount('#app')