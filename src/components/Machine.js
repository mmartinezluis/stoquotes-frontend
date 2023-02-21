import React from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import QuotesMachine from "./QuotesMachine";
import StoriesMachine from "./StoriesMachine";
import { selectAllAuthors } from "../app/features/authors/authorsSlice";
export default function Machine() {
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
  const authors = useSelector(selectAllAuthors);
  //   console.log(authors);
  return (
    <>
      <StoriesMachine />
      <QuotesMachine />
      <Outlet />
    </>
  );
}
