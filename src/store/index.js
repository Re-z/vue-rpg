import Vue from 'vue'
import Vuex from 'vuex'
import * as constants from "@/js/helpers/constants";


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    options: {
      dmgQuantifier: 0,//based on difficulty level
    },
    log: {
      player: '',
      monster: '',
    },
    consoleVisible: false,
    soundOptions: {
      soundToPlay: '',
    },
    screen: constants.INTRO_SCREEN, //intro, heroChoose, battle, monstropedia
    hero: {},
    monster: {},
    popup: {
      //data is getting from popupSettings.js
      isVisible: false,
      type: '',
      title: '',
      img: '',
      text: '',
    },
    currentRound: 1,
    currentTurn: {
      id: 0,
      dmgToHero: '',
      dmgToMonster: '',
    }
  },
  mutations: {
    changeScreen(state, screen) {
      state.screen = screen;
    },
    setDifficulty(state, dmgQuantifier) {
      state.options.dmgQuantifier = dmgQuantifier
    },
    updateDifficulty(state, dmgQuantifier) {
      state.options.dmgQuantifier += dmgQuantifier
    },
    setHero(state,hero) {
      state.hero = hero;
    },
    setHeroHealth(state, {health, usedPotion}) {
      state.hero.currentHealth += health;
      if(usedPotion) {
        state.hero.heal.potions -= 1; //remove used potion
        //after healing, 
      }
      // if current health is more then heroe`s maximum,
			//set health to maximum
      if (state.hero.currentHealth > state.hero.healthPoints) {
        state.hero.currentHealth = state.hero.healthPoints;
      }
    },
    setHeroHealingPotions(state, potionsNumber) {
      state.hero.heal.potions += potionsNumber;
    },
    setMonster(state,monster) {
      state.monster = monster;
    },
    setPopup(state, options) {
      state.popup = options;
    },
    resetGameSettings(state) {
      state.currentRound = 1;
      state.currentTurn.id = 0;
      state.screen = 'intro';
    },
    increaseTurn(state) {
      state.currentTurn.id++;
    },
    increaseRound(state) {
      state.currentRound++;
    },
    setDmgToHero(state, dmg) {
      state.currentTurn.dmgToHero = dmg;
      state.hero.currentHealth -= dmg;
    },
    setDmgToMonster(state, dmg) {
      state.currentTurn.dmgToMonster = dmg;
      state.monster.currentHealth -= dmg;
    },
    // used when player found cursed book
    hitMonsterByHalfHp(state) {
      state.monster.currentHealth -= state.monster.currentHealth/2
    },
    setSoundToPlay(state,sound) {
      state.soundOptions.soundToPlay = sound;
    },
    setPlayerLog(state, logMsg) {
      state.log.player = logMsg;
    },
    setMonsterLog(state, logMsg) {
      state.log.monster = logMsg;
    },
    setConsole(state, consoleState) {
      state.consoleVisible = consoleState;
    }

  },
  actions: {
    resetGame({commit}) {
      commit('resetGameSettings');
      commit('setMonster', {});
      commit('setHero', {});
      commit('setPopup', {});
      commit('setPlayerLog', '');
      commit('setMonsterLog', '');
    }
  },
  modules: {},

  //think about changing map getters to map state
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
    getPopup(state) {
      return state.popup;
    },
    getCurrentTurn(state) {
      return state.currentTurn
    },
    getCurrentRound(state) {
      return state.currentRound
    },
    getOptions(state) {
      return state.options
    },
    getSoundOptions(state) {
      return state.soundOptions;
    },
    getLog(state) {
      return state.log
    },
    getConsole(state) {
      return state.consoleVisible
    }
  }
})
