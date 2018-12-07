import {get } from './helpers'

const cartData = get('/api/cartData')
const address = get('/api/address')

export {
    cartData,
    address
}