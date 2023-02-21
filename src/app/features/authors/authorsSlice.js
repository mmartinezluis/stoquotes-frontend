import {
  createSlice,
  createSelector,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";

// const initialState = {
//   authors: [],
// };
// const authorsSlice = createSlice({
//   name: "authors",
//   initialState,
//   reducers: {
//     addAuthor: {
//       reducer(state, action) {
//         state.authors.push(action.payload);
//       },
//     },
//   },
// });

const authorsAdapter = createEntityAdapter();

const initialState = authorsAdapter.getInitialState();

export const authorsSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAuthors: builder.query({
      query: () => "/authors",
      transformErrorResponse: (res) => {
        return authorsAdapter.setAll(initialState, res);
      },
    }),
  }),
});

export const { useGetAuthorsQuery } = authorsSlice;

export const selectAuthorsResult = authorsSlice.endpoints.getAuthors.select();

// const emptyAuthors = [];

// export const selectAllAuthors = createSelector(
//   selectAuthorsResult,
//   (authorsResult) => authorsResult?.data ?? emptyAuthors
// );

const selectAuthorsData = createSelector(
  selectAuthorsResult,
  (authorsResult) => authorsResult?.data
);

export const { selectAll: selectAllAuthors, selectById: selectAuthorById } =
  authorsAdapter.getSelectors(
    (state) => selectAuthorsData(state) ?? initialState
  );

// export const { addAuthor } = authorsSlice.actions;

// export default authorsSlice.reducer;
