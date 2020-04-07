<template>
	<div class="intro">
		<p class="intro__text">Lorem ipsumLorem ipsum	Lorem ipsum	 Lorem ipsum	 Lorem ipsum	Lorem ipsum	Lorem ipsum	Lorem ipsum	Lorem ipsum		</p>
		<div class="intro__btn-wrap">
			<button @click="changeScreenToNext">Start Game</button>
		</div>
	</div>
</template>

<script>
export default {
	methods: {
		changeScreenToNext() {
			this.$store.commit('changeScreen', 'heroChoose')
		}
	},
	mounted() {
		
	}
}
</script>

<style lang="scss">
	.intro {
		&__text {
			font-size: 24px;
			text-align: center;
		}
		&__btn-wrap {
			margin-top: 60px;
			text-align: center;
		}
	}
</style>