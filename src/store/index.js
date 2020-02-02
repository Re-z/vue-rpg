import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    screen: 'intro'
    //intro, heroChoose,
  },
  mutations: {
    changeScreen(state, screen) {
      state.screen = screen
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    getCurrentScreen(state) {
      return state.screen
    }
  }
})
