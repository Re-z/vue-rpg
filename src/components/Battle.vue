<template>
	<div class="battle">
		<div class="battle__round">Round 1</div>
		<div class="battle__hero">

			<app-health-bar :healthPoints="getHero.currentHealth"/>


			<img class="battle__hero-img" :src="getHero.avatar" alt="" />
			
			<div class="controls">
				<div class="controls__section">
					<p class="controls__section-title">Attacks:</p>
					<span class="controls__btn cup">
						<img :src="require('../assets/img/simple-attack.png')" alt="" />
					</span>
					<span class="controls__btn cup">
						<img :src="require('../assets/img/super-attack.png')" alt="" />
					</span>
				</div>

				<div class="controls__section" v-if="getHero.healingPotions">
					<p class="controls__section-title">Potions:</p>
					<span class="controls__btn cup">
						<img :src="require('../assets/img/potion.png')" alt="" />
					</span>
				</div>
			</div>
		</div>
		<div class="battle__monster">
			<img class="battle__hero-img" :src="monsters[currentMonster].avatar" alt="" />
		</div>
	</div>
</template>

<script>
import HealthBar from './HealthBar.vue';
import { mapGetters } from "vuex";

import FatPalladinImg from '../assets/img/fat-paladin.png'
import CursedDollImg from '../assets/img/cursed-doll.png'
import GladiatorImg from '../assets/img/gladiator.png'
export default {
	data() {
		return {
			monsters: [
				{
					type: 'Fat Palladin',
					avatar: FatPalladinImg,
					minDmg: '5',
					maxDmg: '15',
					healthPoints: 100,
					currentHealth: 100
				}
			],
			currentMonster: 0
		};
	},
	computed: {
		...mapGetters(["getHero"])
	},
	components: {
		'app-health-bar': HealthBar
	},
	mounted() {
		this.$store.commit('setMonster', monsters)
	}
};
</script>

<style lang="scss">
.battle {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-gap: 40px;
	&__round {
		grid-column: 1/3;
		grid-row: 1/2;
		background: red;
		text-align: center;
	}
	&__hero {
		grid-column: 1/2;
		grid-row: 2/3;
		background: lightgray;
	}
	&__hero-img {
		display: block;
		margin: 0 auto;
	}
	&__monster {
		grid-column: 2/3;
		grid-row: 2/3;
		background: skyblue;
	}
}
.controls {
	&__btn {
		display: inline-block;
		margin-right: 10px;
	}
	&__section {
		margin-bottom: 10px;
	}
	&__section-title {
		margin-bottom: 5px;
	}
}
</style>
