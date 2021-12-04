import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import authReducer from './users/usersSlice'
// import { usersApi } from './users/usersSlice'
import { contactsApi } from './contacts/contactsSlice'
import storage from 'redux-persist/lib/storage'
import filterReducer from './contacts/contacts-reducers'
import logger from 'redux-logger'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  // logger,
  contactsApi.middleware,
  // usersApi.middleware,
]

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
}

const persistConfig = {
  key: 'filter',
  version: 1,
  storage,
  whitelist: ['filter'],
}

const authPersistReducer = persistReducer(authPersistConfig, authReducer)
const persistedFilterReducer = persistReducer(persistConfig, filterReducer)

//RTK Query -> API Reference -> Generated API Slices -> API Slices: Redux Integration
export const store = configureStore({
  reducer: {
    // [usersApi.reducerPath]: usersApi.reducer,
    auth: authPersistReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter: persistedFilterReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
})

setupListeners(store.dispatch)

export const persistor = persistStore(store)
