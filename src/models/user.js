class User {
  // User auth state
  static isLoggedIn = null;
  // For logged in user
  static currentUser = {};
  // Social data; transformed for easy querying by frontend
  static followers = new Set();
  static following = new Set();
  static feed = new Set();
  // Social data as returned by dynamoDB; for easy posting to dynamoDB
  static followersMirror = {};
  static followingMirror = {};
  static feedMirror = {};
  static reactions = {};

  static setUserProfile = (user) => {
    User.currentUser = user;
  };

  static setUserSocial = (social) => {
    const data = social["Items"][0];
    User.feed = data.feed && new Set(data.feed.SS);
    User.following = data.following && new Set(data.following.SS);
    User.followers = data.followers && new Set(data.followers.SS);
    User.reactions = data.reactions;

    User.feedMirror = data.feed;
    User.followersMirror = data.following;
    User.followersMirror = data.followers;
  };

  static cleanupUser = () => {
    User.isLoggedIn = false;
    User.currentUser = {};

    User.feed = new Set();
    User.followers = new Set();
    User.following = new Set();

    User.followersMirror = {};
    User.followingMirror = {};
    User.feedMirror = {};
    User.reactions = {};
  };

  static publicUsers = [];

  constructor(username) {}
}

export default User;
