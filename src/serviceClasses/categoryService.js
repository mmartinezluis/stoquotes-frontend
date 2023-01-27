class CategoryService {
  constructor(endpoint) {
    this.endpoint = endpoint;
  }

  getCategories() {
    fetch(`${this.endpoint}/categories`)
      .then((resp) => resp.json())
      .then((categories) => {
        for (const category of categories) {
          const c = new Category(category);
          c.addToDom();
        }
      });
  }

  getCategoryQuote(categoryId) {
    fetch(`${this.endpoint}/categories/${categoryId}`)
      .then((resp) => resp.json())
      .then((quote) => {
        Quote.renderTempQuote(quote);
      });
  }
}
