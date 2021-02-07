import Vue from 'vue'
import App from './App.vue'
import store from './store'

import Intro from '@/components/views/Intro'
import HeroChoose from '@/components/views/HeroChoose'
import Battle from '@/components/views/Battle'
import Monstropedia from '@/components/views/Monstropedia'
import HowToPlay from '@/components/views/HowToPlay'
import Popup from '@/components/Popup'
import Sound from '@/components/Sound'

import '@/assets/scss/global.scss'
import '@/js/helpers/customDirectives'
import '@/js/helpers/customFilters'

Vue.component('Intro', Intro)
Vue.component('HeroChoose', HeroChoose)
Vue.component('Battle', Battle)
Vue.component('app-sound', Sound)
Vue.component('Monstropedia', Monstropedia)
Vue.component('HowToPlay', HowToPlay)


Vue.component('Popup', Popup);





new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
