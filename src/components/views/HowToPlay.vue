<template>
	<div class="how-to">
		<p class="big-title text-center">How to play</p>
		
		<div class="how-to__item">
			<span class="controls__btn how-to__item-img">
				<span class="controls__img-wrap">
					<img :src="heroes[1].avatar" :alt="heroes[1].type">
				</span>
			</span> 
			<p>In order to start a game, you have to choose your hero. Each hero has it`s own specifics, such as 
				health points, damage, critical chance,etc. Choose which you like the most.
			</p>
		</div>
		<div class="how-to__item">
			<span class="controls__btn how-to__item-img">
				<span class="controls__img-wrap">
					<img src="@/assets/img/potion.png" alt="Potion">
				</span>
			</span> 
			<p>
				Each hero and each monster has certain number of health points <img src="@/assets/img/heart.png" alt="">. When this number is equal or less than 0,
				monster (or hero) dies;
				When hero dies, the game is over. When hero defeats last monster, he recieves a prize;
				Currently {{monsters.length}} monster is avaliable in game.
			</p>
		</div>
		<div class="how-to__item">
			<span class="controls__btn how-to__item-img">
				<span class="controls__img-wrap">
					<img :src="heroes[0].simpleAttack.img" alt="">
				</span>
			</span> 
			<span class="controls__btn how-to__item-img">
				<span class="controls__img-wrap">
					<img :src="heroes[2].specialAttack.img" alt="">
				</span>
			</span> 
			<p>
				Each hero has simple attack, which is his main instrument to deal damage. 
				Also after each 3d turn he can use special attack, that deals much more damage to monster. Notice, that each hero has his own special attack.
			</p>
			<p>
				Damage in this game is randomly generated. Each hero and each monster has it`s own range of damage. For
				example monster {{monsters[1].type}} can deal from  {{monsters[1].minDmg}} to {{monsters[1].maxDmg}}. Dealed damage
				depends on random generated number in this range.
			</p>
		</div>
		<div class="how-to__item">
			<p>
				If you realize that you are loosing this game,<span v-colorize> you can use cheats</span> . Just press ~ (tilda)
				on your keyboard and you`ll see cheat console with hints.
			</p>
		</div>
		<div class="how-to__btn-wrap text-center">
			<button class="btn" @click="changeScreen">Back</button>
	</div>
	</div>
</template>

<script>
import monstersData from '@/js/monsters';
import heroesData from '@/js/heroes';
import * as constants from '@/js/helpers/constants'


export default {
	data() {
		return {
			monsters: monstersData,
			heroes: heroesData
		}
	},
	methods: {
		changeScreen() {
			this.$store.commit('changeScreen', constants.INTRO_SCREEN)
		}
	}
}
</script>