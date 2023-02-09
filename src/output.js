import Author from "./models/author.js";
import Category from "./models/category.js";
import Quote from "./models/quote.js";
import Story from "./models/story.js";
import User from "./models/user.js";
import AuthorService from "./serviceClasses/authorService.js";
import CategoryService from "./serviceClasses/categoryService.js";
import QuoteService from "./serviceClasses/quoteService.js";
import StoryService from "./serviceClasses/storyService.js";
import SessionService from "./serviceClasses/sessionService.js";
import { showModal } from "./modal/modal.js";
import UserService from "./serviceClasses/userService.js";

// Ruby on Rails backend base url
const base_url = "http://localhost:3000";
// Amazon API Gateway–DynamoDB database base url
const social_url = "";

// Initialiazers
const authorService = new AuthorService(base_url);
const storyService = new StoryService(base_url);
const quoteService = new QuoteService(base_url);
const categoryService = new CategoryService(base_url);
const sessionService = new SessionService(base_url);
const userService = new UserService("", base_url);

export {
  User,
  Story,
  Quote,
  Category,
  Author,
  storyService,
  quoteService,
  categoryService,
  authorService,
  sessionService,
  userService,
  showModal,
};
