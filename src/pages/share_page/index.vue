<!-- 邀请好友 -->
<template>
  <CustomNavBar :border="false"/>
  <div class="page-wrap share-page">
      <img :src="require('@/assets/share_img_1@2x.png')" class="share-title" alt="">
      <img :src="require('@/assets/share_code@2x.png')" class="share-code" alt="">
      <span class="share-link-tip">邀请链接</span>
      <span class="share-link" id="copy">https://www.hqmc.com/dasd/wadawda/131233333333</span>
      <span class="share-copy-btn" data-clipboard-target="#copy">复制链接</span>
      <img :src="require('@/assets/share_img_2@2x.png')" class="share-img" alt="">
  </div>
</template>

<script lang='ts'>
import { onMounted } from 'vue';
import { Toast  } from 'vant';
import ClipboardJS from 'clipboard'
import CustomNavBar from '@/components/custom_nav_bar/index.vue';
export default {
    name: '',
    components:{
        CustomNavBar,
    },
    setup() {
        onMounted(() => {
            let ClipboardJSObj=new ClipboardJS('.share-copy-btn')
            ClipboardJSObj.on('success', function(e) {
                Toast.success('复制成功！')
                e.clearSelection();
            });
            ClipboardJSObj.on('error', function(e) {
                e.clearSelection();
            })
        })
        return {}
    }
  };
</script>
<style lang="less">
 @import url('./style.less');
</style>