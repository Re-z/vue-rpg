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
			class="btn"
				@click="resetGame">
				Start again
			</button>

		</div>
	</div>
</template>

<script>
export default {
	methods: {
		resetGame() {
			this.$store.dispatch('resetGame')
		}
	},
	computed: {
		getPopup() {
			return this.$store.getters.getPopup
		}
	}
}
</script>
