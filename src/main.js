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
import ButtonShare from './components/layout/ButtonNews'
import ButtonSubmit from './components/layout/ButtonSubmit'
import VueObserVisibility from 'vue-observe-visibility'
import UploadImage from './components/UploadImage.vue'


Vue.use(VueObserVisibility)
Vue.config.productionTip = false
Vue.use(VueFullPage)

Vue.component('the-headline', TheHeadline)
Vue.component('button-news', ButtonShare)
Vue.component('button-submit', ButtonSubmit)
Vue.component('upload-image', UploadImage)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
