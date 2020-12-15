import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import 'amfe-flexible'
import util from './assets/js/util'

import { Swipe, SwipeItem, Toast } from 'vant';
import 'vant/lib/index.css';

Vue.use(Swipe).use(SwipeItem).use(Toast).use(axios)

Vue.config.productionTip = false

Vue.prototype.$http = axios
Vue.prototype.$util = util

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
