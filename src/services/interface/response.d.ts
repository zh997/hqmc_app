/** 登录 */
export interface IAuthLoginResDTO {
    token: string
}

/** 首页banner */
export interface IHomeBannerResDTO {
    name: string
    banner: string
}

/** 首页资产 */
export interface IHomeAssetResDTO {
    money: string
    hqc_money: string
    hqmc_money: string
}

/** 首页-USDT */
export interface IHomeWalletUsdtResDTO {
    user_id: number
    money: string
    usdt_wallet: string
}

/** 推荐奖励 */
export interface IShareAwardResDTO {
    user_info: {
        id: number
        name: string
    }
    direct_list: {
        id: number
        name: string
        has_div: string
        performance: string
        group_num: number
    }
}

/** 矿池列表 */
export interface IMinerListResDTO {
    id: number
    img: string
    name: string
    num: number
    output: string
    output_multiple: string
    price: string
    rate: string
}

/** 用户中心 */
export interface IUserInfoResDTO {
    activate: number
    head_img: string
    id: number
    level: number
    name: string
}

/** 邀请好友 */
export interface IShareInfoResDTO {
    code: string
    id: number
    name: string
    share_url: string
}

/** 团队收益 */
export interface ITeamBenefitsResDTO {
    profit_info: {total_profit: number, mining_profit: number, share_profit:number, team_profit: number}
    store_info: {money: string, hqc_money: string, hqmc_money: string}
}

