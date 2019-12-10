import Api from '../api'

const articlesURL = '/signin'

const Articles = {
  signIn(params) {
    console.log(params, 'paramss')
    return Api.request(articlesURL, { data: params, method: 'POST' })
  },
}

export default Articles
