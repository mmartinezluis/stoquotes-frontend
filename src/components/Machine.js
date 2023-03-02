import React, { useContext, useMemo } from "react";
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
import ModalContainer from "./modal/ModalContainer";
import { ModalContext } from "./modal/ModalContext";
import { useGetCategoriesQuery } from "../app/features/categories/categoriesSlice";

export default function Machine() {
  const { isOpen, modalContent } = useContext(ModalContext);

  const authorsData = useGetAuthorsQuery();
  const categoriesData = useGetCategoriesQuery();
  const authorIds = useMemo(() => authorsData.data?.ids, [authorsData.data]);
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
  // console.log(authorsData.isFetching);
  return (
    <>
      <ModalContainer isOpen={isOpen} modalContent={modalContent} />
      <StoriesMachine authorsData={authorsData} />
      <QuotesMachine
        authorsData={authorsData}
        categoriesData={categoriesData}
        authorIds={authorIds}
      />
      <Outlet />
    </>
  );
}
