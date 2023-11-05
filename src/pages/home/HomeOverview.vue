
<script setup>
import SelfTabbar from '@/components/tabbar/SelfTabbar.vue'
</script>


<template>
  <div class="home_overview">
    <RouterView />
    <self-tabbar />
  </div>
</template>
    
<style scoped>
.home_overview {
  background: #f3f4f8;
}
</style>