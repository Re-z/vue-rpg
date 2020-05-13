export default function() {
	let body = document.querySelector('body');

	function addTooltip(ev) {
		const el = ev.target,
			tooltipAttr = el.getAttribute('data-tooltip');

		if(tooltipAttr) {
			//prevents disabling tooltip when element has children
			const firstChildNode = el.childNodes[0];
			if(firstChildNode) {
				firstChildNode.classList.add('no-events')
			}
			const tooltipHtml = `<p class="tooltip">${tooltipAttr}</p>`;
			el.insertAdjacentHTML('beforeend', tooltipHtml);

		}
	};
	function removeTooltip(ev) {
		const el = ev.target,
			tooltipAttr = el.getAttribute('data-tooltip');
		if(tooltipAttr) {
			const tooltip = el.querySelector('.tooltip');
			if(tooltip) {
				tooltip.remove();
			}
		}
	}

	body.addEventListener('mouseover', ev => addTooltip(ev));
	body.addEventListener('mouseout', ev => removeTooltip(ev));
}