import * as routerPaths from '@/constant/app_routes_path';
import { IListItem } from '../type';

export const listItemData = (): IListItem[] => {
    return [
        {
          icon: require('@/assets/my_icon_1@2x.png'),
          title: '邀请好友',
          path: routerPaths.share_page
        },
        {
            icon: require('@/assets/my_icon_2@2x.png'),
            title: '团队收益',
            path: routerPaths.team_income_page
        },
        {
            icon: require('@/assets/my_icon_6@2x.png'),
            title: '产币记录',
            path: routerPaths.produce_page
        },
        {
            icon: require('@/assets/my_icon_3@2x.png'),
            title: '账号安全',
            path: routerPaths.my_page
        },
        {
            icon: require('@/assets/my_icon_5@2x.png'),
            title: '语言设置',
            path: routerPaths.my_page
        },
        {
            icon: require('@/assets/my_icon_4@2x.png'),
            title: '平台介绍',
            path: routerPaths.plateform_intro_page
        }
    ]
}