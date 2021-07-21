<!-- 邀请好友 -->
<template>
  <CustomNavBar :border="false"/>
  <div class="page-wrap share-page">
      <img :src="require('@/assets/share_img_1@2x.png')" class="share-title" alt="">
      <div id="qrcode" class="share-code"></div>
      <!-- <img :src="require('@/assets/share_code@2x.png')" class="share-code" alt=""> -->
      <span class="share-link-tip">邀请链接</span>
      <span class="share-link" id="copy">{{shareInfo?.share_url}}</span>
      <span class="share-copy-btn" data-clipboard-target="#copy">复制链接</span>
      <img :src="require('@/assets/share_img_2@2x.png')" class="share-img" alt="">
  </div>
</template>

<script lang='ts'>
import { onMounted, ref } from 'vue';
import { Toast  } from 'vant';
import ClipboardJS from 'clipboard';
import { qrcanvas } from 'qrcanvas';
import CustomNavBar from '@/components/custom_nav_bar/index.vue';
import * as services from '@/services/index';
import { IShareInfoResDTO } from '@/services/interface/response.d';
import * as utils from '@/utils';

export default {
    name: '',
    components:{
        CustomNavBar,
    },
    setup() {
        const shareInfo = ref<IShareInfoResDTO>();
        const onInitData = async () => {
            try{
                utils.loading('加载中');
                const response = await services.shareInfo();
                shareInfo.value = response.data;
                utils.loadingClean();
                onRenderQrcode(response.data.share_url)
            } catch(err){
                utils.toast(err || err.msg);
            }
        }

        const onRenderQrcode = (url: any) => {
            var canvas = qrcanvas({
                data: url,
                size: 4234,
            })

            document.getElementById('qrcode')?.appendChild(canvas);
        }

        onMounted(async () => {
            await onInitData();
            let ClipboardJSObj=new ClipboardJS('.share-copy-btn')
            ClipboardJSObj.on('success', function(e) {
                Toast.success('复制成功！')
                e.clearSelection();
            });
            ClipboardJSObj.on('error', function(e) {
                e.clearSelection();
            })

        })
        return {
            shareInfo
        }
    }
  };
</script>
<style lang="less">
 @import url('./style.less');
</style>