import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export interface CounterState {
  value: number
  status: "idle" | "loading" | "failed"
}

const initialState: CounterState = {
  value: 0,
  status: "idle",
}

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = "loading"
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = "idle"
        console.log("payload", action.payload, state.value)
        state.value += action.payload
      })
      .addCase(incrementAsync.rejected, (state) => {
        state.status = "failed"
      })
  },
})

export const incrementAsync = createAsyncThunk(
  "counter/fetchCount",
  async (amount: number) => {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    console.log("Action", amount)
    return amount
  },
)

export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer
