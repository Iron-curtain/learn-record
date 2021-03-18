import Vue from 'vue'
import Vuex from './myVuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    num: 0
  },
  getters: {
    getNum: (state) => {
      return state.num + 10
    }
  },
  mutations: {
    add (state, arg) {
      state.num = state.num + arg
    }
  },
  actions: {},
  modules: {}
})