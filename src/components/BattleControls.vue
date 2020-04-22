<template>
	<div class="controls">
		<div class="controls__section">
			<p class="controls__section-title">Attacks:</p>
			<div class="controls__attacks">
				<div 
					@click="handleHeroSimpleAttack"
					class="controls__btn pointer"
				>
					<span class="controls__img-wrap">
						<img :src="getHero.simpleAttack.img" alt="" />
					</span>
				</div>

				<!-- special attack appears each 3d turn -->
				<div 
					class="controls__btn-wrap"
					:class="{'not-ready-control-btn': this.getCurrentTurn.id % 3 != 0}"
				>
					<div
						class="controls__btn pointer"
						@click="handleHeroSpecialAttack"
					>
						<span class="controls__img-wrap">
							<img :src="getHero.specialAttack.img" alt="" />
						</span>
					</div>
				</div>
			</div>
		</div>

		<div class="controls__section" v-if="getHero.heal.potions">
			<p class="controls__section-title">Potions:</p>
			<div class="controls__btn-wrap">
				<div 
					class="controls__btn pointer"
					@click="handleHeroHeal"
				>
					<span class="controls__img-wrap">
						<img src="@/assets/img/potion.png" alt="" />
					</span>
				</div>
				<span>x {{getHero.heal.potions}}</span>
			</div>
		</div>
	</div>
</template>

<script>
import missSound from "@/assets/sound/miss.mp3"
import healSound from '@/assets/sound/heal.mp3'

import monstersData from '@/js/monsters'

import { mapGetters } from "vuex";

import popupOptions from '@/js/popupOptions'

export default {
	data() {
		return {
			monsters: {} //
		}
	},
	methods: {
		checkMonsterDeathAfterHeroAttack() {
			if(this.getMonster.currentHealth <= 0) {
				this.$store.commit('setMonsterLog', `Monster ${this.getMonster.type} defeated`);
				//if last monser dead - show win popup
				if(this.getCurrentRound === this.monsters.length) {
					this.$store.commit('setPopup', popupOptions.heroWon)
				}
				// else - continue battle
				else {
					this.$store.commit('increaseRound');
					this.$store.commit("setMonster", this.monsters[this.getCurrentRound - 1]);
				}
				this.$store.commit('increaseTurn');
			}
			else {
				this.handleMonsterAttack();
				this.$store.commit('increaseTurn')
			}
		},
		turnInProgress(ev) {
			// prevents multiclicks on attack btns
			const activeClass = 'active';
			const btns = ev.target.closest('.controls').querySelectorAll('.controls__img-wrap');
			function hasActiveClass(el) {
				return el.classList.contains(activeClass);
			}
			//if one of btns have active class - return
			if([...btns].some(hasActiveClass)) {
				return true;
			}

			btns.forEach(btn => {
				btn.classList.add(activeClass);
				setTimeout(() => {
					btn.classList.remove(activeClass);
				}, 1500)
			})
			
		},
		isCriticalDmg(critChance) {
			const randomFrom0to100 = Math.ceil(Math.random() * 100);
			return randomFrom0to100 <= critChance;
		},
		monsterDodge(dodgeChance) {
			const randomFrom0to100 = Math.ceil(Math.random() * 100);
			return randomFrom0to100 <= dodgeChance;
		},
		handleHeroSimpleAttack(ev) {
			if(this.turnInProgress(ev)) {
				return;
			}

			const generatedDmg = this.generateDmg(this.getHero.simpleAttack.minDmg, this.getHero.simpleAttack.maxDmg);
			const quantifiedDmg = generatedDmg * this.getOptions.dmgQuantifier;
			let dmgToMonster = Math.round(quantifiedDmg);
			let playerLogMsg = `Player hit monster with ${dmgToMonster} hp`;
			
			if(this.isCriticalDmg(this.getHero.critChance)) {
				dmgToMonster = dmgToMonster * 2;
				playerLogMsg = `Player made a critical hit and deal ${dmgToMonster} damage to mosnter!`
			}

			if(this.monsterDodge(this.getMonster.dodgeChance)) {
				this.$store.commit('setSoundToPlay', missSound);
				playerLogMsg = `Player tried to deal ${dmgToMonster} damage to monster, but ${this.getMonster.type} dodged this attack`
				this.$store.commit('setPlayerLog', playerLogMsg);
				setTimeout(() => {
					this.checkMonsterDeathAfterHeroAttack();
				},0)
				return;
			}

			this.$store.commit('setSoundToPlay', this.getHero.simpleAttack.sound);
			// bug with music without settimeout
			setTimeout(() => {
				this.$store.commit('setDmgToMonster', dmgToMonster);
				this.$store.commit('setPlayerLog', playerLogMsg);
				this.checkMonsterDeathAfterHeroAttack();
			},0)
		},
		handleHeroSpecialAttack(ev) {
			if(this.turnInProgress(ev)) {
				return;
			}

			const generatedDmg = this.generateDmg(this.getHero.specialAttack.minDmg, this.getHero.specialAttack.maxDmg);
			const quantifiedDmg = generatedDmg * this.getOptions.dmgQuantifier;
			const dmgToMonster = Math.round(quantifiedDmg);
			
			//if monster dodged players attack - play miss sound, 
			// add log, and call a function that increases turn
			if(this.monsterDodge(this.getMonster.dodgeChance)) {
				this.$store.commit('setSoundToPlay', missSound);
				let playerLogMsg = `Player tried to deal ${dmgToMonster} damage to monster, but ${this.getMonster.type} dodged this attack`
				this.$store.commit('setPlayerLog', playerLogMsg);
				setTimeout(() => {
					this.checkMonsterDeathAfterHeroAttack();
				},0)
				return;
			}

			this.$store.commit('setSoundToPlay', this.getHero.specialAttack.sound)
			// bug with music without settimeout
			setTimeout(() => {
				this.$store.commit('setDmgToMonster', dmgToMonster);
				this.$store.commit('setPlayerLog', `Player use ${this.getHero.specialAttack.descr} attack and hit monster with ${dmgToMonster} hp`);
				this.checkMonsterDeathAfterHeroAttack();
			},0)

		},
		handleHeroHeal(ev) {
			if(this.turnInProgress(ev)) {
				return;
			}

			this.$store.commit('setPlayerLog', 'Player use healing potion')
			this.$store.commit('setSoundToPlay', healSound);
			setTimeout(() => {
				this.$store.commit('setHeroHealth', 100)
				this.handleMonsterAttack();
				this.$store.commit('increaseTurn');
			}, 0)
		},
		handleMonsterAttack() {
			const dmgToHero = Math.round(this.generateDmg(this.getMonster.minDmg , this.getMonster.maxDmg));
			this.$store.commit('setDmgToHero', dmgToHero);
			this.$store.commit('setMonsterLog', `Monster hit player with ${dmgToHero} hp`);

			if(this.getHero.currentHealth <= 0 ) {
				this.$store.commit('setPopup', popupOptions.heroDied)
			}
		},
		generateDmg(min, max) {
			return Math.random() * (max - min) + min;
		},
		
	},
	computed: {
		...mapGetters([
			"getHero",
			"getMonster",
			"getCurrentTurn",
			"getCurrentRound",
			"getOptions",
		])
	},
	created() {
		// JSON stringify\parse - in order to create new arrau, which we can modify
		// during battle. 
		let monsters = JSON.parse(JSON.stringify([...monstersData]))
		this.monsters = monsters;
		
		this.$store.commit("setMonster", this.monsters[this.getCurrentRound - 1]);
	}
}
</script>