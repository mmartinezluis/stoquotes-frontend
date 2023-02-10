import { showModal } from "../output.js";

class UserService {
  constructor(social_base, backend_base) {
    this.socialBaseUrl = social_base;
    this.backendBaseUrl = backend_base;
  }

  getProfile(userId) {
    fetch(this.backendBaseUrl + "/profile", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ user: { id: userId } }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        showModal(err, 2);
      });
  }

  // Make parallel http requests;
  // Later, probably make profile fetch the main request, and if it
  // success, only then query the social database
  async fetchProfileAndSocialData(userId) {
    const [profileResponse, socialResponse] = await Promise.all([
      fetch(this.backendBaseUrl + "/profile", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ user: { id: userId } }),
      }),
      fetch(this.socialBaseUrl + "/users/" + userId),
    ]);
    if (!profileResponse.ok) {
      return profileResponse.text().then((text) => {
        throw new Error(text);
      });
    }
    const profile = await profileResponse.json();
    const social = await socialResponse.json();
    return [profile, social];
  }
}

export default UserService;
