<template>

	<div class="main-wrap">
		<div class="main-wrap__bg"
			:style="{backgroundImage: backgroundImg}"
		></div>

		<div  class="container" >
			<!-- //intro, hero choose, battle -->
			<component :is="chooseComponent"></component>
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
import defaultBg from './assets/img/bg.png';
import * as constants from '@/js/helpers/constants'
export default {
	computed: {
		...mapGetters(["getCurrentScreen", "getMonster", "getConsole"]),
		backgroundImg() {
			if(this.getMonster.backgroundImg) {
				return `url(${this.getMonster.backgroundImg})`
			}
			else {
				return `url(${defaultBg})`
			}
		},
		chooseComponent() {
			switch(this.getCurrentScreen) {
				case constants.INTRO_SCREEN:
					return 'app-intro';
				case constants.HEROCHOOSE_SCREEN:
					return 'app-hero-choose';
				case constants.BATTLE_SCREEN:
					return 'app-battle';
				case constants.MONSTROPEDIA_SCREEN:
					return 'app-monstropedia';
				case constants.HOWTOPLAY_SCREEN:
					return 'app-how-to-play';
			}
		}
	},
	methods: {
		toggleConsole($ev) {
			if(this.getCurrentScreen === constants.BATTLE_SCREEN) {
				if(this.getConsole) {
					this.$store.commit('setConsole', false)
				} else {
					this.$store.commit('setConsole', true)
				}
			}
		}
	},
	created() {
        document.addEventListener('keydown', evt => {
            if (evt.keyCode === constants.TILDA_BTN) {
                this.toggleConsole();
            }
		});
    },
};
</script>

<style lang="scss">

.main-wrap {
	position: relative;
	z-index: 10;
	display: flex;
	align-items: center;
	height: 100vh;
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
