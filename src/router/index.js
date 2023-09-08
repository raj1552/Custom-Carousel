import { createRouter, createWebHistory } from 'vue-router'
import SwipperView from '../views/Swipper.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Swipper',
      component: SwipperView
    },

  ]
})

export default router
