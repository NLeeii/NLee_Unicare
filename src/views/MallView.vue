<script setup>
import { ref } from 'vue'
import ProductCard from '../components/ProductCard.vue'
import fishOilImg from '@/assets/images/08.jpg' // 測試用
import TheSidebar from '../components/TheSidebar.vue'
</script>

<template>
  <TheSidebar/>
  <div class="test-area">
    <ProductCard 
    :image="fishOilImg" title="頂級深海rTG魚油" spec="60錠/瓶" :price="1280" tag="熱銷"/>

  </div>
</template>

<style lang="scss" scoped>
.mall-page {
  padding: 20px;

  h1 {
    color: $primaryDark;
    font-size: 30px;
  }

  .test-btn {
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 8px;
  }
}

.test-area {
  padding: 50px;
  margin-bottom: 100px;
  width: 400px; /* 先限制一個寬度，模擬它在網格裡的樣子 */
  margin: 0 auto;
  background-color: #f0f0f0; /* 給個背景色比較好分辨 */
}
</style>