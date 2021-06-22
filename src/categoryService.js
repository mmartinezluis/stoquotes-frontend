class CategoryService {
    constructor(endpoint){
        this.endpoint = endpoint
    }

    getCategories(){
        fetch(`${this.enpoint}/categories`)
        .then( resp => resp.json())
        .then(categories => {
            
        })
    }
}