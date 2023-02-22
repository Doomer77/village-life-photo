import { createRouter, createWebHistory } from 'vue-router'
import MyHome from '../views/Home'
import MyGallery from '../views/Gallery'
import MyNews from '../views/News'

const routes = [
  {
    path: '/',
    name: 'home',
    component: MyHome,
  },
  {
    path: '/gallery',
    name: 'gallery',
    component: MyGallery,
  },
  {
    path: '/news',
    name: 'news',
    component: MyNews,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
