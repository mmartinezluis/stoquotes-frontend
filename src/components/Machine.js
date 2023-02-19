import React, { useRef } from "react";
import QuotesMachine from "./QuotesMachine";
import StoriesMachine from "./StoriesMachine";
export default function Machine() {
  const storiesInterfaceRef = useRef();
  return (
    <>
      <QuotesMachine storiesInterfaceRef={storiesInterfaceRef} />
      <StoriesMachine storiesInterfaceRef={storiesInterfaceRef} />
    </>
  );
}
