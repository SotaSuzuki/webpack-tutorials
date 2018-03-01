let uid = 0

export default {
  install: (Vue) => {
    Vue.mixin({
      created () {
        this.$_uid = uid
        uid++
      }
    })
  }
}
