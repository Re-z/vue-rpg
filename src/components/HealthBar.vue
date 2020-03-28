<template>
	<div class="healthbar">
		<span>{{hero.type}}:</span>
		<!-- hearth img based on current hero/monster health -->
		<img 
			class="healthbar__img" 
			:src="require('../assets/img/heart.png')" 
			alt="Hero health point"
			v-for="index in healthItems"
			:key="index"
		>
		<p class="healthbar__numeric-health">Health: {{hero.currentHealth}} / {{hero.healthPoints}}</p>
	</div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
	props: {
		//recieving hero or monster object and set health, based on it
		hero: {
			require: true
		}
	},
	mounted() {
		console.log(Math.ceil(this.hero.currentHealth/10));
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