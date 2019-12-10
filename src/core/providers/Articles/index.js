import Api from '../api'

const articlesURL = '/articles'

const Articles = {
  readAll() {
    return Api.request(articlesURL, { method: 'GET' })
  },
  createArticle(params) {
    return Api.request(articlesURL, { data: params, method: 'POST' })
  },
  deleteArticle(params) {
    return Api.request(articlesURL, { data: params, method: 'DELETE' })
  },
}

export default Articles
