import {
  all, takeLatest, call, put
} from 'redux-saga/effects'
import MainProvider from '../../../core/providers/Main'
import { types as MainTypes, actions as MainActions } from './actions'

export function* signIn({ publicKey }) {
  try {
    yield put(MainActions.setLoading(true))
    const response = yield call(MainProvider.signIn, publicKey)
    yield put(MainActions.setServerPublicKey(response.public_key))
    yield put(MainActions.setServerSecret(response.secret))
    yield put(MainActions.setSignedIn(true))
  } catch (error) {
    console.log(error)
  } finally {
    yield put(MainActions.setLoading(false))
  }
}

export function* signOut() {
  try {
    yield put(MainActions.setLoading(true))
    yield call(MainProvider.signOut)
    yield put(MainActions.setSignedIn(false))
  } catch (error) {
    console.log(error)
  } finally {
    yield put(MainActions.setLoading(false))
  }
}

export default function* root() {
  yield all([
    takeLatest(MainTypes.SIGN_IN, signIn),
    takeLatest(MainTypes.SIGN_OUT, signOut),
  ])
}
