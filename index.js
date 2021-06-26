// any global variables

const base_url = "http://localhost:3000"

// Service classes
const authorService = new AuthorService(base_url)
const storyService = new StoryService(base_url)
const quoteService = new QuoteService(base_url)
const categoryService = new CategoryService(base_url)


// Main navigation pane buttons
let navTabs = document.getElementsByClassName('nav-link flex-sm-fill')


// The 'Wrtie a story' button (addBtn) and modal
const addBtn = document.getElementById('new-story-btn')
const modal = document.getElementById('modal-box')
addBtn.style.display = 'none'
// Variable for toggling the display prperty of the story form
let addStory = false;


// Load the user stories and the categories
storyService.getStories()
categoryService.getCategories()
authorService.loadAuthors()


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

function hideStoryBtnFormAndQuote(){
  addBtn.style.display = "none"
  Story.storyForm.innerHTML = ""
  Quote.quotesContainer.innerHTML = ""
}

// Add event listeners to the nav tabs
for(const tab of navTabs){
  tab.addEventListener('click', handleNavTabs)
}

function handleNavTabs(event){
  switch(event.target.id){
    case "nav-home-tab":
      hideStoryBtnFormAndQuote();
      break;
    case "nav-random-quote-tab":
      hideStoryBtnFormAndQuote()
      // There are a total of 757 authors; chose a random author id
      let authorId = [...Array(756).keys()].random()
      authorService.getAuthorQuote(authorId)
      break;
    case "nav-authors-tab":
      hideStoryBtnFormAndQuote()
      authorService.getAuthors()
      break;
    case "nav-categories-tab":
      hideStoryBtnFormAndQuote()
      break;
    case 'nav-search-author-tab':
      hideStoryBtnFormAndQuote()
  }
}


// Random number generator from an array; used index.js and in 'authorService.js', getAuthorQuote method
Array.prototype.random = function () {
  return this[Math.floor((Math.random()*this.length))]
}

// Used in author.js
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array
}


// any initialzations of application

// Toggle display property of story form
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



