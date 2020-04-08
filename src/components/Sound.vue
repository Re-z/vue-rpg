<template>
	<div class="sound-options">
		<div class="sound-options__music">
			<button @click="toggleMusic"> {{musicBtnText}} </button>
			<audio 
				ref="music" 
				src="../assets/sound/bg.mp3" 
				type="audio/mp3" 
				autoplay 
				loop
			>
			</audio>
		</div>
		<div class="sound-options__sound">
			<button @click="toggleSound"> {{soundBtnText}} </button>
			<audio
				ref="sound"
				:src="getSoundToPlay" 
				type="audio/mp3"
			>
			</audio>
		</div>
	</div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
	data() {
		return {
			musicBtnText: 'Disable music', //Disable/enable music,
			soundBtnText: 'Disable sound',
			soundEnabled: true,
		}
	},
	mounted() {
		this.$refs.music.volume = 0.00;
		this.$refs.sound.volume = 0.01;
		this.$refs.music.play();
	},
	computed: {
		...mapGetters([
			'getMonster',
			'getSoundToPlay',
			'getCurrentScreen',
			'getCurrentTurn'
		])
	},
	methods: {
		toggleMusic() {
			if(this.$refs.music.muted === false) {
				this.$refs.music.muted = true;
				this.musicBtnText = "Enable music"
			} else {
				this.$refs.music.muted = false;
				this.musicBtnText = "Disable music"
			}
		},
		toggleSound() {
			if(this.soundEnabled === false) {
				this.soundEnabled = true;
				this.soundBtnText = "Disable sound"
			} else {
				this.soundEnabled = false;
				this.soundBtnText = "Enable sound"
			}
		}
	},
	watch: {
		//watching vuex monster health state,
		//if it changing - play hit sound
		'getMonster.currentHealth': function() {
			if(this.soundEnabled && this.getCurrentScreen === 'battle' && this.getCurrentTurn.id != 1) {
				this.$refs.sound.play()
			}
		}
	}
}
</script>