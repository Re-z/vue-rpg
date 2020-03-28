<template>
	<div class="overlay">
		<div class="popup">
			<h2>You died :(</h2>

			<img src="../assets/img/skull.png" alt="">
			<div class="popup__text">
				bla bla bla
			</div>
			<button
				@click="resetAll"
			>
				Start again
			</button>
		</div>
	</div>
</template>

<script>
export default {
	methods: {
		resetAll() {
			this.$store.commit('resetGame')
		}
	}
}
</script>

<style lang="scss">
.overlay {
	position: fixed;
	display: grid;
	align-items: start;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: rgba(0,0,0,.7);
	height: 100vh;
	padding: 200px 0;
}
.popup {
	width: 100%;
	margin: 0 auto;
	max-width: 400px;
	min-height: auto;
	padding: 20px;
	background: tomato;
	display: grid;
	grid-gap: 20px;
	justify-content: center

}
</style>