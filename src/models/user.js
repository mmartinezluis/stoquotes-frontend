class User {
  // For logged in user
  static currentUser = {};
  static followers = new Set();
  static following = new Set();
  static feed = new Set();
  static reactions = {};
  static isLoggedIn = null;
  static setUser = (user) => (User.currentUser = user);
  static cleanupUser = () => {
    User.currentUser = {};
    User.followers = new Set();
    User.following = new Set();
    User.feed = new Set();
    User.reactions = {};
  };

  static publicUsers = [];

  constructor(username) {}
}

export default User;
