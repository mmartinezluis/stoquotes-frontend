import React from "react";
import { useOutletContext } from "react-router-dom";
export default function SearchAuthorTab() {
  const { authorsData, quoteAndStoryForm } = useOutletContext();
  const { ids, entities } = authorsData.data;
  return (
    <div
      // className="tab-pane fade"
      id="nav-search-author"
      role="tabpanel"
      aria-labelledby="nav-search-author-tab"
    >
      <div className="container" id="search-author-container">
        <form
          id="search"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <label htmlFor="author-name">Author name:</label>
          <input type="text" list="author-name" />
          <datalist id="author-name">
            {ids.map((id) => {
              console.log("dfdfd");
              return <option key={id}>{entities[id].name}</option>;
            })}
          </datalist>
          <input
            type="submit"
            className="btn btn-secondary"
            value="Get quote"
            id="get-quote"
          />
        </form>
        {quoteAndStoryForm()}
      </div>
    </div>
  );
}
