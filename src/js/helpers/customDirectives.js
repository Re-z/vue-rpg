import Vue from 'vue';
import {getRandomArrayItem} from '@/js/helpers';

const colorize = 
	Vue.directive('colorize', {
		// el in directive - is DOM element
		bind: (el) => {
			const colors = ['#f9fb4f','#13f9f6', '#40a6fa', '#f03df8', '#5fe776', '#ff0000', '#8c15e9', '#22ff00'];
			const arr = el.textContent.split('');
			// adding span tag to each letter and set color
			let colorizedItems = arr.map(char => {
				const randomColor = getRandomArrayItem(colors);
				return `<span style='color: ${randomColor}'">${char}</span>`
			})
			//converting back to string and inserting to DOM
			const output = colorizedItems.join('');
			el.innerHTML = output;
	}
})
export {colorize}