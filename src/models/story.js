class Story {
  static all = [];
  static storyContainer = document.getElementById("stories-container");
  static storyForm = document.getElementById("form-container");
  static showForm = false;

  constructor({
    id,
    description,
    user_id,
    quote_id,
    quote,
    created_at,
    updated_at,
  }) {
    this.id = id;
    this.description = description;
    this.user_id = user_id;
    this.quote_id = quote_id;
    this.quote = quote;
    this.created_at = created_at;
    this.updated_at = updated_at;

    this.element = document.createElement("li");
    this.element.dataset.id = this.id;
    this.element.id = `story-${this.id}`;
    this.element.addEventListener("click", this.handleClick);

    Story.all.push(this);
  }

  quote() {
    return Quote.all.find((q) => q.id === this.quote_id);
  }

  storyHTML() {
    this.element.innerHTML = `
        <div>
            <div class="list-group-item list-group-item-action py-3 lh-tigh text-white bg-secondary ">
                <span>Quote: </span><br>
                <blockquote class="blockquote"><em>"${
                  this.quote.body
                }"</em></blockquote>
                <span>${this.quote.author_name}</span><br>
                <span>Story posted by User ${this.user_id} on ${normalizeDate(
      this.created_at
    )}:</span><br>
                <span class="description" rows="3">${
                  this.description
                }</span><br>
                <button>Edit</button>
                <button>Delete</button>
            </div>
            <hr>
        </div>
      `;
    return this.element;
  }

  addToDom() {
    Story.storyContainer.appendChild(this.storyHTML());
  }

  static renderForm(user_id, quote_id) {
    Story.storyForm.innerHTML = `
        <form id="new-story-form"> 
          <input type="hidden" class="user_id" value= ${user_id}>
          <input type="hidden" class="quote_id" value= ${quote_id}>
          <br>
          <div class="form-floating">
            <textarea class="form-control" id="description" style="height: 100px"></textarea>
            <label for="description">Description</label>
          </div>
          <input type="submit" class="btn btn-success" id="create">
        </form>
        `;
  }

  handleClick = (event) => {
    if (event.target.innerText === "Delete") {
      event.target.parentElement.parentElement.remove();
      storyService.deleteStory(this.id);
    } else if (event.target.innerText === "Edit") {
      event.target.innerText = "Save";
      // change the span field for the story into an input field for editing
      this.createEditFields();
    } else if (event.target.innerText === "Save") {
      event.target.innerText = "Edit";
      this.saveUpdatedItem();
    }
  };

  createEditFields = () => {
    const story = this.element.querySelector(".description");
    let inputValue = story.innerText;
    let property = story.classList[0];
    story.outerHTML = `<textarea class="edit-${property}" value =${inputValue} rows="3">${inputValue}</textarea>`;
  };

  saveUpdatedItem = () => {
    this.description = this.element.querySelector(".edit-description").value;
    storyService.sendPatch(this);
  };
}
