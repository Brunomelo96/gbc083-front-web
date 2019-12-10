import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import store from './store/store'
import Main from './containers/Main'
import GlobalStyle from './core/utils/global-styled'

const App = () => (
  <Provider store={store}>
    <GlobalStyle />
    <Router>
      <Main />
    </Router>
  </Provider>
)

export default App
