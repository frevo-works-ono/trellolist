// import Vue from 'vue'
import { BOARD } from '../mutation-types'
import * as common from './common'

const board = {
  namespaced: true,
  state: {
    boards: [],
    board: {
      id: '',
      name: ''
    }
  },
  getters: {
    boards: state => state.boards
  },
  mutations: {
    [BOARD.FIND_ALL] (state, boards) {
      state.boards = boards
    }
  },
  actions: {
    [BOARD.FIND_ALL] ({ commit }, userId) {
      common.webClient.get('https://api.trello.com/1/members/' + userId + '/boards', {
        params: {
          fields: 'name'
        }
      }).then(response => {
        console.log(response)
        commit(BOARD.FIND_ALL, response.data)
      }).catch(response => {
        console.log(response)
      })
    }
  }
}
export default board
