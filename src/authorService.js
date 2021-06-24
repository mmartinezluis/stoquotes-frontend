class AuthorService {

    constructor(endpoint){
        this.endpoint = endpoint
    }

    getAuthors(){
        fetch(`${this.endpoint}/authors`)
        .then (resp => resp.json())
        .then(authors => {
            Author.authorsContainer.innerHTML = ""
            for (const author of authors){
                const a = new Author(author)
                a.addToDom()
            }
        })
    }
    
    getAuthorQuote(authorId){
      fetch(`${this.endpoint}/authors/${authorId}`)
      .then(resp => resp.json())
      .then(quote => {
        // This static method displays a quote but does not create a quote  
        Quote.temporaryQuote(quote)
      })
    }
}