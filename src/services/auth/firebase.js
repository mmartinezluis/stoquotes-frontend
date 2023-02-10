import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js";
import {
  getAuth,
  onAuthStateChanged,
  signInWithCustomToken,
  signOut,
} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";
import { sessionService, showModal, User, userService } from "../../output.js";

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

const authButton = document.getElementById("auth-status-btn");

// Firebase user authentication state observer
onAuthStateChanged(auth, (user) => {
  if (user) {
    // Have this code run only when the page is first loaded or refreshed
    // AND the user is logged in in Firebase
    if (User.isLoggedIn !== null) return;
    console.log("from state observer");
    // userService.getProfile(user.uid);
    userService
      .fetchProfileAndSocialData(user.uid)
      .then(([profile, social]) => {
        console.log(profile, social);
        User.setUserProfile(profile);
        User.setUserSocial(social);
      })
      .catch((err) => {
        showModal(err, 2);
        console.log(err);
      });

    authButton.innerText = "Logout";
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
  } else {
    // User is signed out
    console.log("from logged out state observer");
    // if (User.isLoggedIn == null) showModal("Your session has expired", 3);
    User.cleanupUser();
    authButton.innerText = "Login";
  }
});

export const handleLoginAndSignup = (e, isLoginMode) => {
  e.preventDefault();
  const form = document.getElementById("session-form");
  const fieldsMapping = {
    "login-email": "email",
    "login-password": "password",
    "signup-firstname": "first_name",
    "signup-lastname": "last_name",
    "signup-email": "email",
    "signup-password": "password",
    "signup-passwordconfirm": "passwordconfirm",
  };
  let payload = {};
  // Generate the payload dynamically using the login form fields or the signup form fields
  for (let input of form.querySelectorAll("input")) {
    const key = fieldsMapping[input.id];
    if (!key) {
      showModal("The form has been tampered with!!! Refresh the page", 2);
      return;
    }
    const value = input.value.trim();
    if (!value.length) {
      showModal(key[0].toUpperCase() + key.slice(1) + " cannot be blank!", 2);
      return;
    }
    payload[fieldsMapping[input.id]] = value;
  }

  // compare password and pasword confirm if signing up
  let c = payload["passwordconfirm"];
  if (c && c !== payload["password"]) {
    showModal("Password and Password confirm must match!", 2);
    return;
  }

  // If signing up, backend does not need 'passwordconfirm'
  delete payload["passwordconfirm"];

  _getTokenAndUser(payload, isLoginMode ? "/login" : "/signup")
    .then(({ token, user }) => {
      _authenticateWithFirebase(token, user);
    })
    // catches the errors related to the token generation and
    // user retrieval/creation in Ruby on Rails backend
    .catch((err) => {
      showModal(err, 2);
    });
};

export const handleLogout = () => {
  signOut(auth)
    .then(() => {
      console.log("from logout call");
      showModal("You have been successfully logged out!");
    })
    .catch((err) => {
      showModal(err, 2);
    });
};

//<**************** HELPER FUNCTIONS ******************>

async function _getTokenAndUser(payload, endpoint) {
  const response = await fetch(sessionService.baseUrl + endpoint, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  // @TODO: properly handle error object to extract message string only
  if (!response.ok) {
    console.log(response);
    return response.text().then((text) => {
      throw new Error(text);
    });
  }
  const data = await response.json();
  return data;
}

function _authenticateWithFirebase(token, user) {
  return (
    signInWithCustomToken(auth, token)
      .then((userCredential) => {
        console.log("from authentication function");
        showModal("You have been successfully logged in!!!", 1);
      })
      // Catches the errors related to user authentication in Firebase
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error);
        showModal(errorMessage + "; Code: " + errorCode, 2);
      })
  );
}
