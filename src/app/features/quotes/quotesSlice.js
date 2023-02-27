import axios from "axios";
import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";

export const getRandomQuote = createAsyncThunk(
  "quotes/getRandomQuote",
  async (authorId) => {
    const response = await axios.get(`/${999}/randomquote`);
    return response.data;
  }
);

export const quotesSlice = createSlice({
  name: "quotes",
  initialState: {
    quotes: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getRandomQuote.fulfilled, (state, action) => {});
  },
});
