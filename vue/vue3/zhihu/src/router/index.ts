import { createRouter, createWebHistory } from 'vue-router'
import Home from '../view/Home.vue'
const routerHistory = createWebHistory()
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../view/Login.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../view/Register.vue')
  }
]

const router = createRouter({
  history: routerHistory,
  routes
})

export default router
