import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import CompareCard from '../pages/CompareCard.vue'
import NewDriver from '../pages/NewDriver.vue'
import Forum from '../pages/Forum.vue'
import ForumPage from '../pages/ForumPage.vue'
import IssuePage from '../pages/IssuePage.vue'
import UploadImage from '../components/interactive/UploadImage.vue'
import ReportDialogs from '../components/interactive/ReportDialogs.vue'
import CarCheckout from '../pages/CarCheckout.vue'
import AddProduct from '../pages/AddProduct.vue'
import AuctionOverview from '../pages/AuctionOverview.vue'
import CompareInside from '../pages/CompareInside.vue'
import MemberSide from '../components/MemberSide.vue'
import Accessories from '../pages/Accessories.vue'
import SingleAuction from '../pages/SingleAuction.vue'
import Shoppingcar from '../pages/ShoppingCar.vue'
import SignUp from '../pages/SignUp.vue'
import SignIn from '../pages/SignIn.vue'
import MemberData from '../components/MemberData.vue'
import MemberAuction from '../components/MemberAuction.vue'

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
    path: '/compareinside',
    name: 'CompareInside',
    component: CompareInside
  },
  {
    path: '/memberside',
    name: 'MemberSide',
    component: MemberSide
  },
  {
    path: '/accessories',
    name: 'Accessories',
    component: Accessories
  },
  {
    path: '/singleauction',
    name: 'SingleAuction',
    component: SingleAuction
  },
  {
    path: '/shoppingcar',
    name: 'Shoppingcar',
    component: Shoppingcar
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: SignIn
  },
  {
    path: '/memberdata',
    name: 'MemberData',
    component: MemberData
  },
  {
    path: '/memberauction',
    name: 'MemberAuction',
    component: MemberAuction
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
