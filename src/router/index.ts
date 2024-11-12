import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/lesson1',
      name: 'lesson1',
      component: () => import('../views/Lesson1.vue'),
    },
    {
      path: '/lesson2',
      name: 'lesson2',
      component: () => import('../views/Lesson2.vue'),
    },
    {
      path: '/lesson3',
      name: 'lesson3',
      component: () => import('../views/Lesson3.vue'),
    },
    {
      path: '/lesson4',
      name: 'lesson4',
      component: () => import('../views/Lesson4.vue'),
    },
  ],
})

export default router
