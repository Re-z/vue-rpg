<template>
	<div class="difficulty">
			<p
				class="difficulty__item cup"
				:class="{'active': difficulty === choosenDifficulty}"
				v-for="difficulty in difficulties"
				:key="difficulty"
				@click="chooseDifficulty(difficulty)"
			>
				{{difficulty}}
			</p>
		</div>
</template>

<script>
export default {
	data() {
		return {
			difficulties: ['easy', 'medium', 'hard'],
			choosenDifficulty: 'easy' //medium difficulty is default option
		}
	},
	methods: {
		chooseDifficulty(difficulty) {
			this.choosenDifficulty = difficulty;
			let dmgQuantifier;
			switch(difficulty) {
				case 'easy':
					dmgQuantifier = 1.3;
					break;
				case 'medium':
					dmgQuantifier = 1;
					break;
				case 'hard':
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

<style lang="scss" scoped>
.difficulty {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	justify-content: center;
	grid-column-gap: 70px;
	background: lightgray;
	&__item {
		width: 30%;
		text-align: center;
		width: 100%;
		background: tomato;
		&.active {
			background: blue;
		}
	}
}
</style>