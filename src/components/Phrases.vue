<template>
	<div class="phrases" v-if="getMonster.phrases">
		<p>{{randomPhrase}}</p>
	</div>
</template>

<script>
import {mapGetters} from 'vuex';
import lodash from "lodash";

	export default {
		computed: {
			...mapGetters(['getMonster']),
			randomPhrase() {
				return lodash.sample(this.getMonster.phrases)
			}
		},
	}
</script>

