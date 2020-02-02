import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    
    screen: 'intro', //intro, heroChoose, battle
    chosenHero: {}
  },
  mutations: {
    changeScreen(state, screen) {
      state.screen = screen
    },
    setChosenHero(state,chosenHero) {
      state.chosenHero = chosenHero
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
