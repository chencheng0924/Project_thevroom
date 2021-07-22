import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import CompareCard from '../components/layout/CompareCard.vue'
import NewDriver from '../components/NewDriver.vue'
import Forum from '../components/Forum.vue'
import ForumPage from '../components/ForumPage.vue'
import IssuePage from '../components/pages/IssuePage.vue'
import UploadImage from '../components/UploadImage.vue'
import ReportDialogs from '../components/layout/ReportDialogs.vue'
import CarCheckout from '../components/CarCheckout.vue'
import AddProduct from '../components/AddProduct.vue'
import AuctionOverview from '../components/pages/AuctionOverview.vue'
import Accessories from '../components/Accessories.vue'

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
    path: '/newdriver',
    name: 'NewDriver',
    component: NewDriver
  },
  {
    path: '/forum',
    name: 'Forum',
    component: Forum
  },
  {
    path: '/forumPage',
    name: 'ForumPage',
    component: ForumPage
  },
  {
    path: '/issuePage',
    name: 'IssuePage',
    component: IssuePage
  },
  {
    path: '/uploadimage',
    name: 'UploadImage',
    component: UploadImage
  },
  {
    path: '/reportdialogs',
    name: 'ReportDialogs',
    component: ReportDialogs
  },
  {
    path: '/carcheckout',
    name: 'CarCheckout',
    component: CarCheckout
  },
  {
    path: '/addproduct',
    name: 'AddProduct',
    component: AddProduct
  },
  {
    path: '/auctionoverview',
    name: 'AuctionOverview',
    component: AuctionOverview
  },
  {
    path: '/accessories',
    name: 'Accessories',
    component: Accessories
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
