<template>
	<div class="heroChoose">
		<p class="heroChoose__text">Bla bla</p>
		<div class="heroChoose__heroes">
			<div 
				class="heroChoose__hero cup"
				v-for="hero in heroes"
				:key="hero.type"
				:class="{'chosen': chosenHero.type === hero.type}"
				@click="chosenHero = hero"
			>
				<p class="heroChoose__hero-type">{{hero.type}}</p>
				<img :src="hero.avatar" alt="">
			</div>
		</div>
		<div class="heroChoose__hero-description" v-if="chosenHero">
			<table class="heroChoose__stats">
				<tr>
					<td>Hero class</td>
					<td>{{chosenHero.type}}</td>
				</tr>
				<tr>
					<td>Minimal Damage</td>
					<td>{{quantifiedMinDmg}}</td>
				</tr>
				<tr>
					<td>Maximum Damage</td>
					<td>{{quantifiedMaxDmg}}</td>
				</tr>
				<tr>
					<td>Health Points</td>
					<td>{{chosenHero.healthPoints}}</td>
				</tr>
				<tr>
					<td>Healing Potions</td>
					<td>{{chosenHero.healingPotions}}</td>
				</tr>
			</table>
		</div>

		<app-difficulty />

		<div class="heroChoose__name-wrap">
			<input
				v-model.trim="chosenHero.name"
				placeholder="Type hero name, please"
			>
		</div>
		<div class="heroChoose__results">
			<div class="heroChoose__results-item heroChoose__results-item_img-wrap">
				<img :src="chosenHero.avatar" alt="">
			</div>
			<div class="heroChoose__results-item">
				Name: {{chosenHero.name}}
			</div>
			<div class="heroChoose__results-item">
				Class: {{chosenHero.type}}
			</div>
			<div class="heroChoose__results-item">
				Damage quantifier: {{dmgQuantifier}} (based on difficulty level)
			</div>
		</div>

		<div class="heroChoose__btn-wrap">
			<button @click="startBattle">Start Battles</button>
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
			this.$store.commit('setHero', this.chosenHero)
			this.$store.commit('changeScreen', 'battle');
		}
	},
	computed: {
		dmgQuantifier() {
			return this.$store.getters.getOptions.dmgQuantifier
		},
		quantifiedMinDmg() {
			return Math.round(this.dmgQuantifier * this.chosenHero.simpleAttack.minDmg)
		},
		quantifiedMaxDmg() {
			return Math.round(this.dmgQuantifier * this.chosenHero.simpleAttack.maxDmg)
		}
	},
	mounted() {
		//берем данные с героями, конвертим в строку и обратно.
		//за счет этого объекты копируются, а не передаются по ссылке.
		//и при рестарте игры данные не ломаются, а приходят новые
		let heroes =  JSON.parse(JSON.stringify([...heroesData]));
		this.heroes = heroes;
		this.chosenHero = this.heroes[0]
	},
	components: {
		'app-difficulty': Difficulty
	}
	
}
</script>

<style lang="scss">
@mixin sectionMarginBottom {
	margin-bottom: 20px
}
$sectionMargin: 20px;
	.heroChoose {
		&__text {
			text-align: center;
			margin-bottom: $sectionMargin;
			@include sectionMarginBottom;
		}
		&__hero-type {
			text-align: center;
		}
		&__heroes {
			justify-items: center;
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			justify-content: center;
			@include sectionMarginBottom;

		}
		&__hero {
			&:not(:last-of-type) {
				margin-right: 20px;
			}
		}
		&__hero-description {
			@include sectionMarginBottom;

		}
		&__stats {
			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;

		}
		&__btn-wrap {
			text-align: center;
		}
		&__name-wrap {
			margin: 20px 0;
		}
		&__results {
			margin: 20px 0;
			background: lightgoldenrodyellow;
			display: grid;
			grid-template-columns: 1fr 5fr;
		}
		&__results-item {
			// border: 1px solid red;
			&_img-wrap {
				grid-row: 1/4
			}
		}
	}
	.chosen {
		border: 1px solid red;
	}
</style>