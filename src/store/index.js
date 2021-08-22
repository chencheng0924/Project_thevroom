import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    happy: true,
    sad: 'margin-top: 64px',
    sign: 0,
    shop: [],
    cart: false,
    bid: [],
    checkoutcardata: []
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
    },
    shoplist (state, payload) {
      state.shop = payload
    },
    shopcart (state, payload) {
      state.cart = payload
      // console.log(payload)
    },
    bidrecord (state, payload) {
      // console.log(state.bid)
      state.bid = payload
      // if (state.bid.length > 0) {
      //   state.bid.push(payload)
      // }
    },
    bidrecordone (state, payload) {
      state.bid.unshift(payload)
    },
    checkout (state, payload) {
      state.checkoutcardata = []
      state.checkoutcardata.push(payload)
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
    },
    shoplist (context, payload) {
      context.commit('shoplist', payload)
    },
    shopcart (context, payload) {
      context.commit('shopcart', payload)
    },
    bidrecord (context, payload) {
      context.commit('bidrecord', payload)
    },
    bidrecordone (context, payload) {
      console.log('dddddddd', payload)
      context.commit('bidrecordone', payload)
    },
    checkout (context, payload) {
      context.commit('checkout', payload)
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
    },
    getshoplist (state) {
      return state.shop
    },
    getcart (state) {
      return state.cart
    },
    getbid (state) {
      console.log(state.bid)
      return state.bid
    },
    getcheckoutcardata (state) {
      return state.checkoutcardata
    }
  }
})
