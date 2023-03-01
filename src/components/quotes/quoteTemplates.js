export const quoteMachineQuoteTemplate = (quote) => {
  return (
    <div className="container" id="quotes-container">
      <div className="pseudo-quote-box">
        <figure>
          <blockquote className="blockquote">
            <p>
              <em>
                <i className="bi bi-quote">{quote.body}</i>
              </em>
            </p>
          </blockquote>
          <figcaption className="blockquote-footer">
            <cite title="Source Title">{quote.author_name}</cite>
          </figcaption>
        </figure>
      </div>
    </div>
  );
};

export const storiesMachineQuoteTemplate = (quote) => {
  <div className="profile-quote-box">
    <figure>
      <blockquote class="blockquote">
        <p>
          <em>
            <i className="bi bi-quote">{quote.body}</i>
          </em>
        </p>
      </blockquote>
      <figcaption class="blockquote-footer">
        <cite title="Source Title">{quote.author_name}</cite>
      </figcaption>
    </figure>
  </div>;
};
