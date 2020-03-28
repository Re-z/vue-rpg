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

import heroes from '../../js/heroes'


export default {
	data() {
		return {
			heroes,
			chosenHero: heroes[0]
		}
	},
	methods: {
		startBattle() {
			this.$store.commit('setHero', this.chosenHero)
			this.$store.commit('changeScreen', 'battle');
			
		}
	},
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