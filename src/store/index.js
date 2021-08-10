import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    happy: true,
    sad: 'margin-top: 64px',
<<<<<<< HEAD
    sign: 0
=======
<<<<<<< HEAD
    sign: false
=======
    sign: 0
>>>>>>> 4c459fdae7c60fc622f8619bc15ea3114e6a433a
>>>>>>> c26342b11ec87f0d19fdc793f80b33e052dd1e0f
  },
  mutations: {
    sethappy (state, payload) {
      state.happy = payload[0]
      state.sad = payload[1]
    },
    setsign (state, payload) {
      state.sign = payload
    }
  },
  actions: {
    happy (context, payload) {
      context.commit('sethappy', payload)
    },
    membersign (context, payload) {
      context.commit('setsign', payload)
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
    },
    getmember (state) {
      return state.sign
    }
  }
})
