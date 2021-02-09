import healingPotion from '../assets/img/potion.png'
import steroids from '../assets/img/steroids.png'
import burger from '../assets/img/burger.png'
import book from '../assets/img/book.png'

export const dropConstants = {
	TYPE_DROP: 'TYPE_DROP',
	POTION: 'POTION',
	STEROIDS: 'STEROIDS',
	BIG_TASTY_MENU: 'BIG_TASTY_MENU',
	BOOK: 'BOOK'
}

const drop = [
	{
		title: 'You found healing potion',
		type: dropConstants.TYPE_DROP,
		dropItem: dropConstants.POTION,
		img: healingPotion,
		text: 'Healing potion +1',
		isVisible: true,
	},
	{
		title: 'You found steroids',
		type: dropConstants.TYPE_DROP,
		dropItem: dropConstants.STEROIDS,
		img: steroids,
		text: 'Your damage quantifier increased by 0.2',
		isVisible: true,
	},
	{
		title: 'You found vilna kassa and ordered Big tasty menu',
		type: dropConstants.TYPE_DROP,
		dropItem: dropConstants.BIG_TASTY_MENU,
		img: burger,
		text: 'Your health is restored to maximum',
		isVisible: true,
	},
	{
		title: 'You found old book with curse',
		type: dropConstants.TYPE_DROP,
		dropItem: dropConstants.BOOK,
		img: book,
		text: 'You cursed your next enemy and he loses half of health points',
		isVisible: true,
	}

]
export default drop;