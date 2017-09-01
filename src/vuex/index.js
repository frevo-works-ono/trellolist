
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import board from './modules/board'
import card from './modules/card'
import session from './modules/session'

const store = new Vuex.Store({
  modules: {
    card,
    board,
    session
  }
})

export default store
