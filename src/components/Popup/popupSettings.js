import skull from '@/assets/img/skull.png'
import medal from '@/assets/img/medal.png'


export const popupSettings = {
	heroDied: {
		isVisible: true,
		type: 'heroDied',
		title: 'You died',
		img: skull,
		text: 'Rest in peace brave hero! Your death will be revenged.'
	},
	heroWon: {
		isVisible: true,
		type: 'heroWon',
		title: 'Congratulations! You won this game.',
		img: medal,
		text: 'All monsters have been slayed. You can be proud of yourself.'
	}
}

