// any global variables

const base_url = "http://localhost:3000"

// Service classes
const authorService = new AuthorService(base_url)
const storyService = new StoryService(base_url)
const quoteService = new QuoteService(base_url)


// Main navigation pane buttons
const homeTab = document.getElementById('nav-home-tab')
const randomQuoteTab = document.getElementById('nav-random-qoute-tab')
const authorsTab = document.getElementById('nav-authors-tab')
const categoriesTab = document.getElementById('nav-categories-tab')
const searchAuthorTab = document.getElementById('nav-search-author-tab')


// The 'Wrtie a story' button (addBtn) and modal
const addBtn = document.getElementById('new-story-btn')
const modal = document.getElementById('modal-box')
addBtn.style.display = 'none'
// Variable for toggling the display prperty of the story form
let addStory = false;


// If there are any stories, stories are loaded first
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



authorsTab.addEventListener('click', function(){ authorService.getAuthors() })


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

function showModal(message){
  modal.innerText = message
  modal.className=""
  setTimeout(() => { modal.className="hidden"}, 3000)
}



