export const quoteMachineQuoteTemplate = (quote) => {
  <div className="pseudo-quote-box">
    <figure>
      <blockquote class="blockquote">
        <p>
          <em>
            <i class="bi bi-quote">{quote.body}</i>
          </em>
        </p>
      </blockquote>
      <figcaption class="blockquote-footer">
        <cite title="Source Title">{quote.author_name}</cite>
      </figcaption>
    </figure>
  </div>;
};

export const storiesMachineQuoteTemplate = (quote) => {
  <div className="profile-quote-box">
    <figure>
      <blockquote class="blockquote">
        <p>
          <em>
            <i class="bi bi-quote">{quote.body}</i>
          </em>
        </p>
      </blockquote>
      <figcaption class="blockquote-footer">
        <cite title="Source Title">{quote.author_name}</cite>
      </figcaption>
    </figure>
  </div>;
};
