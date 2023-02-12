import Story from "../models/story.js";
import { showModal, User } from "../output.js";

export default class StoryService {
  constructor(endpoint) {
    this.endpoint = endpoint;
  }

  getStories() {
    fetch(`${this.endpoint}/stories`)
      .then((resp) => resp.json())
      .then((stories) => {
        stories.forEach((story) => {
          const s = new Story(story);
          Story.all.push(s);
          Story.allSet.add(s.id);
          s.addToFeed();
        });
      })
      .catch((err) => {
        console.log(err);
        showModal(err, 2);
      });
  }

  createStory(user_id, quote_id, event) {
    const description = document
      .querySelector("#new-story-form textarea")
      .value.trim();
    if (!description.length) {
      event.target.reset();
      showModal("Story description cannot be blank", 2);
      return;
    }
    const story = {
      description: description,
      user_id: user_id,
      quote_id: quote_id,
    };

    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(story),
    };

    fetch(`${this.endpoint}/stories`, config)
      .then((resp) => {
        if (!resp.ok) {
          return resp.text().then((text) => {
            throw new Error(text);
          });
        }
        return resp.json();
      })
      .then((story) => {
        console.log(story);
        // cleanup the currently no stories message if this is the first
        // story user is publishing
        const stories = User.currentUser.stories;
        if (!stories.length) {
          Story.storyContainer.innerHTML = "";
        }
        User.currentUser.stories.push(story);
        const s = new Story(story);
        s.addToDom();
        event.target.reset();
        Story.storyForm.style.display = "none";
        Story.showForm = false;
        Story.writeStoryBtn.className = Story.writeStoryBtn.className.replace(
          "active",
          ""
        );
        console.log(User.currentUser);
        showModal(`Story successfully created`, 1);
      })
      .catch((err) => {
        console.log(err);
        showModal(err, 2);
      });
  }

  sendPatch(story, new_description, event) {
    const configObj = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      // important: the Ruby on Rails backend accepts "description" as a param
      body: JSON.stringify({ description: new_description }),
    };

    fetch(`${this.endpoint}/stories/${story.id}`, configObj)
      .then((resp) => resp.json())
      .then((json) => {
        story.description = new_description;
        story.storyHTML();
        Story.revertEditFields(event);
        showModal(`Story #${story.id} successfully updated`, 1);
      })
      .catch(function (error) {
        alert(error);
      });
  }

  deleteStory(id, event) {
    fetch(`${this.endpoint}/stories/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((json) => {
        event.target.parentElement.parentElement.parentElement.remove();
        const stories = User.currentUser.stories;
        User.currentUser.stories = stories.filter((story) => story.id !== id);
        if (!User.currentUser.stories.length) {
          Story.storyContainer.innerHTML =
            "<h5 class='text-center'><em>It seems you have not created any stories yet!!!</em></h5>";
        }
        console.log(User.currentUser);
        showModal(json.message, 1);
      })
      .catch((err) => {
        console.log(err);
        showModal(err, 2);
      });
  }
}
