import * as routerPaths from '@/constant/app_routes_path';
import { IListItem } from '../type.d';

export const listItemData = (): IListItem[] => {
    return [
        {
          icon: require('@/assets/my_icon_1@2x.png'),
          title: '邀请好友',
          path: '/'
        },
        {
            icon: require('@/assets/my_icon_2@2x.png'),
            title: '团队收益',
            path: routerPaths.team_income_page
        }
    ]
}