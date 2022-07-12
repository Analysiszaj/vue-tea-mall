import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/assets/css/common.css'
import '@/assets/js/lib-flexible-2.0/index'
import Lytab from 'ly-tab'

Vue.use(Lytab)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
