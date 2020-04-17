import Vue from 'vue';

const toUpperCase =
	Vue.filter('toUpperCase', str => str.toUpperCase())

export {toUpperCase};