<script setup>
import { ref } from 'vue'
import ProductCard from '../components/ProductCard.vue'
import fishOilImg from '@/assets/images/08.jpg' // 測試用
import TheSidebar from '../components/TheSidebar.vue'
</script>

<template>
  <div class="mall_page">
    <TheSidebar/>
  <div class="test_area">
    <ProductCard 
    :image="fishOilImg" title="頂級深海rTG魚油" spec="60錠/瓶" :price="1280" tag="熱銷"/>

  </div>
  </div>
</template>

<style lang="scss" scoped>
.mall_page {
background-color: $bgBody;
}

.test_area {
  padding: 50px;
  margin-bottom: 100px;
  width: 400px; /* 先限制一個寬度，模擬它在網格裡的樣子 */
  margin: 0 auto;
  background-color: #f0f0f0; /* 給個背景色比較好分辨 */
}
</style>