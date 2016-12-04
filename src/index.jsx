import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

//import App from '../containers/App'
import configureStore from '../store/configureStore'

import injectTapEventPlugin from 'react-tap-event-plugin';
import routes from './routes'

injectTapEventPlugin()

const store = configureStore(browserHistory, window.__initialState__)

const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById("root")
)
