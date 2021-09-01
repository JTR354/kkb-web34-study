import Vue from 'vue'
// import Vuex from 'vuex'
import Vuex from '../lib/kkb-vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment(state) {
      state.count++
    }
  },
  actions: {
    add({commit}) {
      setTimeout(() => {
        commit('increment')
      }, 1000)
    }
  },
  getters: {
    double(state) {
      return state.count * 2
    }
  }
})
