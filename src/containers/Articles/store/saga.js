import {
  all, takeLatest, call, put
} from 'redux-saga/effects'
import { toast } from 'react-toastify'
import ArticlesProvider from '../../../core/providers/Articles'
import { types as ArticleTypes, actions as ArticlesActions } from './actions'

export function* readAll() {
  try {
    yield put(ArticlesActions.setLoading(true))
    const response = yield call(ArticlesProvider.readAll)
    yield put(ArticlesActions.setArticles(response))
  } catch (error) {
    console.log(error)
  } finally {
    yield put(ArticlesActions.setLoading(false))
  }
}

export function* createArticle({ article }) {
  try {
    yield put(ArticlesActions.setLoading(true))
    const createResponse = yield call(ArticlesProvider.createArticle, article)
    const response = yield call(ArticlesProvider.readAll)
    yield put(ArticlesActions.setArticles(response))
    if (createResponse.authenticated) {
      toast.success('Authenticated!')
    }
    if (createResponse.healthy) {
      toast.success('Healthy!')
    }
  } catch (error) {
    console.log(error)
  } finally {
    yield put(ArticlesActions.setLoading(false))
  }
}

export default function* root() {
  yield all([
    takeLatest(ArticleTypes.READ_ALL, readAll),
    takeLatest(ArticleTypes.CREATE_ARTICLE, createArticle),
  ])
}
