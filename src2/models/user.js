import { Story, userService } from "../output.js";

class User {
  // User auth status
  static isLoggedIn = null;
  // For logged in user
  static currentUser = {};
  static publicUsers = [];

  // store the instances of the logged-in user Story class;
  // keep a set for easy query
  static profileStories = [];
  static storiesIdSet = new Set();

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
    Story.loadProfileStories(user.stories);
  };

  static setUserSocial = (social) => {
    const data = social["Items"] && social["Items"][0];
    if (!data) return;
    User.feedPrecursor = data.feed && new Set(data.feed.SS);
    User.following = data.following && new Set(data.following.SS);
    User.followers = data.followers && new Set(data.followers.SS);
    User.reactions = data.reactions;
    User.feed = [];

    User.feedPrecursorMirror = data.feed;
    User.followersMirror = data.following;
    User.followersMirror = data.followers;
    userService.buildFeed(User.feedPrecursor);
  };

  static cleanupUser = () => {
    User.currentUser = {};
    User.profileStories = [];
    User.storiesIdSet = new Set();

    User.feedPrecursor = new Set();
    User.followers = new Set();
    User.following = new Set();

    User.followersMirror = {};
    User.followingMirror = {};
    User.feedPrecursorMirror = {};
    User.reactions = {};

    Story.storyContainer.innerHTML =
      "<h5 class='text-center'><em>Please <span>login</span> to access this feature</em></h5>";
  };

  static publicUsers = [];

  constructor(username) {}
}

export default User;
