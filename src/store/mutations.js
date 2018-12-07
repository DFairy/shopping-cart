import * as type from './mutation-types'

const mutations={
    [type.SET_GOODS](state,goods){
        state.goods=goods
    }
}

export default mutations