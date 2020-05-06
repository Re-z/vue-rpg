export default function() {
	let body = document.querySelector('body');
	body.addEventListener('mouseover', (ev) => {
		const el = ev.target,
			tooltipAttr = el.getAttribute('data-tooltip')

		if(tooltipAttr) {
			// setTimeout(() => {
				const tooltipHtml = `<p class="tooltip">${tooltipAttr}</p>`;
				el.insertAdjacentHTML('beforeend', tooltipHtml)
			// }, 1000)
			
		}
	});
	body.addEventListener('mouseout', (ev) => {
		let el = ev.target;
		
		if(el.hasAttribute('data-tooltip')) {
			el.querySelector('.tooltip').remove()
		}

	})
}