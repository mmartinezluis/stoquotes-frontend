import React from "react";
import { useNavigate } from "react-router-dom";

const QuotesMachine = (storiesInterfaceRef) => {
  const navigate = useNavigate();
  return (
    <>
      {/* STORIES NAVBAR */}
      <nav className="navbar navbar-dark bg-dark" aria-label="Main navigation">
        <div className="container-fluid">
          <button
            className="navbar-toggler p-0 border-0"
            type="button"
            id="navbarSideCollapse"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasScrolling"
            aria-controls="offcanvasScrolling"
            aria-label="Toggle navigation"
            onClick={() => {
              console.log(storiesInterfaceRef);
              storiesInterfaceRef &&
              storiesInterfaceRef.className.includes("show")
                ? navigate("/")
                : navigate("/stories");
            }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <span className="navbar-brand" id="auth-status-btn">
            Login
          </span>
        </div>
      </nav>

      {/* // THE BLACK BOX; HANDLES DISPLAY AND CREATION OF QUOTES AND DISPLAY OF
      AUTHORS AND CATEGORIES */}
      <div className="container" id="black-box">
        {/* <!-- START OF MACHINE CONTAINER --> */}
        <div className="container" id="machine">
          {/* <!-- THE NAV TABS --> */}
          <nav>
            <div
              className="nav nav-tabs nav-pills flex-column flex-sm-row"
              id="nav-tab"
              role="tablist"
            >
              <button
                className="nav-link flex-sm-fill active"
                id="nav-home-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-home"
                type="button"
                role="tab"
                aria-controls="nav-home"
                aria-selected="true"
              >
                Home
              </button>
              <button
                className="nav-link flex-sm-fill"
                id="nav-random-quote-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-random-quote"
                type="button"
                role="tab"
                aria-controls="nav-random-quote"
                aria-selected="false"
              >
                Quote
              </button>
              <button
                className="nav-link flex-sm-fill"
                id="nav-authors-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-authors"
                type="button"
                role="tab"
                aria-controls="nav-authors"
                aria-selected="false"
              >
                Authors
              </button>
              <button
                className="nav-link flex-sm-fill"
                id="nav-categories-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-categories"
                type="button"
                role="tab"
                aria-controls="nav-categories"
                aria-selected="false"
              >
                Categories
              </button>
              <button
                className="nav-link flex-sm-fill"
                id="nav-search-author-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-search-author"
                type="button"
                role="tab"
                aria-controls="nav-search-author"
                aria-selected="false"
              >
                Search Author
              </button>
            </div>
          </nav>
          {/* <!-- THE CONTENT FOR THE NAV TABS --> */}
          <div className="tab-content" id="nav-tabContent">
            <div
              className="tab-pane fade show active"
              id="nav-home"
              role="tabpanel"
              aria-labelledby="nav-home-tab"
            >
              <div id="home-container">
                <h5>Welcome</h5>
                <p>
                  Welcome to StoQuotes, a place to get inspired and inspire
                  others. StoQuotes displays random quotes, quotes from authors,
                  and quotes from categories.{" "}
                </p>
                <h5>Find Inspiration:</h5>
                <p>
                  The Quote tab and the Authors tab are multiclickable: each
                  time you click on the Quote tab will display a random quote,
                  and the Authors tab will display ten random authors. The links
                  within the Authors tab and the Categories tab are also
                  multiclickable: a new quote from the clicked author or
                  category is displayed for each click. If you would like quotes
                  from a specific author, then click on the Search Author tab
                  and type the name of your desired author.
                </p>
                <h5>Inspire Others:</h5>
                <p>
                  You can write a story for any given quote. Clicking on the
                  Stories navabar will display your created stories and the
                  stories created by other users. You can edit or delete your
                  stories.
                </p>
                <p> Enjoy the quote journey!</p>
              </div>
            </div>

            <div
              id="nav-random-quote"
              role="tabpanel"
              aria-labelledby="nav-random-quote-tab"
            >
              {/* <!-- Nothing is displayed here; the quote is actually displayed in the quotes-container div below --> */}
              {/* <!-- However, for every click on this div's parent nav tab, a new random quote is displayed --> */}
            </div>

            <div
              className="tab-pane fade"
              id="nav-authors"
              role="tabpanel"
              aria-labelledby="nav-authors-tab"
            >
              <div id="authors-container">
                {/* <!-- Authors are displayed here --> */}
              </div>
            </div>

            <div
              className="tab-pane fade"
              id="nav-categories"
              role="tabpanel"
              aria-labelledby="nav-categories-tab"
            >
              <div id="categories-container">
                {/* <!-- Categories are displayed here --> */}
              </div>
            </div>

            <div
              className="tab-pane fade"
              id="nav-search-author"
              role="tabpanel"
              aria-labelledby="nav-search-author-tab"
            >
              <div className="container" id="search-author-container">
                <form id="search">
                  <label htmlFor="author-name">Author name:</label>
                  <input type="text" list="author-name" />
                  <datalist id="author-name">
                    {/* <!-- This data list gets populated with author names upon initialization of app --> */}
                  </datalist>
                  <input
                    type="submit"
                    className="btn btn-secondary"
                    value="Get quote"
                    id="get-quote"
                  />
                </form>
              </div>
            </div>
          </div>
          {/* <!-- END OF NAV TABS CONTENT --> */}

          <div id="quotes-container">
            {/* <!-- quotes are displayed here; this container is used across multitple NAV TABS --> */}
          </div>
          {/* <!-- END OF QUOTES CONTAINER --> */}
          <div className="container" id="story-compose">
            <button
              type="button"
              className="btn btn-outline-dark"
              id="new-story-btn"
            >
              Write a story
            </button>
            <div id="form-container">
              {/* <!-- This is the new story form container --> */}
            </div>
            {/* <!-- END OF NEW STORY FORM CONTAINER --> */}
          </div>
        </div>
        {/* <!-- END OF MACHINE CONTAINER --> */}
      </div>
      {/* // END OF BLACK BOX CONTAINER */}
    </>
  );
};

export default QuotesMachine;
