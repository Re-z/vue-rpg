<template>
	<div class="battle">
		<div class="battle__round">
			<span>Round 1</span>
			<span v-if="getCurrentTurn.number != 0">, turn {{getCurrentTurn.number + 1}}</span>
		</div>
		<div class="battle__hero">
			<!-- hero healthbar -->
			<app-health-bar :hero="getHero" />

			<img class="battle__hero-img" :src="getHero.avatar" alt="" />

			<div class="controls">
				<div class="controls__section">
					<p class="controls__section-title">Attacks:</p>
					<span 
						@click="handleHeroSimpleAttack"
						class="controls__btn cup"
					>
						<img :src="require('../assets/img/simple-attack.png')" alt="" />
					</span>
					<!-- special attack appears each 3th turn -->
					<span
						v-if="getCurrentTurn.number % 3 === 0" 
						class="controls__btn cup"
						@click="handleHeroSpecialAttack"
					>
						<img :src="require('../assets/img/super-attack.png')" alt="" />
					</span>

				</div>

				<div class="controls__section" v-if="getHero.healingPotions">
					<p class="controls__section-title">Potions:</p>
					<span 
						class="controls__btn cup"
						@click="handleHeroHeal"
						
					>
						<img :src="require('../assets/img/potion.png')" alt="" />
						<span>x {{getHero.healingPotions}}</span>

					</span>
				</div>
			</div>
		</div>
		<div class="battle__monster">
			<!-- monster healthbar -->
			<app-health-bar :hero="getMonster" />


			<img class="battle__hero-img" :src="getMonster.avatar" alt="" />
		</div>
		<!-- show log after first turn -->
		<app-battle-log v-if="getCurrentTurn.number">

		</app-battle-log>
	</div>
</template>

<script>
import HealthBar from "./HealthBar.vue";
import BattleLog from "./BattleLog.vue";
import { mapGetters } from "vuex";

import FatPalladinImg from "../assets/img/fat-paladin.png";
import CursedDollImg from "../assets/img/cursed-doll.png";
import GladiatorImg from "../assets/img/gladiator.png";
export default {
	data() {
		return {
			//initial set monster in vuex?
			monsters: [
				{
					type: "Fat Palladin",
					avatar: FatPalladinImg,
					minDmg: 1,
					maxDmg: 8,
					healthPoints: 100,
					currentHealth: 100
				},
				{
					type: "Cursed Doll",
					avatar: CursedDollImg,
					minDmg: 1,
					maxDmg: 15,
					healthPoints: 60,
					currentHealth: 60
				},
				{
					type: "Gladiator",
					avatar: GladiatorImg,
					minDmg: 6,
					maxDmg: 10,
					healthPoints: 90,
					currentHealth: 90
				},



			],
		};
	},
	methods: {
		handleHeroSimpleAttack() {
			const dmgToMonster = Math.ceil(this.generateDmg(this.getHero.minDmg, this.getHero.maxDmg));
			this.$store.commit('setDmgToMonster', dmgToMonster);

			if(this.getMonster.currentHealth <= 0) {
				this.$store.commit('setSpecialTurnLog', {
					specialHeroAction: '',
					specialMonsterAction: `Monster ${this.getMonster.type} defeated!`
				});
				this.$store.commit("setMonster", this.monsters[1]);
			}
			else {
				this.handleMonsterHit();
				this.$store.commit('increaseTurn')
			}
		},
		handleHeroSpecialAttack() {
			this.$store.commit('setDmgToMonster', 20);
			if(this.getMonster.currentHealth <= 0) {
				this.$store.commit('setSpecialTurnLog', {
					specialHeroAction: '',
					specialMonsterAction: `Monster ${this.getMonster.type} defeated!`
				});
				this.$store.commit("setMonster", this.monsters[1]);
			}
			else {
				this.handleMonsterHit();
				this.$store.commit('increaseTurn')
			}

		},
		handleHeroHeal() {
			this.$store.commit('setSpecialTurnLog', {
				specialHeroAction: 'Player used healing potion',
				specialMonsterAction: ''
			});
			this.handleMonsterHit();
			this.$store.commit('setHeroHealth', 100)
			this.$store.commit('increaseTurn')
		},
		handleMonsterHit() {
			const dmgToHero = Math.ceil(this.generateDmg(this.getMonster.minDmg, this.getMonster.maxDmg));
			this.$store.commit('setDmgToHero', dmgToHero)
		},
		generateDmg(min, max) {
			return Math.random() * (max - min) + min;
		}
	},
	computed: {
		...mapGetters(["getHero", "getMonster", "getCurrentTurn"])
	},
	components: {
		"app-health-bar": HealthBar,
		"app-battle-log": BattleLog
	},
	mounted() {
		//initial set monster to vuex
		this.$store.commit("setMonster", this.monsters[2]);
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
