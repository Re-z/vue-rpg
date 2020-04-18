<template>
	<div class="intro">
		<div class="intro__titles">
			<h1 class="intro__title">VUE</h1>
			<h2 class="intro__subtitle">Turn based RPG</h2>
		</div>
		<img class="intro__main-img" src="@/assets/img/orc.png" alt="">
		<div class="intro__btns-wrap">
			<button @click="changeScreenToNext('heroChoose')">Start Game</button>
			<button>How to play (not available yet)</button>
			<button @click="changeScreenToNext('monstropedia')">Monstropedia</button>
		</div>
	</div>
</template>

<script>

export default {
	methods: {
		changeScreenToNext(screenName) {
			this.$store.commit('changeScreen', screenName)
		}
	},
}
</script>
