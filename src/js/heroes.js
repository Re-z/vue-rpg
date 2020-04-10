import warriorImg from '../assets/img/warrior.png';
import archerImg from '../assets/img/archer.png';
import wizzardImg from '../assets/img/wizzard.png';

import axe from '../assets/img/axe.png';
import deodorant from '../assets/img/deodorant.png';

import bow from '../assets/img/bow.png';
import rifle from '../assets/img/rifle.png';

import lightning from '../assets/img/lightning.png';
import fireball from '../assets/img/fireball.png';

import warriorSimpleSound from '../assets/heroes/warrior/hit.mp3'
import warriorSpecialSound from '../assets/heroes/warrior/spray.mp3'

import archerSimpleSound from '../assets/heroes/archer/arrow.mp3'
import archerSpecialSound from '../assets/heroes/archer/gun.mp3'

import wizzardSimpleSound from '../assets/heroes/wizzard/lightning.mp3'
import wizzardSpecialSound from '../assets/heroes/wizzard/fireball.mp3'

import heal from '../assets/sound/heal.mp3'

const heroes = [
	{
		name: '',
		type: 'Warrior',
		descr: 'He has 3 axes. Two in his hands and one in his pocket. That\'s why he is so attractive. Girls like good smelling warriors. He uses his axe deodorant as special weapon against dirty monsters',
		avatar: warriorImg,
		healthPoints: 100,
		heal: {
			potions: 1,
			sound: heal
		},
		currentHealth: 100,
		simpleAttack: {
			img: axe,
			minDmg: 40,
			maxDmg: 50,
			sound: warriorSimpleSound
		},
		specialAttack: {
			img: deodorant,
			minDmg: 15,
			maxDmg: 20,
			descr: '',
			sound: warriorSpecialSound
		}
	},
	{
		name: '',
		type: 'Archer',
		descr: 'This hero is best bla bla, choose this hero!',
		avatar: archerImg,
		healthPoints: 90,
		heal: {
			potions: 1,
			sound: heal
		},
		currentHealth: 90,
		simpleAttack: {
			img: bow,
			minDmg: 3,
			maxDmg: 20,
			sound: archerSimpleSound
		},
		specialAttack: {
			img: rifle,
			minDmg: 10,
			maxDmg: 25,
			descr: '',
			sound: archerSpecialSound
		}
	},
	{
		name: '',
		type: 'Wizzard',
		descr: 'This hero is best bla bla, choose this hero!',
		avatar: wizzardImg,
		healthPoints: 70,
		heal: {
			potions: 2,
			sound: heal
		},
		currentHealth: 70,
		simpleAttack: {
			img: lightning,
			minDmg: 1,
			maxDmg: 25,
			sound: wizzardSimpleSound
		},
		specialAttack: {
			img: fireball,
			minDmg: 20,
			maxDmg: 20,
			descr: '',
			sound: wizzardSpecialSound
		}
	}
]

export default heroes;