class Category {
    static all = []
    static categoriesContainer = document.getElementById('categories-container')

    constructor({id, name} ){
        this.id = id,
        this.name = name

        this.element = document.createElement('li')
        this.element.dataset.id = this.id
        this.element.id = `category-${this.id}`
        this.element.addEventListener('click', this.handleClick)

        Category.all.push(this)
    }

    categoryHTML(){ 
       this.element.innerHTML = `<a href="/">${this.name}</a>`
       return this.element
    }

    addToDom(){
        Category.categoriesContainer.appendChild(this.categoryHTML())
    }

    handleClick = (event) => {
      if (event.target.tagName === "A"){
          event.preventDefault()
        categoryService.getCategoryQuote(this.id)
      }
    }
}