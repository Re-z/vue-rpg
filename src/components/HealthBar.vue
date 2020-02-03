<template>
	<div class="healthbar">
		<span>{{heroType}}:</span>
		<img 
			class="healthbar__img" 
			:src="require('../assets/img/heart.png')" 
			alt="Hero health point"
			v-for="index in healthItems"
			:key="index"
		>
	</div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
	props: {
		healthPoints: {
			type: Number,
			default: 100
		},
		heroType: {
			type: String,
			default: 'Player'
		}
	},
	computed: {
		healthItems() {
			return Math.ceil(this.healthPoints/10)
		}
	},
}
</script>
<style lang="scss" scoped>
.healthbar {
	display: flex;
	align-items: center;
	&__img {
		display: inline-block;
		margin-left: 5px;
	}
}
</style>