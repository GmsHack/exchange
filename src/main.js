import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import '@/assets/css/tailwind.css' // el @ nos permite dar el directorio raiz es como el ~ en la termina
import Chartkick from 'vue-chartkick'
import Chart from 'chart.js'
import { VueSpinners } from '@saeris/vue-spinners'
import router from '@/router/'
import { dollarFilter, percentFilter } from '@/filter'

Vue.use(VueSpinners)
Vue.use(Chartkick.use(Chart))
Vue.config.productionTip = false
Vue.filter('dollar', dollarFilter)
Vue.filter('percent', percentFilter)

new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')
