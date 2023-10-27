<script setup>
import { RouterView } from 'vue-router'
import { BackTop, Icon } from 'vant'
</script>

<template>
  <!-- <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/order">About</RouterLink>
      </nav>
    </div>
  </header> -->

  <RouterView />
  <back-top> <icon name="back-top" /> </back-top>
</template>

<style scoped lang="less">
</style>
