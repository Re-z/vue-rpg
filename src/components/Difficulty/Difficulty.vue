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
			this.$store.commit('setDifficulty', difficulty.dmgQuantifier)
		}
	},
	mounted() {
		this.chooseDifficulty(this.choosenDifficulty);
	},
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/helpers/variables.scss';

.difficulty {
  margin: 20px 0;
  &__title {
     margin-bottom: 10px;
   }
  &__items-wrap {
     display: flex;
     justify-content: space-between;
   }
  &__item {
     width: 30%;
     padding: 5px 10px;
  &.active {
     background: $darkteal;
     color: $beige;
   }
  }
}
</style>