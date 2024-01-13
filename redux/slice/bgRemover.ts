import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../store'





interface bgState {
  value: boolean
}

const initialState: bgState = {
  value: true,
}

export const bgSlice = createSlice({
  name: 'bg',
  initialState,
  reducers: {
    bgChanger: (state, actions) => {
      state.value = actions.payload
    }
}})

export const { bgChanger } = bgSlice.actions

export const selectCount = (state: RootState) => state.bg.value

export default bgSlice.reducer