import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js";
import {
  getAuth,
  onAuthStateChanged,
  // signInWithCustomToken,
  signOut,
} from "firebase/auth";
// } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";
// import { destroyPortal } from "../../tools/customFunctions.js";

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// const authButton = document.getElementById("auth-status-btn");

export const auth = getAuth(app);

export { onAuthStateChanged };

export const handleLoginAndSignup = (
  e,
  isLoginMode,
  afterLoginSignupCallaback
) => {
  //   e.preventDefault();
  //   const form = document.getElementById("session-form");
  //   const fieldsMapping = {
  //     "login-email": "email",
  //     "login-password": "password",
  //     "signup-firstname": "first_name",
  //     "signup-lastname": "last_name",
  //     "signup-email": "email",
  //     "signup-password": "password",
  //     "signup-passwordconfirm": "passwordconfirm",
  //   };
  //   let payload = {};
  //   // Generate the payload dynamically using the login form fields or the signup form fields
  //   for (let input of form.querySelectorAll("input")) {
  //     const key = fieldsMapping[input.id];
  //     if (!key) {
  //       showModal("The form has been tampered with!!! Refresh the page", 2);
  //       return;
  //     }
  //     const value = input.value.trim();
  //     if (!value.length) {
  //       showModal(key[0].toUpperCase() + key.slice(1) + " cannot be blank!", 2);
  //       return;
  //     }
  //     payload[fieldsMapping[input.id]] = value;
  //   }
  //   // compare password and pasword confirm if signing up
  //   let c = payload["passwordconfirm"];
  //   if (c && c !== payload["password"]) {
  //     showModal("Password and Password confirm must match!", 2);
  //     return;
  //   }
  //   // If signing up, backend does not need 'passwordconfirm'
  //   delete payload["passwordconfirm"];
  //   _getTokenAndUser(payload, isLoginMode ? "/login" : "/signup")
  //     .then(({ token, user }) => {
  //       _authenticateWithFirebase(
  //         token,
  //         user,
  //         isLoginMode,
  //         afterLoginSignupCallaback
  //       );
  //     })
  //     // catches the errors related to the token generation and
  //     // user retrieval/creation in Ruby on Rails backend
  //     .catch((err) => {
  //       showModal(err, 2);
  //     });
};

export const handleLogout = () => {
  signOut(auth)
    .then(() => {
      console.log("from logout call");
      //   showModal("You have been successfully logged out");
    })
    .catch((err) => {
      //   showModal(err, 2);
    });
};

//<**************** HELPER FUNCTIONS ******************>

// async function _getTokenAndUser(payload, endpoint) {
//   const resp = await fetch("sessionService.baseUrl" + endpoint, {
//     method: "POST",
//     headers: {
//       "content-type": "application/json",
//     },
//     body: JSON.stringify(payload),
//   });
//   // @TODO: properly handle error object to extract message string only
//   if (!resp.ok) {
//     console.log(resp);
//     if (resp.status >= 500) {
//       throw new Error(resp.statusText + "; Code: " + resp.status);
//     }
//     return resp.text().then((text) => {
//       throw new Error(text);
//     });
//   }
//   const data = await resp.json();
//   return data;
// }

// function _authenticateWithFirebase(
//   token,
//   user,
//   isLoginMode,
//   afterLoginSignupCallaback
// ) {
//   return (
//     signInWithCustomToken(auth, token)
//       .then((userCredential) => {
//         // console.log("from authentication function");
//         // const profile = JSON.parse(user);
//         // console.log(profile);
//         // User.setUserProfile(profile);
//         // destroyPortal("session-portal");
//         // User.isLoggedIn = true;
//         // authButton.innerText = "Logout";
//         // showModal("You have been successfully logged in!!!", 1);
//         // // if (isLoginMode) userService.fetchSocialData(profile.id);
//         // if (typeof afterLoginSignupCallaback === "function") {
//         //   afterLoginSignupCallaback();
//         // }
//       })
//       // Catches the errors related to user authentication in Firebase
//       .catch((error) => {
//         // const errorCode = error.code;
//         // const errorMessage = error.message;
//         console.log(error);
//         // showModal(errorMessage + "; Code: " + errorCode, 2);
//       })
//   );
// }
