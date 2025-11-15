import { configureStore } from '@reduxjs/toolkit'
import orebiReducer from "./orebiSlice"
import { persistStore, persistReducer,FLUSH,REHYDRATE,PERSIST,PURGE,REGISTER, PAUSE } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, orebiReducer)

export const store = configureStore({
  reducer: {
    orebi: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck:{
        ignoreActions: [FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER],
      },
    }),
});

export let persistor = persistStore(store);