<template>
	<div class="sound-options">
		<div class="sound-options__music">
			<button class="font-s" @click="toggleMusic">
				 Music: {{musicEnabled ? 'ON' : 'OFF'}} 
				</button>
			<audio 
				ref="music" 
				src="../assets/sound/bg.mp3" 
				type="audio/mp3" 
				loop>
			</audio>
		</div>
		<div class="sound-options__sound">
			<button class="font-s"
				@click="toggleSound"> 
				Sound: {{soundEnabled ? "ON" : "OFF"}}
			</button>
			<audio
				ref="sound"
				:src="getSoundOptions.soundToPlay"
				type="audio/mp3">
			</audio>
		</div>
	</div>
</template>

<script>
import {mapGetters} from 'vuex'
import * as constants from '@/js/helpers/constants'

export default {
	data() {
		return {
			musicEnabled: true,
			soundEnabled: true,
		}
	},
	mounted() {
		this.$refs.music.volume = 0.01;
		this.$refs.sound.volume = 0.05;

	},
	computed: {
		...mapGetters([
			'getSoundOptions',
			'getCurrentScreen',
			'getCurrentTurn'
		])
	},
	methods: {
		toggleMusic() {
			this.musicEnabled ? this.$refs.music.muted = true : this.$refs.music.muted = false;
			this.musicEnabled = !this.musicEnabled;
		},
		toggleSound() {
			this.soundEnabled = !this.soundEnabled;
		}
	},
	watch: {
		//watching vuex turn change
		// each turn - play sound
		'getCurrentTurn.id': function() {
			if(this.soundEnabled && this.getCurrentScreen === constants.BATTLE_SCREEN) {
				this.$refs.sound.play()
			}
		},
		// start playing music after change screen 
		'getCurrentScreen': function() {
			this.$refs.music.play();
		}
	}
}
</script>