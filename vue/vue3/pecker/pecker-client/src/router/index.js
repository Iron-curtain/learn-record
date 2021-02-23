import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/topic',
    component: () => import('@/views/Topic.vue')
  },
  {
    path: '/user',
    component: () => import('@/views/User.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
