class User {
  static currentUser = {};
  static followers = new Set();
  static following = new Set();
  static feed = new Set();
  static reactions = {};

  static publicUsers = [];

  static setUser = (user) => (User.currentUser = user);

  constructor(username) {}
}

export default User;
