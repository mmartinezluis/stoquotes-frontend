// any global variables

const base_url = "http://localhost:3000"

const authorService = new AuthorService(base_url)
const storyService = new StoryService(base_url)

authorService.getAuthors()
storyService.getStories()


Story.storyForm.addEventListener('submit', handleSubmit)

Story.renderForm()


function handleSubmit(){
  event.preventDefault()
  storyService.createStory()
  event.target.reset()
}


// any initialzations of application

