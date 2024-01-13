import { configureStore } from '@reduxjs/toolkit'
import themeReducer from './slice/theme'
import bgReducer from './slice/bgRemover'


export const store = configureStore({
  reducer: {
    theme: themeReducer,
    bg: bgReducer
  },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch