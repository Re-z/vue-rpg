<template>
	<div class="healthbar" >
		<span v-if="hero.name">{{hero.name}}:</span>
		<span v-else>{{hero.type}}:</span>
		<!-- show helthbar only when data from prop is ready -->
		<div v-if="hero.currentHealth">
		<!-- hearth img based on current hero/monster health -->
			<img 
				class="healthbar__img" 
				:src="require('../assets/img/heart.png')" 
				alt="Hero health point"
				v-for="index in healthItems"
				:key="index"
			>
		</div>
		
		<p class="healthbar__numeric-health">Health: {{hero.currentHealth}} / {{hero.healthPoints}}</p>
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
			return Math.ceil(this.hero.currentHealth/10)
		}
	},
}
</script>
<style lang="scss" scoped>
.healthbar {
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	&__img {
		display: inline-block;
		margin-left: 5px;
	}
	&__numeric-health {
		width: 100%;
	}
}
</style>