import Vue from 'vue'
import App from './App.vue'
import store from './store'

import Intro from './components/views/Intro'
import HeroChoose from './components/views/HeroChoose'
import Battle from './components/views/Battle'
import Monstropedia from '@/components/views/Monstropedia'
import HowToPlay from '@/components/views/HowToPlay'


import Popup from './components/Popup'
import Sound from './components/Sound'

import './assets/scss/global.scss'

Vue.component('app-intro', Intro)
Vue.component('app-hero-choose', HeroChoose)
Vue.component('app-battle', Battle)
Vue.component('app-sound', Sound)
Vue.component('app-monstropedia', Monstropedia)
Vue.component('app-how-to-play', HowToPlay)


Vue.component('app-popup', Popup)



new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
