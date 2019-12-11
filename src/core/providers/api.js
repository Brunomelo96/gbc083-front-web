import api from './base'

const apiURL = 'https://gbc083.herokuapp.com/api'
export const baseApi = api(apiURL)

const Api = {
  request(path, options) {
    return baseApi.request(path, options)
  },
}

export default Api
