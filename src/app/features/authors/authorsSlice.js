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

// const authorsAdapter = createEntityAdapter();

// const initialState = authorsAdapter.getInitialState();

// export const authorsSlice = apiSlice.injectEndpoints({
//   endpoints: (builder) => ({
//     getAuthors: builder.query({
//       query: () => "/authors",
//       transformErrorResponse: (res) => {
//         return authorsAdapter.setAll(initialState, res);
//       },
//     }),
//   }),
// });

// export const { useGetAuthorsQuery } = authorsSlice;

// export const selectAuthorsResult = authorsSlice.endpoints.getAuthors.select();

// const emptyAuthors = [];

// export const selectAllAuthors = createSelector(
//   selectAuthorsResult,
//   (authorsResult) => authorsResult?.data ?? emptyAuthors
// );

// const selectAuthorsData = createSelector(
//   selectAuthorsResult,
//   (authorsResult) => authorsResult?.data ?? []
// );

// export const { selectAll: selectAllAuthors, selectById: selectAuthorById } =
//   authorsAdapter.getSelectors((state) => {
//     console.log("hello", state);
//     return selectAuthorsData(state) ?? initialState;
//   });

// export const { addAuthor } = authorsSlice.actions;

// export default authorsSlice.reducer;

const authorsAdapter = createEntityAdapter();

const initialState = authorsAdapter.getInitialState();

export const extendedAuthorsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAuthors: builder.query({
      query: () => "/authors",
      transformResponse: (res) => {
        return authorsAdapter.setAll(initialState, res);
      },
    }),
  }),
});

export const { useGetAuthorsQuery } = extendedAuthorsApiSlice;

// Calling `someEndpoint.select(someArg)` generates a new selector that will return
// the query result object for a query with those parameters.
// To generate a selector for a specific query argument, call `select(theQueryArg)`.
// In this case, the users query has no params, so we don't pass anything to select()
export const selectAuthorsResult =
  extendedAuthorsApiSlice.endpoints.getAuthors.select();

const selectAuthorsData = createSelector(
  selectAuthorsResult,
  (authorsResult) => authorsResult.data
);

export const { selectAll: selectAllAuthors, selectById: selectAuthorsById } =
  authorsAdapter.getSelectors(
    (state) => selectAuthorsData(state) ?? initialState
  );
