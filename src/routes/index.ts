import { RouteRecordRaw } from 'vue-router';

const HomePage = () => import('@/pages/home_page/index.vue');
const OrepoolPage = () => import('@/pages/orepool_page/index.vue');


const routes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: HomePage
    },
    {
        path: '/orepool',
        component: OrepoolPage
    }
]

export default routes;