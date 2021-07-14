import { Ref, ref } from 'vue';
import { IGlobalHooks } from './type';

/** 全局状态 */
export const isShowTabbar: Ref = ref(false);
export const tabbarIndex: Ref = ref(0);


/** 维护全局状态 */
export const useGlobalHooks = (): IGlobalHooks => {
   
   /** 控制tabbar显示隐藏 */
   const onShowTabbar = (val: boolean, index?: number) => {
      console.log(val);
      isShowTabbar.value = val;
      if (index !== undefined && typeof index === 'number' ) tabbarIndex.value = index;
   }

   /** 返回状态 */
   return { isShowTabbar, tabbarIndex, onShowTabbar };

}