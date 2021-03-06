export const types = {
  READ_ALL: 'ARTICLES/READ_ALL',
  SET_ARTICLES: 'ARTICLES/SET_ARTICLES',
  SET_LOADING: 'ARTICLES/LOADING',
  CREATE_ARTICLE: 'ARTICLES/CREATE_ARTICLE',
}

export const actions = {
  readAll: () => ({ type: types.READ_ALL }),
  setArticles: (articles) => ({ type: types.SET_ARTICLES, articles }),
  setLoading: (isLoading) => ({ type: types.SET_LOADING, isLoading }),
  createArticle: (article) => ({ type: types.CREATE_ARTICLE, article }),
}
