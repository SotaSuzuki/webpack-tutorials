export default {
  install: (Vue) => {
    Vue.sayHello = () => {
      console.log('Hello world at Global Methods!')
    },

    Vue.prototype.$sayHello = () => {
      console.log('Hello world!')
    }
  }
}
