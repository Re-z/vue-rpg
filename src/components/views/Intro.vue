<template>
	<div class="intro">
		<div class="intro__titles">
			<p class="intro__title">VUE</p>
			<p class="intro__subtitle">Turn based RPG</p>
		</div>
		<img class="intro__main-img" src="../../assets/img/orc.png" alt="">
		<div class="intro__btns-wrap">
			<button @click="changeScreenToNext">Start Game</button>
			<button>How to play (not available yet)</button>
			<button>Monstropedia (not available yet)</button>
		</div>
	</div>
</template>

<script>
// import mainImg from ""
export default {
	methods: {
		changeScreenToNext() {
			this.$store.commit('changeScreen', 'heroChoose')
		}
	},
	mounted() {
		
	}
}
</script>

<style lang="scss">
	
</style>