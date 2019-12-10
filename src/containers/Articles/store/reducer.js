import createReducer from '../../../core/utils/redux'
import { types as ArticlesTypes } from './actions'

const init = {
  articles: [],
  isLoading: false,
}

const reducer = {
  [ArticlesTypes.SET_ARTICLES](state, { articles }) {
    return { ...state, articles }
  },
  [ArticlesTypes.SET_LOADING](state, { isLoading }) {
    return { ...state, isLoading }
  },
}

export default createReducer(init, reducer)
