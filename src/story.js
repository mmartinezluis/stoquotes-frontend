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
      this.element.innerHTML =`
        <div>
            <p> 
                Quote: <em>${this.quote.body}</em><br>
                Story posted by User ${this.user_id} on ${this.created_at}<br>
                <span class="description">${this.description}</span>
            </p>
        </div>
        <button>Edit</button>
        <button>Delete</button>
      `
      return this.element
    }

    addToDom(){
        Story.storyContainer.appendChild(this.storyHTML())
    }
    
    static renderForm(){
        Story.storyForm.innerHTML = `
        <form id="new-story-form"> 
          Description: <br>
          <textarea id="description"></textarea>
          <input type="submit" id="create">
        </form>
        `
        Story.storyForm.style.display = 'none'
    }

    handleClick = (event) =>{
        if (event.target.innerText === 'Delete'){
            event.target.parentElement.remove()
            storyService.deleteStory(this.id);
            
            // Trying to update the Story.al array with below code; does not work
            // const index = Story.all.findIndex(x => x.id === this.id)
            // Story.all.splice(index,index) 
            
        } else if (event.target.innerText === 'Edit'){
            event.target.innerText = 'Save'
            this.createEditFields()         // change the span field for the story into an input field for editing
            
        } else if (event.target.innerText === 'Save'){
            event.target.innerText = 'Edit'
            this.saveUpdatedItem()
        }
    }

    createEditFields = () => { 
        const story = this.element.querySelector('span')
        let inputValue = story.innerText
        let property = story.classList[0]
        story.outerHTML = `<input type="textarea" class="edit-${property}" value ="${inputValue}">`
    }

    saveUpdatedItem = () => {
        this.description = this.element.querySelector(".edit-description").value
        storyService.sendPatch(this)
    }
}