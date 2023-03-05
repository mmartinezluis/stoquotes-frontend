export default function QuotesMachineSkeleton() {
  return (
    // THE BLACK BOX; HANDLES DISPLAY AND CREATION OF QUOTES AND DISPLAY OF
    // AUTHORS AND CATEGORIES
    <div className="container" id="black-box">
      {/* <!-- START OF MACHINE CONTAINER --> */}
      <div className="container" id="machine">
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

        <div className="tab-content" id="nav-tabContent">
          Loading ...
        </div>
      </div>
    </div>
  );
}
