class Quote {

    static all = []
    static quotesContainer = document.getElementById('quotes-container')
    
    constructor(id, body, author_id, author_name){
        this.id = id,
        this.body = body,
        this.author_id = author_id,
        this.author_name = author_name

        this.element = document.createElement('div')
        this.element.dataset.id = this.id
        this.element.id = `quote-${this.id}`

        Quote.all.push(this)
    }

    quoteHTML(){
        this.element.innerHTML = `
        <p>
            <em>"${this.body}"</em><br>
            ${this.author_name}
        </p>
        `
        return this.element
    }

    addToDom(){
      Quote.quotesContainer.appendChild(this.quoteHTML())
    }


    static temporaryQuote(quote){
    //   const {q} = quote
    //   const tempQuote = {q}
      quote.element = document.createElement('div')
      quote.element.dataset.id = quote.id
      quote.element.id = `quote-${quote.id}`
    // debugger
      quote.element.innerHTML = `<p><em>"${quote.body}"</em><br>${quote.author_name}</p>`
      Quote.quotesContainer.innerHTML = quote.element.innerHTML
    }
}