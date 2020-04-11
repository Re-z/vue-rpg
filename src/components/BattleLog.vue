<template>
	<div class="log">
		<p>Turn №{{getCurrentTurn.id -1}} Results:</p>

		<!-- player log -->
		<!-- <p v-if="getCurrentTurn.specialHeroAction">
			{{getCurrentTurn.specialHeroAction}}
		</p> -->
		<p>
			{{getLog.player}}
		</p>

		<p>			{{getLog.monster}}</p>
	</div>
	
</template>

<script>
import {mapGetters} from 'vuex'
import heroes from '../js/heroes';
export default {
	computed: {
		...mapGetters(["getCurrentTurn", "getLog"])
	},
	
}
</script>

<style lang="scss">
	.log {
		background: lightcyan
	}
</style>