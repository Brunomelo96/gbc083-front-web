import Api from '../api'

const articlesURL = '/articles'

const Articles = {
  readAll() {
    return Api.request(articlesURL, { method: 'GET' })
  },
}

export default Articles
