import healingPotion from '../assets/img/potion.png'
import steroids from '../assets/img/steroids.png'
import burger from '../assets/img/burger.png'
const drop = [
	{
		title: 'You found healing potion',
		img: healingPotion,
		text: '',
		isVisible: true,
	},
	{
		title: 'You found steroids',
		img: steroids,
		text: 'Your damage quantifier increased by 0.2',
		isVisible: true,
	},
	{
		title: 'You found burger',
		img: burger,
		text: 'Your health is restored to maximum',
		isVisible: true,
	}

]
export default drop;