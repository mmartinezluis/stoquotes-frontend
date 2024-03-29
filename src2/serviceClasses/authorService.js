import Author from "../models/author.js";
import Quote from "../models/quote.js";
import { showModal } from "../output.js";
import { shuffleArray } from "../tools/customFunctions.js";

export default class AuthorService {
  constructor(endpoint) {
    this.endpoint = endpoint;
  }

  loadAuthors() {
    fetch(`${this.endpoint}/authors`)
      .then((resp) => resp.json())
      .then((authors) => {
        for (const author of authors) {
          const a = new Author(author);
          a.addToDatalist();
        }
        Author.total = authors.length - 1;
      })
      .catch((err) => showModal(err, 2));
  }

  getAuthors() {
    // Empty the authors container
    Author.authorsContainer.innerHTML = "";
    // Make a copy of the Author.all array, shuffle the array, get 10 authors, and sort by author name
    const authors = shuffleArray(Author.all.slice(0))
      .slice(0, 10)
      .sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        return 0;
      });
    authors.forEach((author) => author.addToDom());
  }

  getAuthorQuote(authorId) {
    fetch(`${this.endpoint}/authors/${authorId}`)
      .then((resp) => resp.json())
      .then((quote) => {
        // This static method displays a quote but does not create a quote
        Quote.renderTempQuote(quote);
      })
      .catch((err) => {
        console.log(err);
        showModal(err, 2);
      });
  }
}
