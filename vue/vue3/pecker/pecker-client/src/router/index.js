import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/topic',
    component: () => import('@/views/Topic.vue')
  },
  {
    path: '/user',
    component: () => import('@/views/User.vue')
  },
  {
    path: '/login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/homepage',
    component: () => import('@/views/HomePage.vue')
  },
  {
    path: '/changeinfo',
    component: () => import('@/views/InfoChange.vue')
  },
  {
    path: '/changeavatar',
    component: () => import('@/views/AvatarChange.vue')
  },
  {
    path: '/changebackground',
    component: () => import('@/views/BackgroundChange.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
