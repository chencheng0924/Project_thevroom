import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    happy: true
  },
  mutations: {
    sethappy (state, payload) {
      state.happy = payload
    }
  },
  actions: {
    happy (context, payload) {
      context.commit('sethappy', payload)
    }
  },
  modules: {
  },
  getters: {
    gethappy (state) {
      return state.happy
    }
  }
})
