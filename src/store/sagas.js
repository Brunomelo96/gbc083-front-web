import { fork, all } from 'redux-saga/effects'

import Main from '../containers/Main/store/saga'
import Articles from '../containers/Articles/store/saga'

function* sagas() {
  yield all([
    fork(Main),
    fork(Articles),
  ])
}

export default sagas
