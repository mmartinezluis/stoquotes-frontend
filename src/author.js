class Author {
    // remember objects
    static all = []
    static authorContainer = document.getElementById('authors-container')

    constructor({id, name}) {
        this.id = id,
        this.name = name 

        this.element = document.createElement('li')
        this.element.dataset.id = this.id
        this.element.id = `author-${this.id}`
        this.element.addEventListener('lcick', this.getAuthorQuote)

        Author.all.push(this)
    }

    authorHTML(){
        this.element.innerHTML += `
            <a href="#">
                <h3>${this.name}</h3>
            </a>
        `
        return this.element
    }

    addToDom(){
        Author.authorContainer.appendChild(this.authorHTML())
    }

    // getAuthorQuote = () => {

    // }

}