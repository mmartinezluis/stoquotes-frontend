class Quote {

    static all = []
    static quotesContainer = document.getElementById('quotes-container')
    
    constructor({id, body, author_id, author_name}){
        this.id = id,
        this.body = body,
        this.author_id = author_id,
        this.author_name = author_name
        
        Quote.all.push(this)
    }

    static temporaryQuote(quote){
        // debugger
      quote.element = document.createElement('div')
      quote.element.dataset.id = quote.id
      quote.element.id = `quote-${quote.id}`
      quote.element.innerHTML = `<p><em>"${quote.body}"</em><br>${quote.author_name}</p>`
    //   Display the quote on the DOM
      Quote.quotesContainer.innerHTML = quote.element.innerHTML
    //   Once a quote is dsplayed,show the new story button and activate the new story form 
      addBtn.style.display = 'block'
      Story.renderForm(1, quote.id)

    }
}