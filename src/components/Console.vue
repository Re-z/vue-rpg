<template>
	<div class="console">
		<p class="console__item">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum aut quia suscipit impedit consequatur amet ut, nobis accusantium ipsa reiciendis temporibus veniam omnis vero ad nostrum nam pariatur fugiat blanditiis totam adipisci iusto inventore delectus reprehenderit! Odit doloremque impedit assumenda exercitationem a eveniet deleniti, reprehenderit ratione consectetur quas error eligendi?</p>
		<p class="console__item">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum aut quia suscipit impedit consequatur amet ut, nobis accusantium ipsa reiciendis temporibus veniam omnis vero ad nostrum nam pariatur fugiat blanditiis totam adipisci iusto inventore delectus reprehenderit! Odit doloremque impedit assumenda exercitationem a eveniet deleniti, reprehenderit ratione consectetur quas error eligendi?</p>
		<p class="console__item">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum aut quia suscipit impedit consequatur amet ut, nobis accusantium ipsa reiciendis temporibus veniam omnis vero ad nostrum nam pariatur fugiat blanditiis totam adipisci iusto inventore delectus reprehenderit! Odit doloremque impedit assumenda exercitationem a eveniet deleniti, reprehenderit ratione consectetur quas error eligendi?</p>
		<p class="console__item">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum aut quia suscipit impedit consequatur amet ut, nobis accusantium ipsa reiciendis temporibus veniam omnis vero ad nostrum nam pariatur fugiat blanditiis totam adipisci iusto inventore delectus reprehenderit! Odit doloremque impedit assumenda exercitationem a eveniet deleniti, reprehenderit ratione consectetur quas error eligendi?</p>
	
		<input 
			autofocus
			v-model="inputValue"
			class="console__input">
	</div>
</template>

<script>
export default {
	data() {
		return {
			inputValue: ''
		}
	},
	methods: {
		
	}
}
</script>

<style lang="scss">
	.console {
		padding: 40px 20px 0 20px;
		background: black;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 1000;
		&__item {
			color: white;
			margin-bottom: 10px;
		}
		&__input {
			margin-top: 80px;
			width: 100%;
			// margin-bottom: 40px;
		}
	}
</style>