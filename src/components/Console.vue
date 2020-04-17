<template>
	<div 
		ref="console"
		class="console"
		@click="focusInputField"
		@keydown.enter="handleCheet">

		<p class="console__item">Anton incorporated 2020, All rights reserved.</p>
		<p class="console__item">Console allows you to configure game and get some benefits.</p>
		<p class="console__item">But be aware, that cheats are bad, mkay? Karma police will find you.</p>
		<p class="console__item">Even so you want to use cheat, just type it to console.</p>
		<p class="console__item">Avaliable cheats:</p>
		<div class="console__box">
			<p
				v-for="cheat in cheats"
				:key="cheat.password">

				<span v-colorize>{{cheat.password | toUpperCase}}</span>
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
import '../js/helpers/customDirectives'
import '../js/helpers/customFilters'

export default {
	data() {
		return {
			log: '',
			inputValue: '',
			cheats: [
				{
					password: 'iddqd',
					description: 'Set healing potions to 100'
				}
			],
		}
	},
	methods: {
		focusInputField() {
			this.$refs.input.focus();
		},
		handleConsoleLogClear(str) {
			this.log = str;
			this.inputValue = ''
		},
		handleCheet() {
			let inputValueLowerCase = this.inputValue.toLowerCase();
			switch(inputValueLowerCase) {
				case 'iddqd':
					this.$store.commit('setHeroHealingPotions', 100);
					this.handleConsoleLogClear('Potions cheat enabled');
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