// state/selection/selectionSlice.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface SelectedOptionsState {
  selectedOptions: { [key: string]: number }
}

const initialState: SelectedOptionsState = {
  selectedOptions: {},
}

interface IncrementByAmountPayload {
  name: string
  value: number
}

export const selectionSlice = createSlice({
  name: "selection",
  initialState,
  reducers: {
    incrementByAmount: (
      state,
      action: PayloadAction<IncrementByAmountPayload>,
    ) => {
      const { name, value } = action.payload
      state.selectedOptions[name] = value
    },
  },
})

export const { incrementByAmount } = selectionSlice.actions

export default selectionSlice.reducer
