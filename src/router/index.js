import { createRouter, createWebHistory } from 'vue-router'
import MallView from '../views/MallView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'mall',
      component: MallView,
    },
  ],
})

export default router
