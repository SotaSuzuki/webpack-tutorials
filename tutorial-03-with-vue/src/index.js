import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false // Vue の tips ログが消える

const vm = new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
