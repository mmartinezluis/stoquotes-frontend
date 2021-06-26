class Author {
    // remember objects
    static all = []
    static authorsContainer = document.getElementById('authors-container')
    static datalist = document.getElementById('author-name')

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

    static renderSearchForm(){
        Author.datalist = document.getElementById('author-name');
        console.log(datalist)
        
    }

    static populateDatalist(){
        // debugger
        const options = Author.createOptionFields()
        // console.log(options)
        Author.datalist.innerHTML = options
        // document.getElementById('author-name');
        // console.log(datalist)
        
    }

    static createOptionFields(){
        let div = document.createElement('div')
        Author.all.forEach(function(author){
            
           let option = document.createElement('option');
           option.value = author.name;
           div.appendChild(option);
        });
        // console.log(div)
        return div.innerHTML;
        // Author.datalist.innerHTML = div.innerHTML
    }
}