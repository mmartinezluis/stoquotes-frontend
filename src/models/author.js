class Author {
  // remember objects
  static all = [];
  static total = 0;
  static authorsContainer = document.getElementById("authors-container");
  static datalist = document.getElementById("author-name");
  static toggleBtnBackground = (el) => {
    el.addEventListener("click", () => el.blur());
  };

  constructor({ id, name }) {
    (this.id = id), (this.name = name);

    // 'this.element' is used for rendering authors
    this.element = document.createElement("li");
    this.element.dataset.id = this.id;
    this.element.id = `author-${this.id}`;
    this.element.addEventListener("click", this.handleClick);

    // 'this.option' is Used for author-name datalist
    this.option = document.createElement("option");
    this.option.value = this.name;

    Author.all.push(this);
  }

  authorHTML() {
    this.element.innerHTML = `
            <a href="/">
                ${this.name}
            </a>
        `;
    return this.element;
  }

  addToDom() {
    Author.authorsContainer.appendChild(this.authorHTML());
  }

  handleClick = (e) => {
    if (e.target.tagName === "A") {
      e.preventDefault();
      authorService.getAuthorQuote(this.id);
    }
  };

  addToDatalist() {
    Author.datalist.appendChild(this.option);
  }
}
