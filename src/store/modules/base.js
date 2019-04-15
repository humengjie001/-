import * as types from '../mutation-types'
const state = {
    userData: {
        ID:'',
        itemData:[],//选中的订单
        adminiData:[],//这是默认收获地址
        upminiData:[] //这是选中修改的地址
    },
}
const getters = {
    userData: state => state.userData,
}
const actions = {
    setUserData({ commit, state }, payload) {
        commit(types.USER_DATA, payload);
    },
}
const mutations = {
    [types.USER_DATA](state, payload) {
        state.userData={...state.userData,...payload}
    },
}
export default { state, getters, actions, mutations }