<template>
	<div class="main-wrap">
		<div class="main-wrap__bg"
			:style="{backgroundImage: backgroundImg}"
		></div>

		<div class="container">

			<app-intro v-if="getCurrentScreen === 'intro'"></app-intro>
			<app-hero-choose v-if="getCurrentScreen === 'heroChoose'"></app-hero-choose>
			<app-battle v-if="getCurrentScreen === 'battle'"></app-battle>
			<div class="footer">
				<div class="footer__copy">
					<p class="font-s">Made by Anton incorporated,</p>
					<p class="font-s">2020 year.</p>
				</div>
				<app-sound/>

			</div>

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
		filter: blur(5px)
	}
}

</style>
