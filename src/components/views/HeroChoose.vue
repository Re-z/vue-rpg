<template>
	<div class="heroChoose">
		<p class="title">Choose your hero:</p>
		<div class="heroChoose__heroes">
			<div 
				class="heroChoose__hero pointer"
				v-for="hero in heroes"
				:key="hero.type"
				:class="{'chosen': chosenHero.type === hero.type}"
				@click="chosenHero = hero"
			>
				<p class="heroChoose__hero-type">{{hero.type}}</p>
				<img :src="hero.avatar" alt="">
			</div>
		</div>

		<div class="heroChoose__table-wrap">
			<p class="heroChoose__table-descr">{{chosenHero.descr}}</p>

			<table
				class="table"
				v-if="chosenHero && dmgQuantifier"
			>
				<tr v-if="chosenHero.name">
					<td>Name: </td>
					<td> {{chosenHero.name}}</td>
				</tr>
				<tr v-else>
					<td>Class: </td>
					<td> {{chosenHero.type}}</td>
				</tr>
				
				<tr>
					<td>Max. health: </td>
					<td> {{chosenHero.healthPoints}}</td>
				</tr>
				<tr v-if="chosenHero.heal.potions">
					<td>Heal potions: </td>
					<td> {{chosenHero.heal.potions}}</td>
				</tr>
				<tr>
					<td>Simple attack: </td>
					<td class="no-padding">
						<table>
							<tr class="no-border">
                <td>{{chosenHero.simpleAttack.descr}}</td>
              </tr>
							<tr class="no-border">
                <td>Damage: {{simpleQuantifiedMinDmg}} - {{simpleQuantifiedMaxDmg}}</td>
              </tr>
						</table>
					</td>
				</tr>
				<tr>
					<td>Special attack: </td>
					<td class="no-padding">
						<table>
							<tr class="no-border"><td>{{chosenHero.specialAttack.descr}}</td></tr>
							<tr class="no-border"><td>Damage: {{specialQuantifiedMinDmg}} - {{specialQuantifiedMaxDmg}}</td></tr>
						</table>
					</td>
				</tr>

				<tr>
					<td>Crit. chance: </td>
					<td> {{chosenHero.critChance}}%</td>
				</tr>
				<tr>
					<td>Damage quantifier: </td>
					<td> {{dmgQuantifier}} (based on difficulty)</td>
				</tr>
			</table>
		</div>

		
		<div class="heroChoose__name-wrap">
			<span>Choose name: </span>
			<input
				class="heroChoose__name-input input-text"
				v-model.trim="chosenHero.name"
				placeholder="Type hero name, please"
			>
		</div>

		<Difficulty />

		<div class="heroChoose__btn-wrap">
			<button class="btn" @click="startBattle">Start Battle</button>
		</div>
	</div>

</template>

<script>
import lodash from "lodash";

import heroesData from '@/js/heroes';
import Difficulty from '@/components/Difficulty/Difficulty';
import * as constants from '@/js/helpers/constants';
import startBattleSound from '@/assets/sound/roundone.mp3';


export default {
	data() {
		return {
			heroes: [], //here will be stored cloned array of heroes (is cloned in mounted)
			chosenHero: {},
		}
	},
	methods: {
		startBattle() {
			this.$store.commit('setHero', this.chosenHero);
			this.$store.commit('increaseTurn')
			this.$store.commit('changeScreen', constants.BATTLE_SCREEN);
		}
	},
	computed: {
		dmgQuantifier() {
			return this.$store.getters.getOptions.dmgQuantifier
		},
		simpleQuantifiedMinDmg() {
			return Math.round(this.dmgQuantifier * this.chosenHero.simpleAttack.minDmg)
		},
		simpleQuantifiedMaxDmg() {
			return Math.round(this.dmgQuantifier * this.chosenHero.simpleAttack.maxDmg)
		},
		specialQuantifiedMinDmg() {
			return Math.round(this.dmgQuantifier * this.chosenHero.specialAttack.minDmg)
		},
		specialQuantifiedMaxDmg() {
			return Math.round(this.dmgQuantifier * this.chosenHero.specialAttack.maxDmg)
		},
	},
	created() {
		this.heroes = lodash.cloneDeep(heroesData);
		this.chosenHero = this.heroes[0];
		this.$store.commit('setSoundToPlay', startBattleSound);
	},
	components: {
		Difficulty
	}
}
</script>
