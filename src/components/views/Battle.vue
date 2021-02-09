<template>
	<div class="battle" >
		<div class="battle__round">
			<p class="big-title">Round {{getCurrentRound}}</p>
			<p class="battle__subtitle">Turn {{getCurrentTurn.id}}</p>
		</div>

		<div class="battle__box">
			<div class="battle__hero">
				<!-- hero healthbar -->
				<app-health-bar :hero="getHero" />
				<div class="battle__img-wrap">
					<img class="battle__hero-img" :src="getHero.avatar" alt="" />
				</div>
			</div>
			
			<span class="battle__box-vs">VS</span>

			<div class="battle__monster">
				<!-- monster healthbar -->
				<app-health-bar :hero="getMonster" />
				<div class="battle__img-wrap justify-end">
					<div class="battle__phrases-wrap">
						<app-phrases v-if="getCurrentTurn.id % 3 === 0"/>
					</div>
					<img class="battle__hero-img" :src="getMonster.avatar" alt="" />
				</div>
			</div>
		</div>

		<app-battle-controls />
		
		<app-console v-if="getConsole" />
		<!-- show log after first turn -->
		<app-battle-log v-if="getCurrentTurn.id != 1"/>

		<Popup v-if="getPopup.isVisible"/>
	</div>
</template>

<script>
//modules

//components
import HealthBar from "../HealthBar.vue";
import BattleLog from "../BattleLog.vue";
import Phrases from "../Phrases.vue";
import Console from "../Console/Console.vue";
import BattleControls from "../BattleControls.vue";

import { mapGetters } from "vuex";

export default {
	
	computed: {
		...mapGetters([
			"getHero",
			"getMonster",
			"getCurrentTurn",
			"getCurrentRound",
			"getPopup",
			"getConsole"
		])
	},

	components: {
		"app-health-bar": HealthBar,
		"app-battle-log": BattleLog,
		"app-phrases": Phrases,
		"app-console": Console,
		"app-battle-controls": BattleControls
	},
	
};
</script>
