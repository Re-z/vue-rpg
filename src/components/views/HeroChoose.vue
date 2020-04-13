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
				class="heroChoose__table"
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
							<tr class="no-border"><td>{{chosenHero.simpleAttack.descr}}</td></tr>
							<tr class="no-border"><td>Damage: {{simpleQuantifiedMinDmg}} - {{simpleQuantifiedMaxDmg}}</td></tr>
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
				class="heroChoose__name-input"
				v-model.trim="chosenHero.name"
				placeholder="Type hero name, please"
			>
		</div>

		<app-difficulty />

		<div class="heroChoose__btn-wrap">
			<button class="btn" @click="startBattle">Start Battles</button>
		</div>
	</div>
</template>

<script>

import heroesData from '../../js/heroes';
import Difficulty from '../Difficulty'

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
			this.$store.commit('changeScreen', 'battle');
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
		//берем данные с героями, конвертим в строку и обратно.
		//за счет этого объекты копируются, а не передаются по ссылке.
		//и при рестарте игры данные не ломаются, а приходят новые
		let heroes =  JSON.parse(JSON.stringify([...heroesData]));
		this.heroes = heroes;
		this.chosenHero = this.heroes[0];
	},
	components: {
		'app-difficulty': Difficulty
	}
}
</script>
