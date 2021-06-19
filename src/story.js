class Story {

    static all = []
    static storyContainer = document.getElementById('stories-container')
    static storyForm = document.getElementById('form-container')

    constructor({id, description, user_id, quote_id, quote, created_at, updated_at}){
        this.id = id
        this.description = description,
        this.user_id = user_id,
        this.quote_id = quote_id,
        this.quote = quote,
        this.created_at = created_at,
        this.updated_at = updated_at
     
        this.element = document.createElement('li')
        this.element.dataset.id = this.id
        this.element.id = `story-${this.id}`
        this.element.addEventListener('click', this.handleClick)

        Story.all.push(this)
    }

    storyHTML(){
      this.element.innerHTML +=`
        <div>
            <p> 
                Quote: "<em></em><br>
                Story posted by User ${this.user_id} on ${this.created_at}<br>
                ${this.description}
            </p>
        </div>
        <button>Delete</button>
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

    static emptyAll(){
        delete Story.all
    }

    handleClick = (event) =>{
        // debugger;
        if (event.target.innerText === 'Delete'){
            storyService.deleteStory(this.id);
            // delete Story.all[this.id]
            event.target.parentElement.remove()
        }
    }
}