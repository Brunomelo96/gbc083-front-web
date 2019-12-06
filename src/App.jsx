import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import store from './store/store'
import Main from './containers/Main'

const App = () => (
  <Provider store={store}>
    <Router>
      <Main />
    </Router>
  </Provider>
)

export default App
