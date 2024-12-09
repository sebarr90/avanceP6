import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AdminView from '@/views/AdminView.vue'
import NotFound from '@/views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/opiniones/:gameName',
    name: 'OpinionesView',
    props: true,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/OpinionesView.vue')
  },
  {
    path:'/admin/:gameName',
    name: AdminView,
    component: AdminView,
    props: true,
  },
  {
    path: '/:pathMatch(.*)*',
    name: NotFound,
    component: NotFound,
  }
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
