<template>
	<div class="main-wrap">
		<div class="container">
			<app-intro v-if="getCurrentScreen === 'intro'"></app-intro>
			<app-hero-choose v-if="getCurrentScreen === 'heroChoose'"></app-hero-choose>
			<app-battle v-if="getCurrentScreen === 'battle'"></app-battle>
		</div>
	</div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
	computed: {
		...mapGetters(["getCurrentScreen"])
	}
};
</script>

<style lang="scss">
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: "Roboto", sans-serif;
}
.main-wrap {
	position: relative;
	z-index: 10;
	&::before {
		background: url('./assets/img/bg.jpg') center center no-repeat;
		background-size: cover;
		height: 100vh;
		display: block;
		content: "";
		z-index: 1;
		position: fixed;
		left: 0;
		top: 0;
		bottom: 0;
		right: 0;
		z-index: -1;
		filter: blur(3px)
	}
}
.cup {
	cursor: pointer;
}
.container {
	padding: 200px 20px;
	max-width: 800px;
	display: block;
	margin: 0 auto;
	outline: 1px solid red;
}
</style>
