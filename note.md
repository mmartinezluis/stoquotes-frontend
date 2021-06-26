NOTES FOR MEDIUM.COM ARTICLE

const authorsTab = document.getElementById('nav-authors-tab')

authorsTab.addEventListerner('click', (event) => {
    event.preventDefault();
    authorService.getAuthors();
})


    getAuthors(){
        fetch(`${this.endpoint}/authors`)
        .then (resp => resp.json())
        .then(authors => {
            for (const author of authors){
                const a = new Author(author)
                a.addToDom()
            }
        })
    }

    
    authors = Author.all.sample(10)


authorService.loadAuthors()


    loadAuthors(){
        fetch(`${this.endpoint}/authors`)
        .then (resp => resp.json())
        .then(authors => {
            for (const author of authors){
                const a = new Author(author)
            }
        })
    }