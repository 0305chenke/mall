import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        num: 0,
        msg: 'abcdefg'
    },
    mutations: {
        numAdd(state) {
            state.num++
        }
    },
    getters: {
        reverseMsg(state) {
            return state.msg.split('').reverse().join('')
        },
        add(state) {
            return state.num + 20
        }
    },
    actions: {

    },
    modules: {}
})