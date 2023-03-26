import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

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

export const getCategoryQuote = createAsyncThunk(
  "quotes/getCategoryQuote",
  async (categoryId) => {
    try {
      const response = await axios.get(`/${categoryId}/categoryquote`);
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
    builder.addCase(getCategoryQuote.fulfilled, (state, action) => {});
  },
});
