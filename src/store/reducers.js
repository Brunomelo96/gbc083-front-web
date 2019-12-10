import { combineReducers } from 'redux'

import articles from '../containers/Articles/store/reducer'
import main from '../containers/Main/store/reducer'

export default combineReducers({
  main,
  articles,
})
