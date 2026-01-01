<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="app-container">
    <RouterView />
  </div>
</template>

<style lang="scss">
// 這裡可以先空著，或是寫一些全域樣式
.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>