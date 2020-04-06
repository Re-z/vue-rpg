import warriorImg from '../assets/img/warrior.png';
import archerImg from '../assets/img/archer.png';
import wizzardImg from '../assets/img/wizzard.png';

import axe from '../assets/img/axe.png';
import deodorant from '../assets/img/deodorant.png';

import bow from '../assets/img/bow.png';
import rifle from '../assets/img/rifle.png';

import lightning from '../assets/img/lightning.png';
import fireball from '../assets/img/fireball.png';



const heroes = [
	{
		name: '',
		type: 'Warrior',
		descr: 'This hero is best bla bla, choose this hero!',
		avatar: warriorImg,
		healthPoints: 100,
		healingPotions: 1,
		currentHealth: 100,
		simpleAttack: {
			img: axe,
			minDmg: 5,
			maxDmg: 15,
		},
		specialAttack: {
			img: deodorant,
			minDmg: 15,
			maxDmg: 20,
			descr: ''
		}
	},
	{
		name: '',
		type: 'Archer',
		descr: 'This hero is best bla bla, choose this hero!',
		avatar: archerImg,
		healthPoints: 90,
		healingPotions: 1,
		currentHealth: 90,
		simpleAttack: {
			img: bow,
			minDmg: 3,
			maxDmg: 20,
		},
		specialAttack: {
			img: rifle,
			minDmg: 10,
			maxDmg: 5,
			descr: ''
		}
	},
	{
		name: '',
		type: 'Wizzard',
		descr: 'This hero is best bla bla, choose this hero!',
		avatar: wizzardImg,
		healthPoints: 70,
		healingPotions: 2,
		currentHealth: 70,
		simpleAttack: {
			img: lightning,
			minDmg: 1,
			maxDmg: 25,
		},
		specialAttack: {
			img: fireball,
			minDmg: 20,
			maxDmg: 20,
			descr: ''
		}
	}
]

export default heroes;