<!-- 首页 -->
<template>
  <div>哈哈</div>
  <Button text="测试1" type="primary" size="large"/>
</template>

<script lang='ts'>
import { reactive,toRefs,onBeforeMount,onMounted } from 'vue'
import { Button } from 'vant';
interface DataProps {}
export default {
    name: 'home_page',
    components: {
        Button
    },
    setup() {
        console.log('1-开始创建组件-setup')
        const data: DataProps = reactive({

        })
        onBeforeMount(() => {
            console.log('2.组件挂载页面之前执行----onBeforeMount')
        })
        onMounted(() => {
            console.log('3.-组件挂载到页面之后执行-------onMounted')
        })
        const refData = toRefs(data);
        return {
            ...refData,
        }

    }
  };
</script>
<style scoped>
@import url('./style.less');
</style>