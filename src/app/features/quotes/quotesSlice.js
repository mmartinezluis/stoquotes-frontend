import axios from "axios";
import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";

export const getRandomQuote = createAsyncThunk(
  "quotes/getRandomQuote",
  async (authorId) => {
    try {
      const response = await axios.get(`/${authorId}/randomquote`);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
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
