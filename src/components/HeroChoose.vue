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
					<td>{{chosenHero.minDmg}}</td>
				</tr>
				<tr>
					<td>Maximum Damage</td>
					<td>{{chosenHero.maxDmg}}</td>
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
		<div class="heroChoose__btn-wrap">
			<button @click="startBattle">Start Battles</button>
		</div>
	</div>
</template>

<script>
import warriorImg from '../assets/img/warrior.png';
import archerImg from '../assets/img/archer.png';
import wizzardImg from '../assets/img/wizzard.png';
export default {
	data() {
		return {
			heroes: [
				{
					type: 'Warrior',
					avatar: warriorImg,
					minDmg: 5,
					maxDmg: 15,
					healthPoints: 100,
					healingPotions: 1,
					currentHealth: 100
				},
				{
					type: 'Archer',
					avatar: archerImg,
					minDmg: 3,
					maxDmg: 20,
					healthPoints: 90,
					healingPotions: 1,
					currentHealth: 90
				},
				{
					type: 'Wizzard',
					avatar: wizzardImg,
					minDmg: 1,
					maxDmg: 25,
					healthPoints: 70,
					healingPotions: 2,
					currentHealth: 70
				}
			],
			// chosenHero: this.heroes[0]
			chosenHero: {
				type: 'Warrior',
				avatar: warriorImg,
				minDmg: 5,
				maxDmg: 15,
				healthPoints: 100,
				healingPotions: 1,
				currentHealth: 100

			},
		}
	},
	methods: {
		startBattle() {
			this.$store.commit('setHero', this.chosenHero)
			this.$store.commit('changeScreen', 'battle');
		}
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
	}
	.chosen {
		border: 1px solid red;
	}
</style>