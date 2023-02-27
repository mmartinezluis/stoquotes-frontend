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
import { getRandomQuote } from "../app/features/quotes/quotesSlice";
import { useDispatch } from "react-redux";
import { store } from "../app/store";
import ModalContainer from "./modal/ModalContainer";
export default function Machine() {
  const dispatch = useDispatch();
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
  //   console.log(store.getState());
  return (
    <>
      <ModalContainer />
      <button onClick={() => dispatch(getRandomQuote(1))}>Click me</button>
      <StoriesMachine authorsData={authorsData} />
      <QuotesMachine authorsData={authorsData} />
      <Outlet />
    </>
  );
}
