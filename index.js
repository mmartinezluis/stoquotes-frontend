// any global variables
let addStory = false;

const base_url = "http://localhost:3000"
const authorService = new AuthorService(base_url)
const storyService = new StoryService(base_url)
const quoteService = new QuoteService(base_url)
const addBtn = document.getElementById('new-story-btn');
addBtn.style.display = 'none'

authorService.getAuthors()
storyService.getStories()

Story.storyForm.style.display = 'none'
Story.storyForm.addEventListener('submit', handleSubmit)

 function handleSubmit() {
  event.preventDefault()
  const user_id = document.getElementsByClassName('user_id')[0].value
  const quote_id = document.getElementsByClassName('quote_id')[0].value
  quoteService.getQuote(user_id, quote_id)
  storyService.createStory(user_id, quote_id)
  event.target.reset()
}

// Random number generator from an array; used in 'authorService.js', getAuthorQuote method
Array.prototype.random = function () {
  return this[Math.floor((Math.random()*this.length))]
}

// any initialzations of application
addBtn.addEventListener('click', (e) => {
  addStory = !addStory;
  if (addStory){
      Story.storyForm.style.display = 'block';
  } else {
      Story.storyForm.style.display = 'none';
  }
})

