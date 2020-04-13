//archer
import archerImg from '../assets/heroes/archer/archer.png';
import bow from '../assets/heroes/archer/bow.png';
import rifle from '../assets/heroes/archer/rifle.png';
import archerSimpleSound from '../assets/heroes/archer/arrow.mp3'
import archerSpecialSound from '../assets/heroes/archer/gun.mp3'
//wizzard
import wizzardImg from '../assets/heroes/wizzard/wizzard.png';
import lightning from '../assets/heroes/wizzard/lightning.png';
import fireball from '../assets/heroes/wizzard/fireball.png';
import wizzardSimpleSound from '../assets/heroes/wizzard/lightning.mp3'
import wizzardSpecialSound from '../assets/heroes/wizzard/fireball.mp3'
//warrior
import warriorImg from '../assets/heroes/warrior/warrior.png';
import axe from '../assets/heroes/warrior/axe.png';
import deodorant from '../assets/heroes/warrior/deodorant.png';
import warriorSimpleSound from '../assets/heroes/warrior/hit.mp3'
import warriorSpecialSound from '../assets/heroes/warrior/spray.mp3'




import heal from '../assets/sound/heal.mp3'

const heroes = [
	{
		name: '',
		type: 'Warrior',
		descr: 'He has 3 axes: two in his hands and one in his pocket. That\'s why he is so attractive. He uses this third axe as special weapon against dirty monsters.',
		avatar: warriorImg,
		healthPoints: 100,
		critChance: 5,
		heal: {
			potions: 1,
		},
		currentHealth: 100,
		simpleAttack: {
			descr: 'Two axes',
			img: axe,
			minDmg: 40,
			maxDmg: 50,
			sound: warriorSimpleSound
		},
		specialAttack: {
			img: deodorant,
			minDmg: 15,
			maxDmg: 20,
			descr: 'Axe effect',
			sound: warriorSpecialSound
		}
	},
	{
		name: '',
		type: 'Archer',
		descr: 'When he was young, he liked to shot birds with slingshot. When he turned 18, his mamma bought him a bow. Since that time, it became his favorite weapon.',
		avatar: archerImg,
		healthPoints: 90,
		critChance: 50,
		heal: {
			potions: 1,
		},
		currentHealth: 90,
		simpleAttack: {
			descr: 'Bow',
			img: bow,
			minDmg: 3,
			maxDmg: 20,
			sound: archerSimpleSound
		},
		specialAttack: {
			img: rifle,
			minDmg: 10,
			maxDmg: 25,
			descr: 'Sniper rifle',
			sound: archerSpecialSound
		}
	},
	{
		name: '',
		type: 'Wizzard',
		descr: 'Unfortunately, he cannot turn water into wine, like Jesus. But definitely can burn your ass with another magic.',
		avatar: wizzardImg,
		healthPoints: 70,
		critChance: 5,
		heal: {
			potions: 2,
		},
		currentHealth: 70,
		simpleAttack: {
			descr: 'Lightning spell',
			img: lightning,
			minDmg: 1,
			maxDmg: 25,
			sound: wizzardSimpleSound
		},
		specialAttack: {
			img: fireball,
			minDmg: 20,
			maxDmg: 20,
			descr: 'Fireball spell',
			sound: wizzardSpecialSound
		}
	}
]

export default heroes;