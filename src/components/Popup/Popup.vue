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
				v-if="getPopup.type === dropPopup"
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
import {dropConstants} from "@/js/drop";

export default {
  data() {
    return {
      dropPopup: dropConstants.TYPE_DROP
    }
  },
	methods: {
		resetGame() {
			this.$store.dispatch('resetGame');
		},

		handleDrop() {
			switch(this.getPopup.dropItem) {
				case(dropConstants.POTION):
					this.$store.commit('setHeroHealingPotions', 1);
					break;
				case(dropConstants.STEROIDS):
					this.$store.commit('updateDifficulty', 0.2);
					break;
				case(dropConstants.BIG_TASTY_MENU):
					this.$store.commit('setHeroHealth', {health: 100, usedPotion: false});
					break;
				case(dropConstants.BOOK):
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

<style lang="scss" scoped>
@import "@/assets/scss/helpers/variables.scss";
@import "@/assets/scss/helpers/mixins.scss";

.popup {
  width: 100%;
  margin: 0 auto;
  max-width: 500px;
  min-height: auto;
  padding: 40px 20px;
  background: $beige;
  display: grid;
  grid-gap: 40px;
  justify-content: center;
  text-align: center;
  @include gradientBorder(10px, $darkteal, $lightteal);
  &__title {
    font-size: $font-l;
    text-transform: uppercase;
    color: $darkteal;
  }
}
</style>