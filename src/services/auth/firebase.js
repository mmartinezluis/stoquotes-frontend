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
import { sessionService, showModal } from "../../output.js";

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

const login = document.createElement("button");
const logout = document.createElement("button");
login.innerText = "Firebase Login";
logout.innerText = "Firebase Logout";
console.log(login);
login.className = "btn btn-primary";
logout.className = "btn btn-danger";

const loginCallback = (
  email = "luis_mmartinez@live.com",
  password = "luis55"
) => {
  //   return signInWithEmailAndPassword(
  //     auth,
  //     (email = "luis_mmartinez@live.com"),
  //     (password = "luis55")
  //   )
  //     .then((userCredential) => {
  //       // Signed in
  //       console.log(userCredential);
  //       const user = userCredential.user;
  //       // ...
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       console.log(error);
  //       // ..
  //     });
  return signInWithCustomToken(
    "eyJfcmFpbHMiOnsibWVzc2FnZSI6Ik1RPT0iLCJleHAiOm51bGwsInB1ciI6InVzZXIifX0"
  )
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(error);
      // ...
    });
};

login.addEventListener("click", loginCallback);
logout.addEventListener("click", () => {
  signOut(auth)
    .then((data) => {
      // Sign-out successful.
      console.log(data, "success");
    })
    .catch((error) => {
      // An error happened.
      console.log(error);
    });
});

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("user state: logged in", user);
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    // ...
  } else {
    console.log("user state: logged out,");
    // User is signed out
    // ...
  }
});
document.querySelector("main").appendChild(login);
document.querySelector("main").appendChild(logout);
// export { login };

export const handleLogin = (e) => {
  e.preventDefault();
  const form = document.getElementById("session-form");
  const mapping = {
    "login-email": "email",
    "login-password": "password",
  };
  let payload = {};
  for (let input of form.querySelectorAll("input")) {
    const key = mapping[input.id];
    if (!key) {
      showModal("The form has been tampered with!!! Refresh the page");
      return;
    }
    const value = input.value.trim();
    if (!value.length) {
      showModal(key[0].toUpperCase() + key.slice(1) + " cannot be blank!");
      return;
    }
    payload[mapping[input.id]] = value;
  }

  getToken(payload, "/login")
    .then((data) => {
      console.log(data.token);
      return signInWithCustomToken(auth, data.token)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          showModal("You have been sucessfully logged in!!!");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(error);
        });
    })
    .catch((err) => {
      showModal(err.message);
    });

  //   return signInWithCustomToken(
  //       "eyJfcmFpbHMiOnsibWVzc2FnZSI6Ik1RPT0iLCJleHAiOm51bGwsInB1ciI6InVzZXIifX0"
  //     )
  //       .then((userCredential) => {
  //         // Signed in
  //         const user = userCredential.user;
  //         console.log(user);
  //         // ...
  //       })
  //       .catch((error) => {
  //         const errorCode = error.code;
  //         const errorMessage = error.message;
  //         console.log(error);
  //         // ...
  //       });
};

async function getToken(payload, endpoint) {
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

export const handleSignUp = ({ firstName, lastName, email, password }) => {};

export const handleLogout = () => {};
