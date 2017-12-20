import vueSignature from './vue-signature.vue'

const signature = {
    install: function(Vue, options) {
        Vue.component(vueSignature.name, vueSignature)
    }
}

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(signature);
}
export default signature
