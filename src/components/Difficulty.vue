<template>
	<div class="difficulty">
		<p class="difficulty__title">Choose difficulty:</p>
		<div class="difficulty__items-wrap">
			<button
				class="difficulty__item pointer"
				:class="{'active': difficulty === choosenDifficulty}"
				v-for="difficulty in difficulties"
				:key="difficulty"
				@click="chooseDifficulty(difficulty)"
			>
				{{difficulty}}
			</button>
		</div>
			
	</div>
</template>

<script>
export default {
	data() {
		return {
			difficulties: ['Easy', 'Medium', 'Hard'],
			choosenDifficulty: 'Medium' //Medium difficulty is default option
		}
	},
	methods: {
		chooseDifficulty(difficulty) {
			this.choosenDifficulty = difficulty;
			let dmgQuantifier;
			switch(difficulty) {
				case 'Easy':
					dmgQuantifier = 1.3;
					break;
				case 'Medium':
					dmgQuantifier = 1;
					break;
				case 'Hard':
					dmgQuantifier = 0.7;
					break;
			}
			this.$store.commit('setDifficulty', dmgQuantifier)
		}
	},
	mounted() {
		this.chooseDifficulty(this.choosenDifficulty)
	}
}
</script>
