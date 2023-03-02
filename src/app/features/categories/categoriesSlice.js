import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";

const categoriesAdapter = createEntityAdapter();
const initialState = categoriesAdapter.getInitialState();
export const extendedCategoriesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => "/categories",
      transformResponse: (res) => {
        return categoriesAdapter.setAll(initialState, res);
      },
    }),
  }),
});
export const { useGetCategoriesQuery } = extendedCategoriesApiSlice;
export const selectCategoriesResult =
  extendedCategoriesApiSlice.endpoints.getCategories.select();
const selectCategoriesData = createSelector(
  selectCategoriesResult,
  (categoriesResult) => categoriesResult.data
);
export const {
  selectAll: selectAllCategories,
  selectById: selectCategoriesById,
} = categoriesAdapter.getSelectors(
  (state) => selectCategoriesData(state) ?? initialState
);
