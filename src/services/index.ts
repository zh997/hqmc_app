import request from "@/request";
import { IAuthLoginReqDTO } from "./interface/request.d";
import * as api from '@/constants/api_url';
import { IAuthLoginResDTO, 
    IHomeBannerResDTO, 
    IHomeWalletUsdtResDTO, 
    IHomeAssetResDTO, 
    IShareAwardResDTO,
    IMinerListResDTO,
    IUserInfoResDTO,
    IShareInfoResDTO,
    ITeamBenefitsResDTO
 } from "./interface/response.d";
import { ResponseDTO } from "@/typing";

/** 授权登录 */
export async function authLogin(params: IAuthLoginReqDTO): Promise<ResponseDTO<IAuthLoginResDTO>> {
    return await request.post(api.authLogin, params);
}

/** 首页banner */
export async function homeBanner(params: {lang: string}): Promise<ResponseDTO<IHomeBannerResDTO[]>> {
    return await request.post(api.basic_banner, params);
}

/** 首页资产 */
export async function homeWalletAsset(): Promise<ResponseDTO<IHomeAssetResDTO>> {
    return await request.post(api.index_asset);
}

/** 首页-USDT */
export async function homeWalletUsdt(): Promise<ResponseDTO<IHomeWalletUsdtResDTO>> {
    return await request.post(api.wallet_usdt);
}

/** 推荐奖励 */
export async function shareAward(): Promise<ResponseDTO<IShareAwardResDTO>> {
    return await request.post(api.share_award);
}

/** 矿池列表 */
export async function minerList(): Promise<ResponseDTO<IMinerListResDTO[]>> {
    return await request.post(api.miner_list);
}

/** 用户中心 */
export async function userCenter(): Promise<ResponseDTO<IUserInfoResDTO>> {
    return await request.post(api.user_center);
}

/** 邀请好友 */
export async function shareInfo(): Promise<ResponseDTO<IShareInfoResDTO>> {
    return await request.post(api.share_qrcode);
}

/** 团队收益 */
export async function teamBenefits(): Promise<ResponseDTO<ITeamBenefitsResDTO>> {
    return await request.post(api.team_benefits);
}