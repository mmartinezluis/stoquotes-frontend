import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithCustomToken,
  signOut,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";
import { sessionService, showModal, User } from "../../output.js";

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

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
  } else {
    // User is signed out
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
      showModal("The form has been tampered with!!! Refresh the page");
      return;
    }
    const value = input.value.trim();
    if (!value.length) {
      showModal(key[0].toUpperCase() + key.slice(1) + " cannot be blank!");
      return;
    }
    payload[fieldsMapping[input.id]] = value;
  }

  // compare password and pasword confirm if signing up
  let c = payload["passwordconfirm"];
  if (c && c !== payload["password"]) {
    showModal("Password and Password Confirm must match!");
    return;
  }

  // If signing up, backend does not need 'passwordconfirm'
  delete payload["passwordconfirm"];

  _getToken(payload, isLoginMode ? "/login" : "/signup")
    .then(({ token, user }) => {
      console.log(payload);
      _authenticateWithFirebase(token, user);
    })
    .catch((err) => {
      showModal(err.message);
    });
};

async function _getToken(payload, endpoint) {
  const response = await fetch(sessionService.baseUrl + endpoint, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    console.log(response);
    const message =
      response.status === 406
        ? "Invalid email or password"
        : response.statusText + ", code: " + response.status;
    throw new Error(message);
  }

  const token = await response.json();
  return token;
}

function _authenticateWithFirebase(token, user) {
  return signInWithCustomToken(auth, token)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      showModal("You have been sucessfully logged in!!!");
      User.setUser(user);
      console.log(User.currentUser);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(error);
    });
}

export const handleLogout = () => {};
