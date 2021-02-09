<template>
	<div class="main-wrap">
		<div class="main-wrap__bg" :style="{backgroundImage: backgroundImg}"
		></div>

		<div class="container" >

			<component :is="this.getCurrentScreen" />

			<div class="footer">
				<div class="footer__copy">
					<p class="font-s">Made by Anton incorporated,</p>
					<p class="font-s">2020 year.</p>
				</div>

				<Sound/>

			</div>

		</div>
	</div>
</template>

<script>
import { mapGetters } from "vuex";
import defaultBg from './assets/img/bg.jpg';
import * as constants from '@/js/helpers/constants'


export default {
	computed: {
		...mapGetters(["getCurrentScreen", "getMonster", "getConsole"]),

    backgroundImg() {
      return this.getMonster.backgroundImg
        ? `url(${this.getMonster.backgroundImg})`
        : `url(${defaultBg})`
		},

	},

	methods: {
		toggleConsole() {
			if(this.getCurrentScreen === constants.BATTLE_SCREEN) {
			  const isConsoleVisible = this.getConsole;
        this.$store.commit('setConsole', !isConsoleVisible)
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

