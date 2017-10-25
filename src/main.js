import Vue from 'vue'
import App from './App.vue'
import vueSignature from "./lib/index.js"

Vue.use(vueSignature)

new Vue({
  el: '#app',
  render: h => h(App)
})
