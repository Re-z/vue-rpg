import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    
    screen: 'intro', //intro, heroChoose, battle
    hero: {},
    monster: {},
    currentTurn: {
      number: 0,
      dmgToHero: '',
      dmgToMonster: ''
    }
    // currentMonsterIndex: 0
  },
  mutations: {
    changeScreen(state, screen) {
      state.screen = screen;
    },
    setHero(state,hero) {
      state.hero = hero;
    },
    setHeroHealth(state, health) {
      state.hero.currentHealth += health;
      state.hero.healingPotions -= 1; //remove used potion
      //after healing, if current health is more then heroe`s maximum,
			//set health to maximum
      if (state.hero.currentHealth > state.hero.healthPoints) {
        state.hero.currentHealth = state.hero.healthPoints;
      }
    },
    setMonster(state,monster) {
      state.monster = monster;
    },
    increaseTurn(state) {
      state.currentTurn.number++
    },
    setDmgToHero(state, dmg) {
      state.currentTurn.dmgToHero = dmg;
      state.hero.currentHealth -= dmg;
    },
    setDmgToMonster(state, dmg) {
      state.currentTurn.dmgToMonster = dmg;
      state.monster.currentHealth -= dmg;
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
    getHero(state) {
      return state.hero
    },
    getMonster(state) {
      return state.monster
    },
    
    getCurrentTurn(state) {
      return state.currentTurn
    },
  }
})
