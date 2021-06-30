import { RouteRecordRaw } from 'vue-router';
import * as routePath from '@/constant/app_routes_path';

const HomePage = () => import('@/pages/home_page/index.vue');
const OrepoolPage = () => import('@/pages/orepool_page/index.vue');
const DealPage = () => import('@/pages/deal_page/index.vue');
const MyPage = () => import('@/pages/my_page/index.vue');
const TeamIncomePage = () => import('@/pages/team_income_page/index.vue');

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: routePath.home_page,
        props: {
            isShowTabbar: true
        }
    },
    {
        path:  routePath.home_page,
        component: HomePage
    },
    {
        path:  routePath.orepool_page,
        component: OrepoolPage
    },
    {
        path:  routePath.deal_page,
        component: DealPage
    },
    {
        path:  routePath.my_page,
        component: MyPage
    },
    {
        path:  routePath.team_income_page,
        component: TeamIncomePage
    }
]

export default routes;