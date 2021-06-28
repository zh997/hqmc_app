<!-- NavigationBarPage -->
<template>
  <div>
     <HomePage />
  </div>
</template>

<script lang='ts'>
import { Options, Vue } from 'vue-class-component';
import HomePage from '@/pages/home_page/index.vue';
import { onMounted } from '@vue/runtime-core';

@Options({
    components: {
      HomePage
    }
})
export default class TabbarPage extends Vue{
  setup(){
    onMounted(()=>{

    })
  }
}
</script>
<style scoped>
</style>