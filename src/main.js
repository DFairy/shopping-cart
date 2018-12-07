import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import '@/assets/css/base.css'
import '@/assets/css/reset.css'
import '@/assets/css/checkout.css'
import '@/assets/css/modal.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})