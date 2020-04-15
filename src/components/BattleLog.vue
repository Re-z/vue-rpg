<template>
	<div class="log">
		<p class="log__title">Turn {{getCurrentTurn.id -1}} Results:</p>
		<div class="log__box">
			<p>{{getLog.player}}</p>
			<p>{{getLog.monster}}</p>
		</div>
	</div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
	computed: {
		...mapGetters(["getCurrentTurn", "getLog"])
	},
	
}
</script>

