<template>
	<div class="log">
		<p>Turn №{{getCurrentTurn.number}} Results:</p>
		<p>dmg to Monster: {{getCurrentTurn.dmgToMonster}}</p>
		<p>dmg to player: {{getCurrentTurn.dmgToHero}}</p>
	</div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
	computed: {
		...mapGetters(["getCurrentTurn"])
	}
}
</script>

<style lang="scss">
	.log {
		background: lightcyan
	}
</style>