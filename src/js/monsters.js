
// avatars
import FatPalladinImg from "../assets/img/fat-paladin.png";
import CursedDollImg from "../assets/img/cursed-doll.png";
import GladiatorImg from "../assets/img/gladiator.png";
// backgrounds
import burningCastle from "../assets/img/bg/burningCastle.png"
import necroCastle from "../assets/img/bg/necroCastle.png"
import gladiatorArena from "../assets/img/bg/gladiatorArena.jpg"

const monsters = [
	{
		type: "Fat Palladin",
		avatar: FatPalladinImg,
		minDmg: 1,
		maxDmg: 8,
		healthPoints: 100,
		currentHealth: 100,
		backgroundImg: burningCastle,
		dodgeChance: 10,
		phrases: [
			'I`m gonna burn your ass',
			'Do you have something to eat?',
			'I`m not shy about my weight',
		]
	},
	{
		type: "Cursed Doll",
		avatar: CursedDollImg,
		minDmg: 1,
		maxDmg: 15,
		healthPoints: 60,
		currentHealth: 60,
		backgroundImg: necroCastle,
		dodgeChance: 15,
		phrases: [
			'Let`s play babe!',
			'I`m barbie girl in a barbie world',
			'Do you like my dress?',
		]

	},
	{
		type: "Gladiator",
		avatar: GladiatorImg,
		minDmg: 6,
		maxDmg: 10,
		healthPoints: 90,
		currentHealth: 90,
		backgroundImg: gladiatorArena,
		dodgeChance: 10,
		phrases: [
			'I`m gonna smash your head!',
			'Feel the power of my sword!',
			'Ave Caesar!',
		]
	}
]
export default monsters;