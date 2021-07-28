import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    happy: true,
    sad: 'margin-top: 64px'
  },
  mutations: {
    sethappy (state, payload) {
      state.happy = payload[0]
      state.sad = payload[1]
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
    },
    getsad (state) {
      console.log(state.sad)
      return state.sad
    }
  }
})
