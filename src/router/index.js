import Vue from 'vue'
import Router from 'vue-router'
import Address from '@/components/address'
import Cart from '@/components/cart'
import Toast from '@/components/toast'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            component: Toast
        },
        {
            path: '/address',
            component: Address
        }
    ]
})