class Category {
    static all = []
    static categoryContainer = document.getElementById('categories-container')
    constructor({id, name} ){
        this.id = id,
        this.name = name

        this.element = document.createElement('li')
        this.element.dataset.id = this.id
        this.element.id = `category-${this.id}`

        Category.all.push(this )
    }
}