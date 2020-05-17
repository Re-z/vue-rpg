
// avatars
import FatPalladinImg from "../assets/monsters/fat-paladin/fat-paladin.png";
import CursedDollImg from "../assets/monsters/cursed-doll/cursed-doll.png";
import GladiatorImg from "../assets/monsters/gladiator/gladiator.png";
import PirateImg from "../assets/monsters/pirate/pirate.png";

// backgrounds
import burningCastle from "../assets/monsters/fat-paladin/burningCastle.jpg"
import necroCastle from "../assets/monsters/cursed-doll/necroCastle.jpg"
import gladiatorArena from "../assets/monsters/gladiator/gladiatorArena.jpg"
import pirateShip from "../assets/monsters/pirate/ship.jpg"

const monsters = [
	{
		type: "Pirate",
		avatar: PirateImg,
		minDmg: 5,
		maxDmg: 12,
		healthPoints: 70,
		currentHealth: 70,
		backgroundImg: pirateShip,
		dodgeChance: 0,
		phrases: [
			'Ho-ho-ho',
			'Where is my parrot?',
		]
	},
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
			'I`m gonna burn your ass!',
			'God bless my sword!',
			'I got a power!',
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
			'Feel my dark magic!',
			'I will live forever!',
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
		dodgeChance: 5,
		phrases: [
			'I`m gonna smash your head!',
			'Feel the power of my sword!',
			'Ave Caesar!',
		]
	},
	
]
export default monsters;