import Story from "../models/story.js";
import { showModal } from "../output.js";

export default class StoryService {
  constructor(endpoint) {
    this.endpoint = endpoint;
  }

  getStories() {
    fetch(`${this.endpoint}/stories`)
      .then((resp) => resp.json())
      .then((stories) => {
        for (let i = stories.length - 1; i >= 0; i--) {
          const s = new Story(stories[i]);
          s.addToDom();
        }
      })
      .catch((err) => {
        console.log(err);
        showModal(err);
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
      .then((resp) => resp.json())
      .then((story) => {
        const s = new Story(story);
        s.addToDom();
        event.target.reset();
        Story.storyForm.style.display = "none";
        Story.showForm = false;
        Story.writeStoryBtn.className = Story.writeStoryBtn.className.replace(
          "active",
          ""
        );
        showModal(`Story successfully created`);
      })
      .catch((err) => {
        console.log(err);
        showModal(err);
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
        showModal(`Story #${story.id} successfully updated`);
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
        event.target.parentElement.parentElement.remove();
        showModal(json.message);
      })
      .catch((err) => {
        console.log(err);
        showModal(err);
      });
  }
}
