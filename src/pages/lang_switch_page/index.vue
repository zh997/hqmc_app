<!-- 资产详情 -->
<template>
  <CustomNavBar :title="t('language_settings')" />
  <div class="page-wrap">
      <div class="language-settings-page">
           <div class="language-setting-item" @click="change('zh-CN')">中文 <Checkbox v-model="isZhCn" @click="change"/></div>
           <div class="language-setting-item" @click="change('en-US')" >English <Checkbox v-model="isEnUs" @click="change"/></div>
      </div>
  </div>
</template>

<script lang='ts'>
import { useI18n } from "vue-i18n";
import { Checkbox } from 'vant';
import { useRouter } from 'vue-router';
import CustomNavBar from '@/components/custom_nav_bar/index.vue';
export default {
    name: '',
    components: {
       CustomNavBar,
       Checkbox
    },
    setup() {
        const { t } = useI18n();
        const router = useRouter();
        const language = localStorage.getItem('language') || 'zh-CN';
        /** 中英文切换 */
        const change = (type: any) => {
            localStorage.setItem('language', type);
            router.go(0);
        }
        return { t, language, isZhCn: language === 'zh-CN', isEnUs: language === 'en-US', change}
    }
  };
</script>
<style lang="less">
 @import url('./style.less');
</style>