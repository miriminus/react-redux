import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "./counter/counterSlice"
import chuckReducer from "./chuck/chuckSlice"
import selectionReducer from "./selection/selectionSlice"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    chuck: chuckReducer,
    selection: selectionReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export default store
