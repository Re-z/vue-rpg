<template>
	<div class="container">
		<app-intro v-if="getCurrentScreen === 'intro'"></app-intro>
		<app-hero-choose v-if="getCurrentScreen === 'heroChoose'"></app-hero-choose>

	</div>



</template>

<script>
import {mapGetters} from 'vuex'
export default {
	computed: {
		...mapGetters(['getCurrentScreen'])
	}
}
</script>




<style lang="scss">
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: 'Roboto', sans-serif;
	}
	.container {
		padding: 200px 20px;
		max-width: 1400px;
		display: block;
		margin: 0 auto;
		outline: 1px solid red;
	}
</style>