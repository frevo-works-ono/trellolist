// import Vue from 'vue'
import { SESSION } from '../mutation-types'
import * as common from './common'

const session = {
  namespaced: true,
  state: {
    userId: ''
  },
  getters: {
    userId: state => state.userId
  },
  mutations: {
    [SESSION.SAVE] (state, userId) {
      state.userId = userId
    }
  },
  actions: {
    async [SESSION.SAVE] ({ commit }, userId) {
      let response = await common.webClient.get('https://api.trello.com/1/members/' + userId)
      if (response.status === 200) {
        console.log(response)
        commit(SESSION.SAVE, userId)
        return true
      }
      return false
    }
  }
}
export default session
