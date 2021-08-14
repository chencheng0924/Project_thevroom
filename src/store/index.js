import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    happy: true,
    sad: 'margin-top: 64px',
    sign: 0
  },
  mutations: {
    sethappy (state, payload) {
      state.happy = payload[0]
      state.sad = payload[1]
    },
    setsign (state, payload) {
      state.sign = payload
    },
    setkeep (state, payload) {
      state.sign = payload
    }
  },
  actions: {
    happy (context, payload) {
      context.commit('sethappy', payload)
    },
    membersign (context, payload) {
      context.commit('setsign', payload)
    },
    keepsign (context, payload) {
      context.commit('setkeep', payload)
    }
  },
  modules: {
  },
  getters: {
    gethappy (state) {
      return state.happy
    },
    getsad (state) {
      // console.log(state.sad)
      return state.sad
    },
    getmember (state) {
      return state.sign
    }
  }
})
