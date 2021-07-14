import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import CompareCard from '../components/layout/CompareCard.vue'
import Forum from '../components/Forum.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/comparecard',
    name: 'CompareCard',
    component: CompareCard
  },
  {
    path: '/forum',
    name: 'Forum',
    component: Forum
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
