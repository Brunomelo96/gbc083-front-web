import axios from 'axios'
import { defaultsDeep } from 'lodash'
import qs from 'qs'

const getConfig = () => ({
  headers: {
    Accept: 'application/json',
    'Accept-Language': 'pt-BR',
  },
  paramsSerializer(params) {
    return qs.stringify(params, { arrayFormat: 'repeat' })
  },
})

const api = (baseURL, config) => {
  const axiosApi = axios.create({
    mode: 'cors',
    baseURL,
    ...config,
  })

  axiosApi.request = (path, options) => {
    const mergedOptions = defaultsDeep(options, getConfig())

    return axiosApi(path, mergedOptions).then((resp) => resp.data)
  }

  return axiosApi
}

export default api
