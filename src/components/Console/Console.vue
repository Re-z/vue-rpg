<template>
	<div 
		ref="console"
		class="console"
		@click="focusInputField"
		@keydown.enter="handleCheat">

		<p v-colorize class="console__item">Anton incorporated 2020, All rights reserved.</p>
		<p class="console__item">Console allows you to configure game and get some benefits.</p>
		<p class="console__item">But be aware, that cheats are bad, mkay? Karma police will find you.</p>
		<p class="console__item">Even so you want to use cheat, just type it to console.</p>
		<p class="console__item">If you want to close console, type tilda again (~).</p>
		<p class="console__item">Avaliable cheats:</p>
		<div class="console__box">
			<p
				v-for="cheat in cheats"
				:key="cheat.password">

				<span v-colorize>{{cheat.code | toUpperCase}}</span>
				<span> - {{cheat.description}}</span>
			</p>
		</div>
		
		<div class="console__box">
			<p v-if="log" class="console__item console__item_log">{{log}}</p>

			<input 
				autofocus
				ref="input"
				v-model="inputValue"
				class="console__input">
		</div>
	</div>
</template>

<script>
import {dmgCheat, healCheat} from './consoleSettings'

export default {
	data() {
		return {
			log: '',
			inputValue: '',
			cheats: [dmgCheat, healCheat]
		}
	},
	methods: {
		focusInputField() {
			this.$refs.input.focus();
		},
		handleConsoleLogClear(str) {
			this.log = str;
			this.inputValue = '';
		},
    handleCheat() {
			let inputValueLowerCase = this.inputValue.toLowerCase();
			switch(inputValueLowerCase) {
				case healCheat.code:
					this.$store.commit('setHeroHealingPotions', 10);
					this.handleConsoleLogClear(healCheat.afterUse);
					break;
				case dmgCheat.code:
					this.$store.commit('setDifficulty', 5);
					this.handleConsoleLogClear(dmgCheat.afterUse);
					break;
				default:
					this.handleConsoleLogClear('No executable scripts found');
					break;
			}
		}	
	},
	mounted() {
		// is used to avoid adding ~ to input field
		setTimeout(() => {
			this.$refs.input.focus();
		},0)
	},
}
</script>

<style lang="scss" scoped>
.console {
  color: white;
  padding: 40px 20px 0 20px;
  background: black;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  //before element is used here in order to
  //prevent clicking outside console
  //and keep focus on input
  &:before {
    display: block;
    content: "";
    position: absolute;
    width: 100%;
    left: 0;
    top: 0;
    background: transparent;
    height: 100vh;
    z-index: -1;
  }
  &__item {
    color: white;
    margin-bottom: 10px;
    &_log {
      margin-bottom: 40px;
    }
  }
  &__box {
    margin-top: 40px;
  }
  &__input {
    display: block;
    width: 100%;
    caret-color: white;
    background: transparent;
    border: 0;
    outline: 0;
    color: white;
  }
}
</style>