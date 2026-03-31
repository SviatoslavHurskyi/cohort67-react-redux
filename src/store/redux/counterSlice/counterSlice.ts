import { createAppSlice } from "store/createAppSlice"
import { PayloadAction } from "@reduxjs/toolkit"

const counterInitialState = {
  count: 0,
}

export const counterSlice = createAppSlice({
  name: "COUNTER",
  initialState: counterInitialState,
  reducers: {
    plus: state => {
      state.count = state.count + 1
    },
    minus: state => {
      state.count = state.count - 1
    },
    multiply: (state, action: PayloadAction<number>) => {
      state.count = Number((state.count * action.payload).toFixed(2))
    },
    divide: (state, action: PayloadAction<number>) => {
      state.count = Number((state.count / action.payload).toFixed(2))
    },
  },
  selectors: {
    count: state => {
      return state.count
    },
  },
})

export const counterSliceActions = counterSlice.actions

export const counterSliceSelectors = counterSlice.selectors
