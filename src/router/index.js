import {
  createRouter,
  createWebHistory
} from 'vue-router'

import Home from '@/pages/Home.vue';

const router = createRouter({
  history: createWebHistory(
    import.meta.env.BASE_URL),
  routes: [{
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('@/pages/About.vue')
    },

  ]
})

export default router