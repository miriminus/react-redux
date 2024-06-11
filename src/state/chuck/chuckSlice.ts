import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

export interface ChuckState {
  data: any
  like: boolean
  status: "idle" | "loading" | "failed"
}

const options = {
  method: "GET",
  url: "https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random",
  headers: {
    accept: "application/json",
    "X-RapidAPI-Key": "b388ea45abmsh11422a241ec77fbp169842jsn512c03fd8e0d",
    "X-RapidAPI-Host": "matchilling-chuck-norris-jokes-v1.p.rapidapi.com",
  },
}

export const fetchData = createAsyncThunk(
  "data/fetchData",
  async (_, { getState }) => {
    try {
      const response = await axios(options) // Hier wird das Konfigurationsobjekt übergeben
      return response.data
    } catch (error) {
      throw error
    }
  },
)

const chuckSlice = createSlice({
  name: "chuck",
  initialState: {
    status: "idle",
    data: null,
    like: false,
    error: null,
  },
  reducers: {
    like: (state) => {
      state.like = true
    },
    dislike: (state) => {
      state.like = false
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = "loading"
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = "succeeded"
        state.data = action.payload
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = "failed"
      })
  },
})

export const { like, dislike } = chuckSlice.actions
export default chuckSlice.reducer
