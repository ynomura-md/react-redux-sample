import { createStore, compose, applyMiddleware } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import rootReducer from '../reducers'


export default function configureStore(history, initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(routerMiddleware(history))
    )
  )
  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers')
      store.replaceReducer(nextReducer)
    })
  }
  return store
}

/*
export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState
  )

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers')
      store.replaceReducer(nextReducer)
    })
  }
  return store
}
*/
