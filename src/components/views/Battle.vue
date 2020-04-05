<template>
	<div class="battle">
		<div class="battle__round">
			<span>Round {{getCurrentRound}} , turn {{getCurrentTurn.id}}</span>
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
						<img :src="require('../..//assets/img/simple-attack.png')" alt="" />
					</span>
					<!-- special attack appears each 3th turn -->
					<span
						v-if="getCurrentTurn.id % 3 === 0" 
						class="controls__btn cup"
						@click="handleHeroSpecialAttack"
					>
						<img :src="require('../..//assets/img/super-attack.png')" alt="" />
					</span>

				</div>

				<div class="controls__section" v-if="getHero.healingPotions">
					<p class="controls__section-title">Potions:</p>
					<span 
						class="controls__btn cup"
						@click="handleHeroHeal"
					>
						<img :src="require('../../assets/img/potion.png')" alt="" />
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
		<app-battle-log v-if="getCurrentTurn.id != 1"/>
		<app-popup v-if="getPopup.isVisible"/>
	</div>
</template>

<script>
//modules
import monstersData from '../../js/monsters'
import popupOptions from '../../js/popupOptions'
//components
import HealthBar from "../HealthBar.vue";
import BattleLog from "../BattleLog.vue";

import { mapGetters } from "vuex";

export default {
	data() {
		return {
			monsters: {} //
		}
	},
	methods: {
		checkMonsterDeathAfterHeroAttack() {
			if(this.getMonster.currentHealth <= 0) {
				this.$store.commit('setSpecialTurnLog', {
					specialHeroAction: '',
					specialMonsterAction: `Monster ${this.getMonster.type} defeated!`
				});
				//if last monser dead - show win popup
				if(this.getCurrentRound === this.monsters.length) {
					this.$store.commit('setPopup', popupOptions.heroWon)
				}
				// else - continue battle
				else {
					this.$store.commit('increaseRound');
					this.$store.commit("setMonster", this.monsters[this.getCurrentRound - 1]);
				}
				this.$store.commit('increaseTurn')
			}
			else {
				this.handleMonsterAttack();
				this.$store.commit('increaseTurn')
			}
		},
		handleHeroSimpleAttack() {
			const generatedDmg = this.generateDmg(this.getHero.minDmg, this.getHero.maxDmg);
			const quantifiedDmg = generatedDmg * this.getOptions.dmgQuantifier;
			const dmgToMonster = Math.round(quantifiedDmg);

			this.$store.commit('setDmgToMonster', dmgToMonster);
			this.checkMonsterDeathAfterHeroAttack();
		},
		handleHeroSpecialAttack() {
			this.$store.commit('setDmgToMonster', 20);
			this.checkMonsterDeathAfterHeroAttack();
		},
		handleHeroHeal() {
			this.$store.commit('setSpecialTurnLog', {
				specialHeroAction: 'Player used healing potion',
				specialMonsterAction: ''
			});
			this.$store.commit('setHeroHealth', 100)
			this.handleMonsterAttack();


			this.$store.commit('increaseTurn')
		},
		handleMonsterAttack() {
			const dmgToHero = Math.round(this.generateDmg(this.getMonster.minDmg , this.getMonster.maxDmg));
			this.$store.commit('setDmgToHero', dmgToHero);
			if(this.getHero.currentHealth <= 0 ) {
				this.$store.commit('setPopup', popupOptions.heroDied)
			}
		},
		generateDmg(min, max) {
			return Math.random() * (max - min) + min;
		}
	},
	computed: {
		...mapGetters([
			"getHero",
			"getMonster",
			"getCurrentTurn",
			"getCurrentRound",
			"getPopup",
			"getOptions"
		])
	},

	components: {
		"app-health-bar": HealthBar,
		"app-battle-log": BattleLog
	},
	mounted() {
		//берем данные с монстрами, конвертим в строку и обратно.
		//за счет этого объекты копируются, а не передаются по ссылке.
		//и при рестарте игры данные не ломаются, а приходят новые
		let monsters = JSON.parse(JSON.stringify([...monstersData]))
		this.monsters = monsters;
		
		this.$store.commit("setMonster", this.monsters[this.getCurrentRound - 1]);
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
