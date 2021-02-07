<template>
	<div class="difficulty">
		<p class="difficulty__title">Choose difficulty:</p>
		<div class="difficulty__items-wrap">
			<button
				class="difficulty__item pointer"
				:class="{'active': difficulty === choosenDifficulty}"
				v-for="difficulty in difficulties"
				:key="difficulty.label"
				@click="chooseDifficulty(difficulty)"
			>
				{{difficulty.label}}
			</button>
		</div>
	</div>
</template>

<script>
import {difficulties} from "./difficultySettings";
const defaultDifficulty = difficulties[1] //Medium difficulty is default option

export default {

	data() {
		return {
			difficulties,
			choosenDifficulty: defaultDifficulty
		}
	},
	methods: {
		chooseDifficulty(difficulty) {
			this.choosenDifficulty = difficulty;
			let dmgQuantifier = difficulty.dmgQuantifier;
			this.$store.commit('setDifficulty', dmgQuantifier)
		}
	},
	mounted() {
		this.chooseDifficulty(this.choosenDifficulty);
	},
}
</script>
