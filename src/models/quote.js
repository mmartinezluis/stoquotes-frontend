class Quote {
  static all = [];
  static quotesContainer = document.getElementById("quotes-container");

  constructor({ id, body, author_id, author_name }) {
    this.id = id;
    this.body = body;
    this.author_id = author_id;
    this.author_name = author_name;

    Quote.all.push(this);
  }

  static templateStyle = {
    browse: "pseudo-quote-box",
    profile: "profile-quote-box",
  };

  static generateQuoteTemplate(quote, style) {
    return `
      <div class=${style}>
        <figure>
          <blockquote class="blockquote">
            <p><em><i class="bi bi-quote">${quote.body}</i></em></p>
          </blockquote>
          <figcaption class="blockquote-footer">
            <cite title="Source Title">${quote.author_name}</cite>
          </figcaption>
        </figure>
      </div>`;
  }

  static temporaryQuote(quote) {
    quote.element = document.createElement("div");
    quote.element.dataset.id = quote.id;
    quote.element.id = `quote-${quote.id}`;
    quote.element.innerHTML = Quote.generateQuoteTemplate(
      quote,
      Quote.templateStyle.browse
    );
    Quote.quotesContainer.innerHTML = quote.element.innerHTML;
    // Once a quote is dsplayed, show the write a story button and activate the new story form
    writeStoryBtn.style.display = "block";
    Story.renderForm(1, quote.id);
  }
}
