import React, { useContext, useEffect } from "react";
// import logo from "./logo.svg";
import "./App.css";
import { useDispatch } from "react-redux";
import Machine from "./components/Machine";
import { PortalProvider } from "./components/portal/PortalContext";
import { auth, onAuthStateChanged } from "./app/services/auth/firebase";
import { getProfile } from "./app/features/users/usersSlice";
import { ModalContext } from "./components/modal/ModalContext";
import Modal from "./components/modal/Modal";

function App() {
  console.log("dfdf");
  const dispatch = useDispatch();
  const { isOpen, modalContent, showModal } = useContext(ModalContext);

  useEffect(() => {
    // Firebase auth state observer
    onAuthStateChanged(auth, (user) => {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      if (user) {
        console.log(user);
        dispatch(getProfile(user.uid))
          .unwrap()
          .then((userProfile) => {
            showModal("You have been sucessfully logedd in!");
          })
          .catch((error) => {});
        // Have this code run only when the page is first loaded or refreshed
        // AND the user is logged in in Firebase
        // if (User.isLoggedIn !== null) return;
        // console.log("from state observer");
        // userService
        //   .fetchProfileAndSocialData(user.uid)
        //   .then(([profile, social]) => {
        //     console.log(profile, social);
        //     User.setUserProfile(profile);
        //     User.setUserSocial(social);
        //     User.isLoggedIn = true;
        //     authButton.innerText = "Logout";
        //   })
        //   .catch((err) => {
        //     // if there is an error getting the user profile data from the Ruby on Rails
        //     // backend, log the user out of Firebase and clean up the user and the Login button
        //     showModal(err, 2);
        //     console.log(err);
        //     handleLogout();
        //     User.cleanupUser();
        //     User.isLoggedIn = false;
        //     authButton.innerText = "Login";
        //   });
      } else {
        // User is signed out
        console.log("from logged out state observer");
        // User.cleanupUser();

        // if (User.isLoggedIn === null) {
        //   storyService.getStories();
        // }
        // User.isLoggedIn = false;
        // authButton.innerText = "Login";
      }
    });
  }, [showModal, dispatch]);

  return (
    // <div className="App">
    //   <div className="container">
    //     <Routes>
    //       <Route
    //         element={
    //           <Machine>
    //             <StoriesMachine />
    //             <QuotesMachine />
    //             <Outlet />
    //           </Machine>
    //         }
    //       >
    //         <Route path="/" element={null} />
    //         <Route path="/stories" element={null} />
    //       </Route>
    //     </Routes>
    //   </div>
    // </div>
    <div className="App">
      <div className="container">
        <Modal isOpen={isOpen} modalContent={modalContent} />
        <PortalProvider>
          <Machine />
        </PortalProvider>
        {/* <Routes>
          <Route path="/" element={<Machine />} />
          <Route path="/stories" element={<Machine />} />
          <Route path="/quote" element={<Machine />} />
          <Route path="/authors" element={<Machine />} />
          <Route path="/categories" element={<Machine />} />
          <Route path="/author-search" element={<Machine />} />
        </Routes> */}
      </div>
    </div>
  );
}

export default App;
