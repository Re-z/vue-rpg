<template>
	<div class="log">
		<p>Turn №{{getCurrentTurn.number}} Results:</p>
		<!-- player log -->
		<p v-if="getCurrentTurn.specialHeroAction">
			{{getCurrentTurn.specialHeroAction}}
		</p>
		<p v-else>
			dmg to Monster: {{getCurrentTurn.dmgToMonster}}
		</p>

		<!-- monster log -->
		<p v-if="getCurrentTurn.specialMonsterAction">
			{{getCurrentTurn.specialMonsterAction}}
		</p>
		<p v-else>dmg to player: {{getCurrentTurn.dmgToHero}}</p>
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