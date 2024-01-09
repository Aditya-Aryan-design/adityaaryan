import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import colorGenerator from '@/lib/colorGenerator'




interface themeState {
  value: string
}

const initialState: themeState = {
  value: '#fff',
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    colorChanger: (state) => {
      state.value = colorGenerator()
    }
}})

export const { colorChanger } = themeSlice.actions

export const selectCount = (state: RootState) => state.theme.value

export default themeSlice.reducer