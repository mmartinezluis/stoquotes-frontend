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

        Author.all.push(this)
    }

    authorHTML(){
        this.element.innerHTML += `
            <div>
                <h3>${this.name}</h3>
            </div>
        `
        return this.element
    }

    slapOnDom(){
        Author.authorContainer.appendChild(this.authorHTML())
    }

}