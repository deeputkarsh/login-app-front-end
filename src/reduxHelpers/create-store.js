import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { middleware as reduxPackMiddleware } from 'redux-pack'
import rootReducer from './reducers'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const middleware = [thunk, reduxPackMiddleware]
const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['auth']
}

let enhancers = []
const persistedReducer = persistReducer(persistConfig, rootReducer)

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

let composeEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)
const initialState = { appState: {}, auth: {} }
const store = createStore(persistedReducer, initialState, composeEnhancers)

let persistor = persistStore(store)

const deleteStore = () => {
  return persistor.purge()
}

export { persistor, store, deleteStore }
