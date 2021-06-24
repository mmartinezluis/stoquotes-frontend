class AuthorService {

    constructor(endpoint){
        this.endpoint = endpoint
    }

    loadAuthors(){
        fetch(`${this.endpoint}/authors`)
        .then (resp => resp.json())
        .then(authors => {
            for (const author of authors){
                const a = new Author(author)
            }
        })
    }

    getAuthors(){
        // Empty the authors container
        Author.authorsContainer.innerHTML = ""
        // Make a copy of the Author.all array, shuffle the array, get 10 authors, and sort by author name 
        const authors = shuffleArray(Author.all.slice(0)).slice(0,10).sort((a,b) => {
            if (a.name > b.name){
                return 1;
            }
            if (a.name < b.name){
                return -1
            }
            return 0;
        });
        authors.forEach(author => author.addToDom())
    }

    // getAuthors(){
    //     fetch(`${this.endpoint}/authors`)
    //     .then (resp => resp.json())
    //     .then(authors => {
    //         Author.authorsContainer.innerHTML = ""
    //         for (const author of authors){
    //             const a = new Author(author)
    //             a.addToDom()
    //         }
    //     })
    // }

    getAuthorQuote(authorId){
      fetch(`${this.endpoint}/authors/${authorId}`)
      .then(resp => resp.json())
      .then(quote => {
        // This static method displays a quote but does not create a quote  
        Quote.temporaryQuote(quote)
      })
    }
}