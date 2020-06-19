import healingPotion from '../assets/img/potion.png'
import steroids from '../assets/img/steroids.png'
import burger from '../assets/img/burger.png'
import book from '../assets/img/book.png'
const drop = [
	{
		title: 'You found healing potion',
		type: 'drop',
		dropItem: 'potion',
		img: healingPotion,
		text: 'Healing potion +1',
		isVisible: true,
	},
	{
		title: 'You found steroids',
		type: 'drop',
		dropItem: 'steroids',
		img: steroids,
		text: 'Your damage quantifier increased by 0.2',
		isVisible: true,
	},
	{
		title: 'You found vilna kassa and ordered Big tasty menu',
		type: 'drop',
		dropItem: 'big tasty',
		img: burger,
		text: 'Your health is restored to maximum',
		isVisible: true,
	},
	{
		title: 'You found old book with curse',
		type: 'drop',
		dropItem: 'book',
		img: book,
		text: 'You cursed your next enemy and he loses half of health points',
		isVisible: true,
	}

]
export default drop;