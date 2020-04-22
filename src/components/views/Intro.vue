<template>
	<div class="intro">
		<div class="intro__titles">
			<h1 class="intro__title">VUE</h1>
			<h2 class="intro__subtitle">Turn based RPG</h2>
		</div>
		<img class="intro__main-img" src="@/assets/img/orc.png" alt="">
		<div class="intro__btns-wrap">
			<button @click="changeScreenToNext(heroChooseScreen)">Start Game</button>
			<button @click="changeScreenToNext(howToPlayScreen)">How to play</button>
			<button @click="changeScreenToNext(monstropediaScreen)">Monstropedia</button>
		</div>
	</div>
</template>

<script>
import * as constants from '@/js/helpers/constants'

export default {
	data() {
		return {
			heroChooseScreen: constants.HEROCHOOSE_SCREEN,
			howToPlayScreen: constants.HOWTOPLAY_SCREEN,
			monstropediaScreen: constants.MONSTROPEDIA_SCREEN
		}
	},
	methods: {
		changeScreenToNext(screenName) {
			this.$store.commit('changeScreen', screenName)
		}
	},
}
</script>
