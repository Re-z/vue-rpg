<template>
	<div class="healthbar" v-if="hero">
		<p v-if="hero.name">{{hero.name}}</p>
		<p v-else>{{hero.type}}</p>
		<!-- show healthbar only when data from prop is ready -->
		<div v-if="hero.currentHealth" class="healthbar__imgs">
		<!-- hearth img based on current hero/monster health -->
			<img 
				class="healthbar__img" 
				:src="require('../assets/img/heart.png')" 
				alt="Hero health point"
				v-for="index in healthItems"
				:key="index"
			>
		</div>
		
		<p class="healthbar__numeric-health">HP: {{hero.currentHealth}} / {{hero.healthPoints}}</p>
	</div>
</template>
<script>

export default {
	props: {
		//recieving hero or monster object and set health, based on it
		hero: {
			require: true,
			type: Object
		}
	},
	computed: {
		healthItems() {
			//10 poinst of health === one hearth img
			const numberOfImgs = Math.ceil(this.hero.currentHealth/10);
			return this.hero.currentHealth > 0
        ? numberOfImgs
        : 0
		}
	},
}
</script>

<style lang="scss" scoped>
.healthbar {
  &__imgs {
    margin: 10px 0;
  }
  &__img {
    display: inline-block;
    margin-left: 5px;
  }
  &__numeric-health {
    width: 100%;
  }
}
</style>
