import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./features/api/apiSlice";

export const store = configureStore({
  reducer: {
    // authors: authorsSlice,
    // quotes: "quotesReducer",
    // categories: "quotesReducer",
    // stories: "quotesReducer",
    // users: "quotesReducer",
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
