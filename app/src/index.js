import React from 'react'
import { render } from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { Provider } from 'react-redux'
import rootReducer from './reducers/rootReducer.js'
import App from './components/App'
import './styles/main.styl'

const logger = createLogger()

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, logger)
)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)