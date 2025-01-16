import { configureStore } from '@reduxjs/toolkit'
import movieoReducer from './movieSlice'

export const store = configureStore({
  reducer: {
    movieoData : movieoReducer
  },
})

export type RootState = ReturnType<typeof store.getState>;

export default store;