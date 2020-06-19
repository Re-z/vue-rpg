<template>
	<div class="overlay">
		<div class="popup">
			<p class="popup__title">{{getPopup.title}}</p>
			<div class="popup__img-wrap">
				<img :src="getPopup.img" alt="">
			</div>
			<div class="popup__text">
				{{getPopup.text}}
			</div>

			<button
				v-if="getPopup.type === 'drop'"
				class="btn"
				@click="handleDrop()">
				Continue
			</button>

			<button
				v-else
				class="btn"
				@click="resetGame()">
				Start again
			</button>

		</div>
	</div>
</template>

<script>
export default {
	methods: {
		resetGame() {
			this.$store.dispatch('resetGame');
		},
		handleDrop() {
			switch(this.getPopup.dropItem) {
				case('potion'):
					this.$store.commit('setHeroHealingPotions', 1);
					break;
				case('steroids'):
					this.$store.commit('updateDifficulty', 0.2);
					break;
				case('big tasty'):
					this.$store.commit('setHeroHealth', {health: 100, usedPotion: false});
					break;
				case('book'):
					this.$store.commit('hitMonsterByHalfHp');
					break;
			}

			this.$store.commit('setPopup', {}); //close and reset popup
		}
	},
	computed: {
		getPopup() {
			return this.$store.getters.getPopup;
		}
	}
}
</script>
