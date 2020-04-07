<template>
	<div class="main-wrap">
		<div class="main-wrap__bg"
			:style="{backgroundImage: backgroundImg}"
		></div>

		<div class="container">
			<app-sound/>

			<app-intro v-if="getCurrentScreen === 'intro'"></app-intro>
			<app-hero-choose v-if="getCurrentScreen === 'heroChoose'"></app-hero-choose>
			<app-battle v-if="getCurrentScreen === 'battle'"></app-battle>
		</div>


	</div>
</template>

<script>
import { mapGetters } from "vuex";
import defaultBg from './assets/img/bg/bg.jpg';

export default {
	computed: {
		...mapGetters(["getCurrentScreen", "getMonster"]),
		backgroundImg() {
			if(this.getMonster.backgroundImg) {
				return `url(${this.getMonster.backgroundImg})`
			}
			else {
				return `url(${defaultBg})`
			}
		}
	},
	
	
	
};
</script>

<style lang="scss">
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: "Roboto", sans-serif;
}
body {
	background: black;
}
.main-wrap {
	position: relative;
	z-index: 10;
	&__bg {
		background-repeat: no-repeat;
		background-position: center center;
		background-size: cover;
		height: 100vh;
		display: block;
		z-index: 1;
		position: fixed;
		left: 0;
		top: 0;
		bottom: 0;
		right: 0;
		z-index: -1;
		filter: blur(3px)
	}
}
.cup {
	cursor: pointer;
}
.container {
	padding: 200px 20px;
	max-width: 800px;
	display: block;
	margin: 0 auto;
	outline: 1px solid red;
}
</style>
