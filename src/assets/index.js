import VScrollbtn from './v-scrollbtn.vue'

VScrollbtn.install = function(Vue) {
    Vue.component('VScrollbtn', VScrollbtn)
}

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(VScrollbtn)
}

export default VScrollbtn

