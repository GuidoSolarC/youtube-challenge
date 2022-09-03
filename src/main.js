import Vue from 'vue'
import App from './App'

import store from './store'
// https://axios-http.com
import axios from 'axios'
import VueAxios from 'vue-axios'

// https://getbootstrap.com
import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap-icons/font/bootstrap-icons.css'

// Custom css
import "./assets/css/main.css"
// https://github.com/anteriovieira/vue-youtube (Wrapper de YoutubeAPI)
import VueYoutube from 'vue-youtube'
// https://github.com/sj82516/vue-alertify (Wrapper de alertify)
import VueAlertify from 'vue-alertify';

Vue.config.productionTip = false

Vue.use(VueAxios, axios)
Vue.use(VueYoutube)
Vue.use(VueAlertify)

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')