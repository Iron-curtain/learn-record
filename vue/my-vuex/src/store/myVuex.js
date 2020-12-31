class Store {
  constructor(options) {
    // this.state = options.state || {}
    this.vm = new Vue({
      data: {
        state: options.state
      }
    })
  }
}

let install = function(Vue) {
  Vue.mixin({
    beforeCreate() {
      if (this.$options && this.$options.store) {
        this.$store = this.$options.store
      } else {
        this.$store = this.$parent && this.$parent.$store
      }
    }
  })
}

let Vuex = {
  Store, 
  install
}

export default Vuex