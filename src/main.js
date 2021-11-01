import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import VueNaverMap from 'vue-naver-map'
import "@/fontAwesomeIcon.js"; // fontAwesomeIcon.js 불러옴


Vue.use(VueNaverMap, {
  key: "r9kpu6eptc"
  ,
  libraries: ['geocoder','Web Dynamic Map'] /* type: Array */
}
)

Vue.config.productionTip = false
Vue.prototype.$http = axios;

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
