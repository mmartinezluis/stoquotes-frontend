import {
  User,
  Story,
  Quote,
  Category,
  Author,
  storyService,
  quoteService,
  categoryService,
  authorService,
  showModal,
} from "./src/output.js";

// Main navigation pane buttons
let navTabs = document.getElementsByClassName("nav-link flex-sm-fill");
// Form for searching for authors
const authorSearchForm = document.getElementById("search");

// The 'Wrtie a story' button (writeStoryBtn)
const writeStoryBtn = Story.writeStoryBtn;
writeStoryBtn.style.display = "none";

// Load the user stories, the categories, and the authors
storyService.getStories();
categoryService.getCategories();
authorService.loadAuthors();

Author.toggleBtnBackground(document.getElementById("get-quote"));

Story.storyForm.style.display = "none";
Story.storyForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const user_id = document.getElementsByClassName("user_id")[0].value;
  const quote_id = document.getElementsByClassName("quote_id")[0].value;
  storyService.createStory(user_id, quote_id, event);
}

function hideStoryBtnFormAndQuote() {
  writeStoryBtn.style.display = "none";
  writeStoryBtn.className = writeStoryBtn.className.replace("active", "");
  Story.storyForm.style.display = "none";
  Story.storyForm.innerHTML = "";
  Story.showForm = false;
  Quote.quotesContainer.innerHTML = "";
}

// Add event listeners to the nav tabs
for (const tab of navTabs) {
  tab.addEventListener("click", handleNavTabs);
}

function handleNavTabs(event) {
  hideStoryBtnFormAndQuote();
  switch (event.target.id) {
    case "nav-home-tab":
      break;
    case "nav-random-quote-tab":
      // There are a total of 757 authors; choose a random author id
      let authorId = Math.floor(Math.random() * Author.total);
      authorService.getAuthorQuote(authorId);
      break;
    case "nav-authors-tab":
      authorService.getAuthors();
      break;
    case "nav-categories-tab":
      break;
    case "nav-search-author-tab":
      authorSearchForm.reset();
  }
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
writeStoryBtn.addEventListener("click", (e) => {
  Story.showForm = !Story.showForm;
  if (Story.showForm) {
    Story.storyForm.style.display = "block";
    writeStoryBtn.className = writeStoryBtn.className + " active";
  } else {
    Story.storyForm.style.display = "none";
    writeStoryBtn.className = writeStoryBtn.className.replace("active", "");
  }
});
