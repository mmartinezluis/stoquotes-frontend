class StoryService {
  constructor(endpoint) {
    this.endpoint = endpoint;
  }

  getStories() {
    fetch(`${this.endpoint}/stories`)
      .then((resp) => resp.json())
      .then((stories) => {
        for (const story of stories) {
          const s = new Story(story);
          s.addToDom();
        }
      });
  }

  createStory(user_id, quote_id) {
    const story = {
      description: document.getElementById("description").value,
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
      });
  }

  sendPatch(story) {
    let { description } = story;
    const storyInfo = { description };
    const configObj = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(storyInfo),
    };

    fetch(`${this.endpoint}/stories/${story.id}`, configObj)
      .then((resp) => resp.json())
      .then((json) => {
        story.storyHTML();
        showModal(`Story #${story.id} successfully updated`);
      })
      .catch(function (error) {
        alert(error.message);
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
