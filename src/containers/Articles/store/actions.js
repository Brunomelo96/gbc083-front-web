export const types = {
  READ_ALL: 'ARTICLES/READ_ALL',
  SET_ARTICLES: 'ARTICLES/SET_ARTICLES',
  SET_LOADING: 'ARTICLES/LOADING',
}

export const actions = {
  readAll: () => ({ type: types.READ_ALL }),
  setArticles: (articles) => ({ type: types.SET_ARTICLES, articles }),
  setLoading: (isLoading) => ({ type: types.SET_LOADING, isLoading }),
}
