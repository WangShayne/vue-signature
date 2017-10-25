import vueSignature from './vue-signature.vue'

const signature = { install (Vue, options) { 
    Vue.component(vueSignature.name, vueSignature)
} } 

export default signature 
