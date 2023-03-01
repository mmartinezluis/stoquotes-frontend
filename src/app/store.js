import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./features/api/apiSlice";
import { quotesSlice } from "./features/quotes/quotesSlice";

export const store = configureStore({
  reducer: {
    // authors: authorsSlice,
    quotes: quotesSlice.reducer,
    // categories: "quotesReducer",
    // stories: "quotesReducer",
    // users: "quotesReducer",
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
