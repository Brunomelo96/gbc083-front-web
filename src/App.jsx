import React from 'react'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { BrowserRouter as Router } from 'react-router-dom'
import store from './store/store'
import Main from './containers/Main'
import GlobalStyle from './core/utils/global-styled'

window.ENVIRONMENT = {
  contentType: 'application/json',
}

const App = () => (
  <Provider store={store}>
    <GlobalStyle />
    <Router>
      <Main />
    </Router>
    <ToastContainer autoClose={5000} />
  </Provider>
)

export default App
