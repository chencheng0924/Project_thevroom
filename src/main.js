import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'fullpage.js/vendors/scrolloverflow'
import VueFullPage from 'vue-fullpage.js'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import vuetify from './plugins/vuetify'
import TheHeadline from './components/TheHeadline.vue'

Vue.config.productionTip = false
Vue.use(VueFullPage)

Vue.component('the-headline', TheHeadline)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
