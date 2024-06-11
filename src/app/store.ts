import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import counterReducer from "../state/counter/counterSlice"
import chuckReducer from "../state/chuck/chuckSlice"
import selectionReducer from "../state/selection/selectionSlice"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    chuck: chuckReducer,
    selection: selectionReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
