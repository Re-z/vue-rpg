<template>
	<div class="sound-options">
		<div class="sound-options__music">
			<button class="font-s" @click="toggleMusic">
				 Music: {{musicStatus}} 
				</button>
			<audio 
				ref="music" 
				src="../assets/sound/bg.mp3" 
				type="audio/mp3" 
				loop
			>
			</audio>
		</div>
		<div class="sound-options__sound">
			<button class="font-s" @click="toggleSound"> 
				Sound: {{soundStatus}}
			</button>
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
			musicStatus: 'ON', //Disable/enable music,
			soundStatus: 'ON',
			soundEnabled: true,
		}
	},
	mounted() {
		this.$refs.music.volume = 0.00;
		this.$refs.sound.volume = 0.04;
		//fix for avoid autoplay blocking in browsers
		document.body.addEventListener('mousemove', () => {
			this.$refs.music.play();
		}, {once: true})
	},
	computed: {
		...mapGetters([
			'getMonster',
			'getHero',
			'getSoundToPlay',
			'getCurrentScreen',
			'getCurrentTurn'
		])
	},
	methods: {
		
		toggleMusic() {
			if(this.$refs.music.muted === false) {
				this.$refs.music.muted = true;
				this.musicStatus = "OFF"
			} else {
				this.$refs.music.muted = false;
				this.musicStatus = "ON"
			}
		},
		toggleSound() {
			if(this.soundEnabled === false) {
				this.soundEnabled = true;
				this.soundStatus = "ON"
			} else {
				this.soundEnabled = false;
				this.soundStatus = "OFF"
			}
		}
	},
	watch: {
		//watching vuex turn change
		// each turn - play sound
		'getCurrentTurn.id': function() {
			if(this.soundEnabled && this.getCurrentScreen === 'battle') {
				this.$refs.sound.play()
			}
		},
	}
}
</script>