import Vue from 'vue'
import App from './App.vue'
import store from './store'


import Intro from './components/Intro'
import HeroChoose from './components/HeroChoose'

Vue.component('app-intro', Intro)
Vue.component('app-hero-choose', HeroChoose)

// Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
