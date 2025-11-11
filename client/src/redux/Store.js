import { configureStore } from '@reduxjs/toolkit'
import orebiReducer from "./orebiSlice"

const store = configureStore({
  reducer: {
    orebi: orebiReducer,
  },
});

export default store