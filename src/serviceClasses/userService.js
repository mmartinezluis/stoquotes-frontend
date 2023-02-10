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

  async fetchProfileAndSocialData() {
    const [profileResponse, socialResponse] = await Promise.all([
      fetch(this.backendBaseUrl + "/profile"),
      fetch(this.socialBaseUrl + "/categories"),
    ]);
    const profile = await profileResponse.json();
    const social = await socialResponse.json();
    return [profile, social];
  }
}

export default UserService;
