// import Vue from 'vue'
import { CARD } from '../mutation-types'
import * as common from './common'

const card = {
  namespaced: true,
  state: {
    cards: [],
    card: {
      id: '',
      name: '',
      limitDate: '',
      status: 0
    }
  },
  getters: {
    cards: state => state.cards
  },
  mutations: {
    [CARD.FIND_ALL] (state, cards) {
      state.cards = cards
    }
  },
  actions: {
    [CARD.FIND_ALL] ({ commit }, boardId) {
      common.webClient.get('https://api.trello.com/1/boards/' + boardId + '/cards', {
        params: {
          fields: 'name'
        }
      }).then(response => {
        commit(CARD.FIND_ALL, response.data)
      })
    }
  }
}
export default card
