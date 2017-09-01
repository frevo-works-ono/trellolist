import axios from 'axios'

export const webClient = axios.create({
  params: {
    key: '<API Key>',
    token: '<Token>'
  }
})
