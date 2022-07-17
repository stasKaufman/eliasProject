import { createRouter, createWebHistory } from 'vue-router';
import FlowerPage from '../pages/FlowerPage.vue';
import FlowerList from '../pages/FlowerList.vue';
import LogIn from '../pages/LogIn.vue';

const routes = [
  {
    path: '/',
    redirect: '/flower-list',
  },
  {
    path: '/flower-page/:id',
    name: 'FlowerPage',
    component: FlowerPage
  },
  {
    path: '/flower-list',
    name: 'FlowerList',
    component: FlowerList
  },
  {
    path: '/login',
    name: 'LogIn',
    component: LogIn
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
