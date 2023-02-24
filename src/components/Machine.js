import React from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import QuotesMachine from "./QuotesMachine";
import StoriesMachine from "./StoriesMachine";
import {
  extendedAuthorsApiSlice,
  selectAllAuthors,
  selectAuthorsResult,
  useGetAuthorsQuery,
} from "../app/features/authors/authorsSlice";
export default function Machine() {
  const authorsData = useGetAuthorsQuery();
  //   const {
  //     data: authors,
  //     isLoading,
  //     isSuccess,
  //     isError,
  //     error,
  //   } = useGetAuthorsQuery();
  //   const state = useSelector((state) => state);

  //   if (isLoading) {
  //     console.log(state);
  //   } else if (isSuccess) {
  //     console.log(state);
  //   }
  //   console.log(selectAllAuthors());
  //   console.log(requestState);
  //   console.log(store.getState().api.queries["getAuthors(undefined)"]);
  //   const {
  //     data: authors,
  //     isLoading,
  //     isSuccess,
  //     isError,
  //     error,
  //   } = selectAuthorsResult(store.getState());
  //   console.log(isLoading);
  //   console.log(isSuccess);
  //   if (isLoading) return <p>Loading...</p>;
  //   if (isSuccess) return <p>Loading...</p>;
  //   if (isError) return <p>An error has occured</p>;
  return (
    <>
      <StoriesMachine authorsData={authorsData} />
      <QuotesMachine authorsData={authorsData} />
      <Outlet />
    </>
  );
}
