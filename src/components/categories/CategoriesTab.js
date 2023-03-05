import React from "react";
import { useOutletContext } from "react-router-dom";
export default function CategoriesTab() {
  const {
    categoriesData,
    quoteAndStoryForm,
    fetchCategoryQuote,
    setShowStoryForm,
  } = useOutletContext();
  const { ids, entities } = categoriesData.data;
  return (
    <div
      // className="tab-pane fade"
      id="nav-categories"
      role="tabpanel"
      aria-labelledby="nav-categories-tab"
    >
      <div id="categories-container">
        <ul>
          {ids.map((categoryId) => {
            const category = entities[categoryId];
            return (
              <li key={categoryId}>
                <span
                  role="button"
                  onClick={(e) => {
                    e.preventDefault();
                    if (fetchCategoryQuote(categoryId)) {
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
  );
}
