// any global variables
let addStory = false;

const base_url = "http://localhost:3000"
const authorService = new AuthorService(base_url)
const storyService = new StoryService(base_url)
const addBtn = document.getElementById('new-story-btn');

authorService.getAuthors()
storyService.getStories()

Story.renderForm()
Story.storyForm.addEventListener('submit', handleSubmit)

addBtn.addEventListener('click', (e) => {
    addStory = !addStory;
    if (addStory){
        Story.storyForm.style.display = 'block';
    } else {
        Story.storyForm.style.display = 'none';
    }
})





function handleSubmit(){
  event.preventDefault()
  storyService.createStory()
  event.target.reset()
}

function handleUpdate(){
  event.preventDefault()
  storyService.updateStory()

}


// any initialzations of application
