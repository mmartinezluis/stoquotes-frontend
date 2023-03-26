import {
  // createSlice,
  createSelector,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";

// const authorsSlice = createSlice({
//   name: "authors",
//   initialState: [],
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

// const emptyAuthors = [];
// export const selectAllAuthors = createSelector(
//   selectAuthorsResult,
//   (authorsResult) => authorsResult?.data ?? emptyAuthors
// );
// export const { addAuthor } = authorsSlice.actions;
// export default authorsSlice.reducer;s
