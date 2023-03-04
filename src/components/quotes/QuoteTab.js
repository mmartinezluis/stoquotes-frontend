import React from "react";
import { useOutletContext } from "react-router-dom";

export default function QuoteTab() {
  const { quoteAndStoryForm } = useOutletContext();
  return (
    <div
      // className="tab-pane"
      id="nav-random-quote"
      role="tabpanel"
      aria-labelledby="nav-random-quote-tab"
    >
      {quoteAndStoryForm()}
      <h1>RENDER THE COMPONENT</h1>
    </div>
  );
}
