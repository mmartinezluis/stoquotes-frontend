class StoryService {
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
      });
  }

  createStory(user_id, quote_id) {
    const description = document
      .querySelector("#new-story-form textarea")
      .value.trim();
    if (!description.length) {
      showModal("Story description cannot be blank");
      return;
    }
    const story = {
      description: description,
      user_id: user_id,
      quote_id: quote_id,
    };

    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(story),
    };

    fetch(`${this.endpoint}/stories`, configObj)
      .then((resp) => resp.json())
      .then((story) => {
        const s = new Story(story);
        console.log(s);
        s.addToDom();
        showModal(`Story successfully created`);
      })
      .catch((err) => {
        console.log(err);
        showModal(err);
      });
  }

  sendPatch(story, new_description) {
    // let { description } = story;
    // const storyInfo = { description };
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
        showModal(`Story #${story.id} successfully updated`);
      })
      .catch(function (error) {
        alert(error);
      });
  }

  deleteStory(id) {
    fetch(`${this.endpoint}/stories/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((json) => {
        showModal(json.message);
      });
  }
}
