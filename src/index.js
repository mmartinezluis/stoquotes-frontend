import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { store } from "./app/store";
import { Provider } from "react-redux";
// import { extendedAuthorsApiSlice } from "./app/features/authors/authorsSlice";
import axios from "axios";
import { ModalProvider } from "./components/modal/ModalContext";
const root = ReactDOM.createRoot(document.getElementById("root"));

axios.defaults.baseURL = "http://localhost:3000";

// console.log(extendedAuthorsApiSlice);
// store.dispatch(extendedAuthorsApiSlice.endpoints.getAuthors.initiate());
// console.log(store.getState());
// console.log(
//   extendedAuthorsApiSlice.endpoints.getAuthors.select()(store.getState())
// );

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ModalProvider>
          <App />
        </ModalProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
