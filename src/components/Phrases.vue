<template>
	<div class="phrases" v-if="getMonster.phrases">
		<p>{{randomPhrase}}</p>
	</div>
</template>

<script>
import {mapGetters} from 'vuex';
import {getRandomArrayItem} from '../js/helpers'
	export default {
		computed: {
			...mapGetters(['getMonster']),
			randomPhrase() {
				return getRandomArrayItem(this.getMonster.phrases)
			}
		},
	}
</script>

