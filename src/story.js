class Story {

    static all = []
    static storyContainer = document.getElementById('stories-container')
    static storyForm = document.getElementById('form-container')

    constructor({description, user_id, quote_id, quote, created_at, updated_at}){
        this.description = description,
        this.user_id = user_id,
        this.quote_id = quote_id,
        this.quote = quote,
        this.created_at = created_at,
        this.updated_at = updated_at
   
        this.element = document.createElement('li')
        this.element.dataset.id = this.id
        this.element.id = `story-${this.id}`

        Story.all.push(this)
    }

    storyHTML(){
      this.element.innerHTML +=`
        <div>
            <p> 
                Quote: "${this.quote.body}" ${this.quote.author_name}<br>
                Story posted by User ${this.user_id} on ${this.created_at}<br>
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
        <form id="new-story-form"> 
          Description: <br>
          <textarea id="description"></textarea>
          <input type="submit" id="create">
        </form>
        `
    }
}