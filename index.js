// any global variables

const base_url = "http://localhost:3000";

// Service classes
const authorService = new AuthorService(base_url);
const storyService = new StoryService(base_url);
const quoteService = new QuoteService(base_url);
const categoryService = new CategoryService(base_url);

// Main navigation pane buttons
let navTabs = document.getElementsByClassName("nav-link flex-sm-fill");
// Form for searching for authors
const authorSearchForm = document.getElementById("search");

// The 'Wrtie a story' button (addBtn) and modal
const addBtn = document.getElementById("new-story-btn");
const modal = document.getElementById("modal-box");
addBtn.style.display = "none";
// Variable for toggling the display prperty of the story form
let addStory = false;

// Load the user stories and the categories
storyService.getStories();
categoryService.getCategories();
authorService.loadAuthors();

Story.storyForm.style.display = "none";
Story.storyForm.addEventListener("submit", handleSubmit);

function handleSubmit() {
  event.preventDefault();
  const user_id = document.getElementsByClassName("user_id")[0].value;
  const quote_id = document.getElementsByClassName("quote_id")[0].value;
  quoteService.getQuote(user_id, quote_id);
  storyService.createStory(user_id, quote_id);
  event.target.reset();
}

function hideStoryBtnFormAndQuote() {
  addBtn.style.display = "none";
  Story.storyForm.innerHTML = "";
  Quote.quotesContainer.innerHTML = "";
}

// Add event listeners to the nav tabs
for (const tab of navTabs) {
  tab.addEventListener("click", handleNavTabs);
}

function handleNavTabs(event) {
  switch (event.target.id) {
    case "nav-home-tab":
      hideStoryBtnFormAndQuote();
      break;
    case "nav-random-quote-tab":
      hideStoryBtnFormAndQuote();
      // There are a total of 757 authors; chose a random author id
      let authorId = Math.floor(Math.random() * Author.total);
      authorService.getAuthorQuote(authorId);
      break;
    case "nav-authors-tab":
      hideStoryBtnFormAndQuote();
      authorService.getAuthors();
      break;
    case "nav-categories-tab":
      hideStoryBtnFormAndQuote();
      break;
    case "nav-search-author-tab":
      hideStoryBtnFormAndQuote();
      authorSearchForm.reset();
  }
}

// Used in author.js
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Function for converting dates
function normalizeDate(date) {
  return new Date(date).toDateString();
}

// any initialzations of application

// Show an error message if author is not found else render a qoute from selected author upon form submission
authorSearchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let input = e.target.querySelector("input").value;
  let author = Author.all.find((author) => author.name === input);
  if (author === undefined) {
    showModal("Author not found");
  } else {
    authorService.getAuthorQuote(author.id);
  }
});

// Toggle display property of story form
addBtn.addEventListener("click", (e) => {
  addStory = !addStory;
  if (addStory) {
    Story.storyForm.style.display = "block";
  } else {
    Story.storyForm.style.display = "none";
  }
});

// Load the message in modal box, hide the modal box, then show it for 3 seconds
function showModal(message) {
  modal.innerText = message;
  modal.className = "";
  setTimeout(() => {
    modal.className = "hidden";
  }, 3000);
}
