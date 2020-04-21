<template>
<div class="monstropedia">
	<p class="big-title text-center">Monstropedia</p>

	<input class="monstropedia__search input-text"
		type="text" 
		placeholder="Search monster by name"
		v-model="searchInput">
	
	<div class="monstropedia__box">
		<div 
			class=" monstropedia__item"
			v-for="monster in filteredMonsterList"
			:key="monster.type">

			<div class="monstropedia__item-img-wrap">
				<img class="monstropedia__item-img" :src="monster.avatar" :alt="monster.type">
			</div>
			<div class="monstropedia__item-row">{{monster.type}}</div>
			<div class="monstropedia__item-row">Damage: {{monster.minDmg}} - {{monster.maxDmg}}</div>
			<div class="monstropedia__item-row">Health points: {{monster.healthPoints}}</div>
			<div class="monstropedia__item-row">Dodge chance: {{monster.dodgeChance}}%</div>
		</div>

		<p v-if="!filteredMonsterList.length">No monsters found</p>

	</div>

	<div class="monstropedia__btn-wrap text-center">
		<button class="btn" @click="changeScreen">Back</button>
	</div>
</div>
</template>

<script>
import monstersData from '@/js/monsters'
import * as constants from '@/js/helpers/constants'

export default {
	data() {
		return {
			searchInput: ''
		}
	},
	computed: {
		filteredMonsterList() {
			// return filtered list and print DOM based on it
			return monstersData.filter(monster => {
				if(monster.type.toLowerCase().includes(this.searchInput.toLowerCase())) {
					return monster;
				}
			})
		}
	},
	methods: {
		changeScreen() {
			this.$store.commit('changeScreen', constants.INTRO_SCREEN)
		}
	}
}
</script>