class Story {

    static all = []
    static storyContainer = document.getElementById('stories-container')
    static storyForm = document.getElementById('form-container')

    constructor({description, user_id, quote_id}){
        this.description = description,
        this.user_id = user_id,
        this.quote_id = quote_id

        this.element = document.createElement('li')
        this.element.dataset.id = this.id
        this.element.id = `story-${this.id}`

        Story.all.push(this)
    }

    storyHTML(){
      this.element.innerHTML +=`
        <div>
            <p>
                User ${this.user_id}<br>
                ${this.description}
            </p>
        </div>
      `
      return this.element
    }

    addToDom(){
        Story.storyContainer.appendChild(this.storyHTML())
    }
    

    static renderForm(){
        Story.storyForm.innerHTML += `
        <from id="new-story-form"> 
          Description: <textarea id="description"></textarea>
          <input type="submit" id="create">
        <form>
        `
        return Story.storyForm
    }
}