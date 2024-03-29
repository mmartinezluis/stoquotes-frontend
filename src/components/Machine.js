import React, { useContext, useMemo } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import QuotesMachine from "./QuotesMachine";
import StoriesMachine from "./StoriesMachine";
import {
  // extendedAuthorsApiSlice,
  // selectAllAuthors,
  // selectAuthorsResult,
  useGetAuthorsQuery,
} from "../app/features/authors/authorsSlice";
import { useGetCategoriesQuery } from "../app/features/categories/categoriesSlice";
import QuoteTab from "./quotes/QuoteTab";
import HomeTab from "./home/HomeTab";
import AuthorsTab from "./authors/AuthorsTab";
import CategoriesTab from "./categories/CategoriesTab";
import SearchAuthorTab from "./authors/SearchAuthorTab";
import Login from "./login/Login";
import { PortalContext } from "./portal/PortalContext";
import Portal from "./portal/Portal";

export default function Machine() {
  const { loginControls } = useContext(PortalContext);
  const authorsData = useGetAuthorsQuery();
  const categoriesData = useGetCategoriesQuery();

  const authorsMap = useMemo(() => {
    return {};
  }, []);

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
      <Portal isOpen={loginControls.isOpen}>
        <Login isLoginMode={loginControls.isLoginMode} />
      </Portal>
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
              <SearchAuthorTab
                authorsDatalist={authorsDatalist}
                authorsMap={authorsMap}
              />
            }
          />
        </Route>
      </Routes>
      <Outlet />
    </>
  );
}
