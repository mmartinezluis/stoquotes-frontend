import { showModal, Story, User } from "../output.js";

class UserService {
  constructor(social_base, backend_base) {
    this.socialBaseUrl = social_base;
    this.backendBaseUrl = backend_base;
  }

  //   Leave it here for the moment
  //   getProfile(userId) {
  //     fetch(this.backendBaseUrl + "/profile", {
  //       method: "POST",
  //       headers: {
  //         "content-type": "application/json",
  //       },
  //       body: JSON.stringify({ user: { id: userId } }),
  //     })
  //       .then((resp) => resp.json())
  //       .then((data) => {
  //         console.log(data);
  //       })
  //       .catch((err) => {
  //         showModal(err, 2);
  //       });
  //   }

  fetchSocialData(userId) {
    fetch(this.socialBaseUrl + "/users/" + userId)
      .then((resp) => {
        if (!resp.ok) {
          throw new Error(
            "An error ocurred while fetching social data: " + resp.status
          );
        }
        return resp.json();
      })
      .then((data) => {
        console.log(data);
        User.setUserSocial(data);
      })
      .catch((err) => {
        showModal(err, 2);
        console.log(err);
      });
  }

  // Make parallel http requests;
  // Later, probably make profile fetch the main request, and if it
  // success, only then query the social database
  async fetchProfileAndSocialData(userId) {
    const [profileResponse, socialResponse] = await Promise.all([
      fetch(this.backendBaseUrl + `/profile/` + userId),
      fetch(this.socialBaseUrl + "/users/" + userId),
    ]);
    if (!profileResponse.ok) {
      return profileResponse.text().then((text) => {
        throw new Error(text);
      });
    }
    const profile = await profileResponse.json();
    const social = await socialResponse.json();
    // const social = {};
    return [profile, social];
  }

  buildFeed(story_ids) {
    fetch(this.backendBaseUrl + "/feed", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user: { story_ids: [...story_ids] } }),
    })
      .then((resp) => {
        if (!resp.ok) {
          throw new Error(resp.statusText + "; Code: " + resp.status);
        }
        return resp.json();
      })
      .then((stories) => {
        console.log(stories);
        for (let story of stories) {
          const s = new Story(story);
          User.publicUsers.push(story.user);
          User.feed.push(s);
        }
      })
      .catch((err) => {
        console.log(err);
        showModal(err, 2);
      });
  }
}

export default UserService;
