import { RouteRecordRaw } from 'vue-router';
import { defineAsyncComponent } from 'vue';
import Loading from '@/components/loading/index.vue';
import * as routePath from '@/constants/app_routes_path';

const HomePage = defineAsyncComponent({
    loader: () => import('@/pages/home_page/index.vue'),
    loadingComponent: Loading
});
const OrepoolPage = defineAsyncComponent({
    loader: () => import('@/pages/orepool_page/index.vue'),
    loadingComponent: Loading
});
const DealPage = defineAsyncComponent(() => import('@/pages/deal_page/index.vue'));
const MyPage = defineAsyncComponent(() => import('@/pages/my_page/index.vue'));
const TeamIncomePage = defineAsyncComponent(() => import('@/pages/team_income_page/index.vue'));
const TeamIncomeRecordPage = defineAsyncComponent(() => import('@/pages/team_income_record_page/index.vue'));
const MyTeamPage = defineAsyncComponent(() => import('@/pages/my_team_page/index.vue'));
const SharePage = defineAsyncComponent(() => import('@/pages/share_page/index.vue'));
const ProducePage = defineAsyncComponent(() => import('@/pages/produce_page/index.vue'));
const PlateformIntroPage = defineAsyncComponent(() => import('@/pages/plateform_intro_page/index.vue'));
const AssetsInfoPage = defineAsyncComponent(() => import('@/pages/assets_info_page/index.vue'));
const ChargePage = defineAsyncComponent(() => import('@/pages/charge_page/index.vue'));
const WithdrawPage = defineAsyncComponent(() => import('@/pages/withdraw_page/index.vue'));

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
    },
    {
        path:  routePath.team_income_record_page,
        component: TeamIncomeRecordPage
    },
    {
        path:  routePath.my_team_page,
        component: MyTeamPage
    },
    {
        path:  routePath.share_page,
        component: SharePage
    },
    {
        path:  routePath.produce_page,
        component: ProducePage
    },
    {
        path:  routePath.plateform_intro_page,
        component: PlateformIntroPage
    },
    {
        path:  routePath.assets_info_page,
        component: AssetsInfoPage
    },
    {
        path:  routePath.charge_page,
        component: ChargePage
    },
    {
        path:  routePath.withdraw_page,
        component: WithdrawPage
    },
]

export default routes;