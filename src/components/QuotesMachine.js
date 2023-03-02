import React, { useContext, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import {
  getCategoryQuote,
  getRandomQuote,
} from "../app/features/quotes/quotesSlice";
import { shuffleArray } from "../tools/customFunctions";
import { randomAuthor } from "./authors/author";
import { ModalContext } from "./modal/ModalContext";
import { quoteMachineQuoteTemplate } from "./quotes/quoteTemplates";
import { quotesMachineStoryForm } from "./stories/storyForms";

const QuotesMachine = ({ authorsData, categoriesData, authorIds }) => {
  const dispatch = useDispatch();
  const { showModal } = useContext(ModalContext);
  const [showStoryForm, setShowStoryForm] = useState(false);
  const [currentQuote, setCurrentQuote] = useState(null);
  const [randomAuthorsList, setRandomAuthorsList] = useState([]);

  const authors = authorsData.data?.entities;
  const categories = categoriesData.data?.entities;
  // const authorIds = useMemo(() => authorsData.data?.ids, [authorsData.data]);

  const fetchAuthorQuote = (authorId) => {
    return dispatch(getRandomQuote(authorId))
      .unwrap()
      .then((data) => {
        setCurrentQuote(data);
        return true;
      })
      .catch((err) => {
        showModal(err.message, 2);
        return false;
      });
  };

  const fetchCategoryQuote = (categoryId) => {
    return dispatch(getCategoryQuote(categoryId))
      .unwrap()
      .then((data) => {
        setCurrentQuote(data);
        return true;
      })
      .catch((err) => {
        showModal(err.message, 2);
        return false;
      });
  };

  const writeStoryBtn = (
    <button
      type="button"
      className={"btn btn-outline-dark " + (showStoryForm ? "active" : null)}
      id="new-story-btn"
      onClick={() => setShowStoryForm(!showStoryForm)}
    >
      Write a story
    </button>
  );

  const quoteAndStoryForm = () => {
    return currentQuote ? (
      <>
        {quoteMachineQuoteTemplate(currentQuote)}
        <div className="container" id="story-compose">
          {writeStoryBtn}
          {showStoryForm && quotesMachineStoryForm()}
        </div>
      </>
    ) : null;
  };

  return (
    <>
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
                onClick={() => {
                  const authorsCount = authorsData.data.ids.length;
                  if (fetchAuthorQuote(randomAuthor(authorsCount))) {
                    setShowStoryForm(false);
                  }
                }}
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
                onClick={() => {
                  setRandomAuthorsList(
                    shuffleArray(authorIds.slice()).slice(0, 10)
                  );
                  setCurrentQuote(null);
                }}
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
                onClick={() => setCurrentQuote(null)}
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
              className="tab-pane"
              id="nav-random-quote"
              role="tabpanel"
              aria-labelledby="nav-random-quote-tab"
            >
              {quoteAndStoryForm()}
            </div>

            <div
              className="tab-pane fade"
              id="nav-authors"
              role="tabpanel"
              aria-labelledby="nav-authors-tab"
            >
              <div id="authors-container">
                {/* Authors are displayed here */}
                <ul>
                  {randomAuthorsList.map((authorId) => {
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
                  })}
                </ul>
                {quoteAndStoryForm()}
              </div>
            </div>

            <div
              className="tab-pane fade"
              id="nav-categories"
              role="tabpanel"
              aria-labelledby="nav-categories-tab"
            >
              <div id="categories-container">
                {/* Categories are displayed here */}
                <ul>
                  {categoriesData.data?.ids.map((categoryId) => {
                    const category = categories[categoryId];
                    return (
                      <li key={categoryId}>
                        <span
                          role="button"
                          onClick={(e) => {
                            e.preventDefault();
                            if (fetchCategoryQuote(category.id)) {
                              setShowStoryForm(false);
                            }
                          }}
                        >
                          {category.name}
                        </span>
                      </li>
                    );
                  })}
                </ul>
                {quoteAndStoryForm()}
              </div>
            </div>

            <div
              className="tab-pane fade"
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
                    {authorIds?.map((id) => {
                      console.log("dfdfd");
                      return <option key={id}>{authors[id].name}</option>;
                    })}
                    {/* <!-- This data list gets populated with author names upon initialization of app --> */}
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
          </div>
          {/* <!-- END OF NAV TABS CONTENT --> */}
        </div>
        {/* <!-- END OF MACHINE CONTAINER --> */}
      </div>
      {/* // END OF BLACK BOX CONTAINER */}
    </>
  );
};

export default QuotesMachine;
