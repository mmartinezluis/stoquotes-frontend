class Author {
    // remember objects
    static all = []
    static authorsContainer = document.getElementById('authors-container')

    constructor({id, name}) {
        this.id = id,
        this.name = name 

        this.element = document.createElement('li')
        this.element.dataset.id = this.id
        this.element.id = `author-${this.id}`
        this.element.addEventListener('click', this.handleClick)

        Author.all.push(this)
    }

    authorHTML(){
        this.element.innerHTML = `
            <a href="/">
                ${this.name}
            </a>
        `
        return this.element
    }

    addToDom(){
        Author.authorsContainer.appendChild(this.authorHTML())
    }

    handleClick = (e) => {
      if (e.target.tagName === "A"){
          e.preventDefault()
          authorService.getAuthorQuote(this.id)
      }
    }

}