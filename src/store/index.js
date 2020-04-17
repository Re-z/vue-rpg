import Vue from 'vue'
import Vuex from 'vuex'

import startBattleSound from '../assets/sound/roundone.mp3'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    options: {
      dmgQuantifier: '',//based on difficulty level
    },
    log: {
      player: '',
      monster: '',
    },
    consoleVisible: true,
    soundToPlay: startBattleSound,
    screen: 'heroChoose', //intro, heroChoose, battle
    hero: {},
    monster: {},
    popup: {
      //data is getting from popupOptions.js
      isVisible: false,
      type: '',
      title: '',
      img: '',
      text: ''      
    },
    currentRound: 1,
    currentTurn: {
      id: 0,
      dmgToHero: '',
      dmgToMonster: '',
    }
    // currentMonsterIndex: 0
  },
  mutations: {
    changeScreen(state, screen) {
      state.screen = screen;
    },
    setDifficulty(state, dmgQuantifier) {
      state.options.dmgQuantifier = dmgQuantifier
    },
    setHero(state,hero) {
      state.hero = hero;
    },
    setHeroHealth(state, health) {
      state.hero.currentHealth += health;
      state.hero.heal.potions -= 1; //remove used potion
      //after healing, if current health is more then heroe`s maximum,
			//set health to maximum
      if (state.hero.currentHealth > state.hero.healthPoints) {
        state.hero.currentHealth = state.hero.healthPoints;
      }
    },
    setHeroHealingPotions(state, potionsNumber) {
      state.hero.heal.potions = potionsNumber;
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
      state.popup.isVisible = false;
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
  
    setSoundToPlay(state,sound) {
      state.soundToPlay = sound
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
      commit('setSoundToPlay', startBattleSound);
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
    getPopup(state) {
      return state.popup
    },
    getOptions(state) {
      return state.options
    },
    getSoundToPlay(state) {
      return state.soundToPlay;
    },
    getLog(state) {
      return state.log
    },
    getConsole(state) {
      return state.consoleVisible
    }
  }
})
