import React from "react";
export default function CategoriesTab({ categoriesData }) {
  return (
    <div
      className="tab-pane fade"
      id="nav-categories"
      role="tabpanel"
      aria-labelledby="nav-categories-tab"
    >
      <div id="categories-container">
        <ul>
          <h1>Categories</h1>
          {/* {categoriesData.data?.ids.map((categoryId) => {
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
          })} */}
        </ul>
        {/* {quoteAndStoryForm()} */}
      </div>
    </div>
  );
}
