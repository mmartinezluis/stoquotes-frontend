import React, { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { Outlet, Route, Routes, useNavigate, Link } from "react-router-dom";
import {
  getCategoryQuote,
  getRandomQuote,
} from "../app/features/quotes/quotesSlice";
import { shuffleArray } from "../tools/customFunctions";
import { randomAuthor } from "./authors/author";
import HomeTab from "./home/HomeTab";
import { ModalContext } from "./modal/ModalContext";
import QuoteTab from "./quotes/QuoteTab";
import { quoteMachineQuoteTemplate } from "./quotes/quoteTemplates";
import { quotesMachineStoryForm } from "./stories/storyForms";

const QuotesMachine = ({ authorsData, categoriesData, authorIds }) => {
  const dispatch = useDispatch();
  const { showModal } = useContext(ModalContext);
  const [showStoryForm, setShowStoryForm] = useState(false);
  const [currentQuote, setCurrentQuote] = useState(null);
  const [randomAuthorsList, setRandomAuthorsList] = useState([]);
  const navigate = useNavigate();

  const authors = authorsData.data?.entities;
  const categories = categoriesData.data?.entities;

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
            <nav>
              <ul>
                <li>
                  <Link to="/">HOME</Link>
                </li>
                <li>
                  <Link to="/quote">QUOTE</Link>
                </li>
                <li>
                  <Link to="/books/new">New Book</Link>
                </li>
              </ul>
            </nav>
            <div
              className="nav nav-tabs nav-pills flex-column flex-sm-row"
              // id="nav-tab"
              role="tablist"
            >
              <button
                className="nav-link flex-sm-fill"
                // id="nav-home-tab"
                data-bs-toggle="tab"
                // data-bs-target="#nav-home"
                type="button"
                role="tab"
                // aria-controls="nav-home"
                // aria-selected="true"
                onClick={() => navigate("/")}
              >
                {/* <Link to="/">Home</Link> */}
                Home
              </button>
              <button
                className="nav-link flex-sm-fill"
                // id="nav-random-quote-tab"
                data-bs-toggle="tab"
                // data-bs-target="#nav-random-quote"
                type="button"
                role="tab"
                aria-controls="nav-random-quote"
                aria-selected="false"
                onClick={() => {
                  const authorsCount = authorsData.data.ids.length;
                  if (fetchAuthorQuote(randomAuthor(authorsCount))) {
                    setShowStoryForm(false);
                    navigate("/quote");
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
                // id="nav-categories-tab"
                data-bs-toggle="tab"
                // data-bs-target="#nav-categories"
                type="button"
                role="tab"
                // aria-controls="nav-categories"
                // aria-selected="false"
                onClick={() => setCurrentQuote(null)}
              >
                Categories
              </button>
              <button
                className="nav-link flex-sm-fill"
                // id="nav-search-author-tab"
                data-bs-toggle="tab"
                // data-bs-target="#nav-search-author"
                type="button"
                role="tab"
                // aria-controls="nav-search-author"
                // aria-selected="false"
              >
                Search Author
              </button>
            </div>
          </nav>

          {/* <!-- THE CONTENT FOR THE NAV TABS --> */}
          <div className="tab-content" id="nav-tabContent">
            <Outlet context={{ quoteAndStoryForm }} />
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
