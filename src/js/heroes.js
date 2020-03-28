import warriorImg from '../assets/img/warrior.png';
import archerImg from '../assets/img/archer.png';
import wizzardImg from '../assets/img/wizzard.png';

const heroes = [
	{
		type: 'Warrior',
		avatar: warriorImg,
		minDmg: 5,
		maxDmg: 15,
		healthPoints: 100,
		healingPotions: 1,
		currentHealth: 100
	},
	{
		type: 'Archer',
		avatar: archerImg,
		minDmg: 3,
		maxDmg: 20,
		healthPoints: 90,
		healingPotions: 1,
		currentHealth: 90
	},
	{
		type: 'Wizzard',
		avatar: wizzardImg,
		minDmg: 1,
		maxDmg: 25,
		healthPoints: 70,
		healingPotions: 2,
		currentHealth: 70
	}
]

export default heroes;