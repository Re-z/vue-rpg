import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    screen: 'heroChoose', //intro, heroChoose, battle
    hero: {
      // type: 'Warrior',
      // avatar: warriorImg,
      // minDmg: 5,
      // maxDmg: 15,
      // healthPoints: 100,
      // healingPotions: 1,
      // currentHealth: 100
    },
    monster: {
      //добавить объект монстра в изначальный стейт
    },
    currentTurn: {
      number: 1,
      dmgToHero: '',
      dmgToMonster: '',
      //is using for loggin speial actions like healing, monster die, etc
      specialHeroAction: '', 
      specialMonsterAction: ''
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
      state.currentTurn.number++;
    },
    setDmgToHero(state, dmg) {
      state.currentTurn.dmgToHero = dmg;
      state.currentTurn.specialMonsterAction = '' //monster have not done anything special
      state.hero.currentHealth -= dmg;
    },
    setDmgToMonster(state, dmg) {
      state.currentTurn.dmgToMonster = dmg;
      state.currentTurn.specialHeroAction = ''; //hero havent done anything special at this turn
      state.monster.currentHealth -= dmg;
    },
    setSpecialTurnLog(state, specialLog) {
      state.currentTurn.specialHeroAction = specialLog.specialHeroAction;
      state.currentTurn.specialMonsterAction = specialLog.specialMonsterAction;
    }

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
