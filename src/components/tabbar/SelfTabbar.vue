
<script setup>
import { ref, watch } from 'vue'
import { Tabbar, TabbarItem } from 'vant'
import router from '@/router'

const active = ref(0)
watch(active, (newValue) => {
  let paths = ['/', '/order', '/strategy', '/mine']
  router.push(`${paths[newValue]}`)
})
</script>


<template>
  <div>
    <tabbar v-model="active">
      <tabbar-item icon="home-o">首页</tabbar-item>
      <tabbar-item icon="records-o">订单</tabbar-item>
      <tabbar-item icon="location-o">攻略</tabbar-item>
      <tabbar-item icon="user-circle-o">我的</tabbar-item>
    </tabbar>
  </div>
</template>
    
<style scoped>
</style>