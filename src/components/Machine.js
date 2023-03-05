import React, { useContext, useMemo } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
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
import QuoteTab from "./quotes/QuoteTab";
import HomeTab from "./home/HomeTab";
import AuthorsTab from "./authors/AuthorsTab";
import CategoriesTab from "./categories/CategoriesTab";
import SearchAuthorTab from "./authors/SearchAuthorTab";

export default function Machine() {
  const { isOpen, modalContent } = useContext(ModalContext);

  const authorsData = useGetAuthorsQuery();
  const categoriesData = useGetCategoriesQuery();
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
  // console.log("Machine");
  // console.log(authorsData.data);
  const authorsMap = useMemo(() => {
    return {};
  }, []);
  console.log(authorsMap);
  const authorsDatalist = useMemo(() => {
    return (
      <datalist id="author-name">
        {authorsData.data?.ids.map((id) => {
          console.log("dfdfd");
          const authorName = authorsData.data?.entities[id].name;
          authorsMap[authorName] = id;
          return <option key={id}>{authorName}</option>;
        })}
      </datalist>
    );
  }, [authorsData.data?.ids, authorsData.data?.entities, authorsMap]);

  return (
    <>
      <ModalContainer isOpen={isOpen} modalContent={modalContent} />
      <StoriesMachine authorsData={authorsData} />
      <Routes>
        <Route
          path="/"
          element={
            <QuotesMachine
              authorsData={authorsData}
              categoriesData={categoriesData}
            />
          }
        >
          <Route index element={<HomeTab />} />
          <Route path="/quote" element={<QuoteTab />} />
          <Route path="/authors" element={<AuthorsTab />} />
          <Route path="/categories" element={<CategoriesTab />} />
          <Route
            path="/author-search"
            element={
              <SearchAuthorTab authorsDatalist={authorsDatalist} authorsMap />
            }
          />
        </Route>
      </Routes>
      <Outlet />
    </>
  );
}
