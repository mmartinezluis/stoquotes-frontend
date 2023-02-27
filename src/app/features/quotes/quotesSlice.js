import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getRandomQuote = createAsyncThunk(
  "quotes/getRandomQuote",
  async (authorId) => {
    console.log("hello");
    const response = await axios.get(`/${authorId}/randomquote`);
    console.log(response.data);
    return response.data;
  }
);

export const quotesSlice = createSlice({
  name: "quotes",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getRandomQuote, (state, action) => {
      console.log(state);
    });
  },
});
