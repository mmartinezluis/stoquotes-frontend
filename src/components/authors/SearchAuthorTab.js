import React from "react";
import { useOutletContext } from "react-router-dom";
export default function SearchAuthorTab({ authorsDatalist, authorsMap }) {
  const { authorsData, quoteAndStoryForm, fetchAuthorQuote, showModal } =
    useOutletContext();
  // const { ids, entities } = authorsData.data;
  // const authorsMap = {};
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
            const userInput = e.target.querySelector("input").value;
            if (!authorsMap.hasOwnProperty(userInput)) {
              showModal("Author not found", 3);
              return;
            }
            fetchAuthorQuote(authorsMap[userInput]);
          }}
        >
          <label htmlFor="author-name">Author name:</label>
          <input type="text" list="author-name" />
          {/* <datalist id="author-name">
            {ids.map((id) => {
              console.log("dfdfd");
              const authorName = entities[id].name;
              authorsMap[authorName] = id;
              return <option key={id}>{authorName}</option>;
            })}
          </datalist> */}
          {authorsDatalist}
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
