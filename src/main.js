import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
// call jquery and bootstrap 4.0
import jquery from 'jquery'
window.jQuery = jquery
require(["popper.js"], function(p) {
    window.Popper = p;
    require('bootstrap');
});


Vue.config.productionTip = false
Vue.prototype.$http = axios

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')