<template>
	<div class="sound-options">
		<div class="sound-options__music">
			<button class="font-s" @click="toggleMusic">
        Music: {{ isMusicEnabled ? 'ON' : 'OFF' }}
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
        Sound: {{ isSoundEnabled ? "ON" : "OFF" }}
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
			isMusicEnabled: true,
			isSoundEnabled: true,
		}
	},
	mounted() {
		this.$refs.music.volume = 0.1;
		this.$refs.sound.volume = 0.1;
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
			this.isMusicEnabled
          ? this.$refs.music.muted = true
          : this.$refs.music.muted = false;
			this.isMusicEnabled = !this.isMusicEnabled;
		},
		toggleSound() {
			this.isSoundEnabled = !this.isSoundEnabled;
		}
	},
	watch: {
		//watching vuex turn change
		// each turn - play sound
		'getCurrentTurn.id': function() {
			if(this.isSoundEnabled && this.getCurrentScreen === constants.BATTLE_SCREEN) {
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