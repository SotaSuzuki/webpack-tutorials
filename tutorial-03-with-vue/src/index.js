import Vue from 'vue'
import App from './App'
import uidPlugin from './plugins/uid'
import sayHelloPlugin from './plugins/sayHello'

Vue.config.productionTip = false // Vue の tips ログが消える
Vue.use(uidPlugin)
Vue.use(sayHelloPlugin)

const vm = new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
