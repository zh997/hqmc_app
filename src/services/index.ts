import request from "@/request";
import { IAuthLoginReqDTO, IUsdtWithdrawReqDTO, IHqcTransferReqDTO, ITradeListReqDTO } from "./interface/request.d";
import * as api from '@/constants/api_url';
import { IAuthLoginResDTO, 
    IHomeBannerResDTO, 
    IHomeWalletUsdtResDTO, 
    IHomeAssetResDTO, 
    IShareAwardResDTO,
    IMinerListResDTO,
    IUserInfoResDTO,
    IShareInfoResDTO,
    ITeamBenefitsResDTO,
    IHomeWalletHqcResDTO,
    IHomeHqmcMoneyResDTO,
    ITradeListResDTO
 } from "./interface/response.d";
import { ResponseDTO, ResponseListDTO } from "@/typing";

/** 授权登录 */
export async function authLogin(params: IAuthLoginReqDTO): Promise<ResponseDTO<IAuthLoginResDTO>> {
    return await request({url: api.authLogin, method: 'POST', data: params});
}

/** 首页banner */
export async function homeBanner(params: {lang: string}): Promise<ResponseDTO<IHomeBannerResDTO[]>> {
    return await request({url: api.basic_banner, method: 'POST', data: params });
}

/** 首页资产 */
export async function homeWalletAsset(): Promise<ResponseDTO<IHomeAssetResDTO>> {
    return await request({url: api.index_asset, method: 'POST'});
}

/** 首页-USDT */
export async function homeWalletUsdt(): Promise<ResponseDTO<IHomeWalletUsdtResDTO>> {
    return await request({url: api.wallet_usdt, method: 'POST'});
}

/** 首页-HQC */
export async function homeWalletHqc(): Promise<ResponseDTO<IHomeWalletHqcResDTO>> {
    return await request({url: api.wallet_hqc, method: 'POST'});
}

/** 推荐奖励 */
export async function shareAward(): Promise<ResponseDTO<IShareAwardResDTO>> {
    return await request({url: api.share_award, method: 'POST'});
}

/** 矿池列表 */
export async function minerList(): Promise<ResponseDTO<IMinerListResDTO[]>> {
    return await request({url: api.miner_list, method: 'POST'});
}

/** 用户中心 */
export async function userCenter(): Promise<ResponseDTO<IUserInfoResDTO>> {
    return await request({url: api.user_center, method: 'POST'});
}

/** 邀请好友 */
export async function shareInfo(): Promise<ResponseDTO<IShareInfoResDTO>> {
    return await request({url: api.share_qrcode, method: 'POST'});
}

/** 团队收益 */
export async function teamBenefits(): Promise<ResponseDTO<ITeamBenefitsResDTO>> {
    return await request({url: api.team_benefits, method: 'POST'});
}

/** USDT-提现 */
export async function usdtWithdraw(params: IUsdtWithdrawReqDTO): Promise<ResponseDTO<ITeamBenefitsResDTO>> {
    return await request({url: api.usdt_withdraw, method: 'POST', data: params});
}

/** HQC-转让 */
export async function hqcTransfer(params: IHqcTransferReqDTO): Promise<ResponseDTO<ITeamBenefitsResDTO>> {
    return await request({url: api.hqc_transfer, method: 'POST', data: params});
}

/** 首页-HQMC */
export async function hqcMoney(): Promise<ResponseDTO<IHomeHqmcMoneyResDTO>> {
    return await request({url: api.hqmc_money, method: 'POST'});
}

/** HQMC转让 */
export async function hqmcTransfer(params: IHqcTransferReqDTO): Promise<ResponseDTO<IHomeHqmcMoneyResDTO>> {
    return await request({url: api.hqmc_transfer, method: 'POST', data: params});
}

/** HQMC兑换 */
export async function hqmcChange(params: {num: number}): Promise<ResponseDTO<IHomeHqmcMoneyResDTO>> {
    return await request({url: api.hqmc_change, method: 'POST', data: params});
}

/** HQMC销毁 */
export async function hqmcDestory(params: {num: number}): Promise<ResponseDTO<IHomeHqmcMoneyResDTO>> {
    return await request({url: api.hqmc_destory, method: 'POST', data: params});
}

/** 购买矿机 */
export async function buyMachine(params: {id: number}): Promise<ResponseDTO<IHomeHqmcMoneyResDTO>> {
    return await request({url: api.buy_machine, method: 'POST', data: params});
}

/** 交易列表 */
export async function tradeList(params: ITradeListReqDTO): Promise<ResponseListDTO<ITradeListResDTO>> {
    return await request({url: api.tradeList, method: 'POST', data: params});
}

/** 买入 */
export async function buyIn(params: {id: number}): Promise<ResponseListDTO<[]>> {
    return await request({url: api.buyIn, method: 'POST', data: params});
}

/** 买出 */
export async function sellOut(params: {id: number}): Promise<ResponseListDTO<[]>> {
    return await request({url: api.sellOut, method: 'POST', data: params});
}


