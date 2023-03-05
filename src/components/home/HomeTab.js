import React from "react";
export default function HomeTab() {
  return (
    <div
      // className="tab-pane fade show active"
      className=""
      id="nav-home"
      role="tabpanel"
      aria-labelledby="nav-home-tab"
    >
      <div id="home-container">
        <h5>Welcome</h5>
        <p>
          Welcome to StoQuotes, a place to get inspired and inspire others.
          StoQuotes displays random quotes, quotes from authors, and quotes from
          categories.{" "}
        </p>
        <h5>Find Inspiration:</h5>
        <p>
          The Quote tab and the Authors tab are multiclickable: each time you
          click on the Quote tab will display a random quote, and the Authors
          tab will display ten random authors. The links within the Authors tab
          and the Categories tab are also multiclickable: a new quote from the
          clicked author or category is displayed for each click. If you would
          like quotes from a specific author, then click on the Search Author
          tab and type the name of your desired author.
        </p>
        <h5>Inspire Others:</h5>
        <p>
          You can write a story for any given quote. Clicking on the Stories
          navabar will display your created stories and the stories created by
          other users. You can edit or delete your stories.
        </p>
        <p> Enjoy the quote journey!</p>
      </div>
    </div>
  );
}
