<template>
	<div class="heroChoose">
		<p class="heroChoose__text">Bla bla</p>
		<div class="heroChoose__heroes">
			<div 
				class="heroChoose__hero"
				v-for="hero in heroes"
				:key="hero.type"
				:class="{'chosen': chosenHero.type === hero.type}"
				@click="chosenHero = hero"
			>
				<p class="heroChoose__hero-type">{{hero.type}}</p>
				<img src="https://www.placecage.com/100/100" alt="">
			</div>
		</div>
		<div class="heroChoose__hero-description">
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
	</div>
</template>

<script>
export default {
	data() {
		return {
			heroes: [
				{
					type: 'Warrior',
					avatar: 'img path',
					minDmg: '5',
					maxDmg: '15',
					healthPoints: 100,
					healingPotions: 1
				},
				{
					type: 'Archer',
					avatar: 'img path',
					minDmg: '3',
					maxDmg: '20',
					healthPoints: 90,
					healingPotions: 1
				},
				{
					type: 'Wizzard',
					avatar: 'img path',
					minDmg: '1',
					maxDmg: '25',
					healthPoints: 70,
					healingPotions: 2
				}
			],
			chosenHero: {
				type: 'Warrior',
				avatar: 'img path',
				minDmg: '5',
				maxDmg: '15',
				healthPoints: 100,
				healingPotions: 1
			},
		}
	},
	computed: {
		
	}
}
</script>

<style lang="scss">
	.heroChoose {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		grid-template-rows: auto;
		grid-gap: 20px;
		&__text {
			grid-column: 1/6;
			text-align: center;
		}
		&__hero-type {
			text-align: center;
		}
		&__heroes {
			grid-column: 1/6;
			justify-items: center;
			display: flex;
			justify-content: center;
		}
		&__hero {
			&:not(:last-of-type) {
				margin-right: 20px;
			}
		}
		&__hero-description {
			grid-column: 1/6;

		}
		&__stats {
			display: flex;
			justify-content: space-between;
		}
	}
	.chosen {
		border: 1px solid red;
	}
</style>