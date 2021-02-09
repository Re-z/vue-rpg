import Vue from 'vue';
import lodash from "lodash";

Vue.directive('colorize', {
	// el in directive - is DOM element
	bind: (str) => {
		const colors = ['#f9fb4f','#13f9f6', '#40a6fa', '#f03df8', '#5fe776', '#ff0000', '#8c15e9', '#22ff00'];
		const arr = str.textContent.split('');
		// adding span tag to each letter and set color
		let colorizedItems = arr.map(char => {
			const randomColor = lodash.sample(colors);
			return `<span style='color: ${randomColor}'">${char}</span>`
		})
		//converting back to string and inserting to DOM
		const output = colorizedItems.join('');
		str.innerHTML = output;
	}
})