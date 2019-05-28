import Vue from 'vue'
import App from './App.vue'
import VScrollbtn from './assets/index.js'
Vue.use(VScrollbtn)
new Vue({
  el: '#app',
  render: h => h(App)
})
