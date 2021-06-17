import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import Vuex from 'vuex'
import dataStore from './storage/store'
import './filter'
import './axios'
import vueSwal from 'vue-swal'
import Swal from 'sweetalert2'

// call jquery and bootstrap 4.0
import jquery from 'jquery'
window.jQuery = jquery

require(["popper.js"], function(p) {
    window.Popper = p;
    require('bootstrap');
})

Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.use(Vuex)
Vue.use(vueSwal)
const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
})
window.Toast = Toast

const store = new Vuex.Store(
    dataStore
)

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')