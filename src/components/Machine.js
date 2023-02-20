import React from "react";
import { Outlet } from "react-router-dom";
import QuotesMachine from "./QuotesMachine";
import StoriesMachine from "./StoriesMachine";
export default function Machine() {
  return (
    <>
      <StoriesMachine />
      <QuotesMachine />
      <Outlet />
    </>
  );
}
