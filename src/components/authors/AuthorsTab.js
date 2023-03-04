import React from "react";
export default function AuthorsTab() {
  return (
    <div
      className="tab-pane fade"
      id="nav-authors"
      role="tabpanel"
      aria-labelledby="nav-authors-tab"
    >
      <div id="authors-container">
        <ul>
          <h1>AUTHORS</h1>
          {/* {randomAuthorsList.map((authorId) => {
            const author = authors[authorId];
            return (
              <li key={authorId}>
                <a
                  href="/"
                  onClick={(e) => {
                    e.preventDefault();
                    if (fetchAuthorQuote(author.id)) {
                      setShowStoryForm(false);
                    }
                  }}
                >
                  {author.name}
                </a>
              </li>
            );
          })} */}
        </ul>
        {/* {quoteAndStoryForm()} */}
      </div>
    </div>
  );
}
