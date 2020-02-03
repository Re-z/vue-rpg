import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    
    screen: 'intro', //intro, heroChoose, battle
    hero: {},
    monster: {},
    // currentMonsterIndex: 0
  },
  mutations: {
    changeScreen(state, screen) {
      state.screen = screen
    },
    setHero(state,hero) {
      state.hero = hero
    },
    setMonster(state,monster) {
      state.monster = monster
    },
  },
  actions: {
  },
  modules: {
  },
  getters: {
    getCurrentScreen(state) {
      return state.screen
    },
    bla() {
      return 14
    },
    getHero(state) {
      return state.hero
    }
  }
})
