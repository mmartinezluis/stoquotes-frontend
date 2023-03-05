import React from "react";
import { useOutletContext } from "react-router-dom";
export default function AuthorsTab() {
  const {
    authorsData,
    quoteAndStoryForm,
    setShowStoryForm,
    fetchAuthorQuote,
    randomAuthorsList,
  } = useOutletContext();
  const { entities } = authorsData.data;
  return (
    <div
      // className="tab-pane fade"
      id="nav-authors"
      role="tabpanel"
      aria-labelledby="nav-authors-tab"
    >
      <div id="authors-container">
        <ul>
          {randomAuthorsList.map((authorId) => {
            const author = entities[authorId];
            return (
              <li key={authorId}>
                <a
                  href="/"
                  onClick={(e) => {
                    e.preventDefault();
                    if (fetchAuthorQuote(authorId)) {
                      setShowStoryForm(false);
                    }
                  }}
                >
                  {author.name}
                </a>
              </li>
            );
          })}
        </ul>
        {quoteAndStoryForm()}
      </div>
    </div>
  );
}
