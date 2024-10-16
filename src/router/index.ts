import { createRouter, createWebHistory } from 'vue-router'
import AgencyView from '@/views/AgencyView.vue'
import CentralView from '@/views/CentralView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'agency',
      component: AgencyView,
    },
    {
      path: '/central',
      name: 'central',
      component: CentralView,
    },
  ],
})

export default router
