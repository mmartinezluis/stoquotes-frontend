import React, { useContext, useRef } from "react";
// import { useNavigate } from "react-router-dom";
import { PortalContext } from "./portal/PortalContext";

const StoriesMachine = () => {
  const storiesInterfaceRef = useRef();
  // const navigate = useNavigate();
  const { setLoginControls } = useContext(PortalContext);
  return (
    <>
      {/* STORIES NAVBAR */}
      <nav className="navbar navbar-dark bg-dark" aria-label="Main navigation">
        <div className="container-fluid">
          <button
            className="navbar-toggler p-0 border-0"
            type="button"
            id="navbarSideCollapse"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasScrolling"
            aria-controls="offcanvasScrolling"
            aria-label="Toggle navigation"
            onClick={() => {
              if (storiesInterfaceRef.current.className.includes("show")) {
                // navigate("/stories");
                storiesInterfaceRef.current.focus();
              }
            }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <span
            className="navbar-brand"
            id="auth-status-btn"
            onClick={() => {
              console.log("dfdfd");
              setLoginControls((state) => {
                return { ...state, isOpen: {} };
              });
            }}
          >
            Login
          </span>
        </div>
      </nav>

      {/* // START OF WHITE-BOX; HOLDS ALL CREATED STORIES */}
      <div className="container" id="white-box">
        <div
          className="navbar-collapse offcanvas offcanvas-end"
          data-bs-scroll="true"
          data-bs-backdrop="true"
          tabIndex="-1"
          id="offcanvasScrolling"
          aria-labelledby="offcanvasScrollingLabel"
          style={{ width: "700px" }}
          ref={storiesInterfaceRef}
          onBlur={() => {
            if (!storiesInterfaceRef.current.classList.contains("show")) {
              // navigate("/");
            }
          }}
        >
          <div className="offcanvas-header">
            <h3 className="offcanvas-title" id="offcanvasScrollingLabel">
              Stories
            </h3>
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>

          {/* <!-- IMPORTANT: 100% width ensures that the text field generated via JS when clicking --> */}
          {/* <!-- on 'edit' on a story the field is not shrank, causing an unpleasant change --> */}
          <div className="offcanvas-body" style={{ width: "100%" }}>
            <ul
              className="nav nav-pills mb-3 justify-content-center"
              id="pills-tab"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="pills-feed-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-feed"
                  type="button"
                  role="tab"
                  aria-controls="pills-feed"
                  aria-selected="false"
                >
                  Feed
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-my-stories-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-my-stories"
                  type="button"
                  role="tab"
                  aria-controls="pills-my-stories"
                  aria-selected="true"
                >
                  My Stories
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-followers-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-followers"
                  type="button"
                  role="tab"
                  aria-controls="pills-followers"
                  aria-selected="false"
                >
                  Followers
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-following-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-following"
                  type="button"
                  role="tab"
                  aria-controls="pills-following"
                  aria-selected="false"
                >
                  Following
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-profile"
                  type="button"
                  role="tab"
                  aria-controls="pills-profile"
                  aria-selected="false"
                >
                  Profile
                </button>
              </li>
            </ul>

            <div className="tab-content" id="pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="pills-feed"
                role="tabpanel"
                aria-labelledby="pills-feed-tab"
              >
                <div id="public-stories-container">
                  {/* <!-- PUBLIC/FEED STORIES GO HERE --> */}
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="pills-my-stories"
                role="tabpanel"
                aria-labelledby="pills-my-stories-tab"
              >
                <div id="stories-container">
                  {/* <!-- STORIES ARE INCLUDED INSIDE THIS CONTAINER --> */}
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="pills-followers"
                role="tabpanel"
                aria-labelledby="pills-followers-tab"
              >
                <div id="followers-container">This is the followers tab</div>
              </div>
              <div
                className="tab-pane fade"
                id="pills-following"
                role="tabpanel"
                aria-labelledby="pills-following-tab"
              >
                <div id="following-container">This is the following tab</div>
              </div>
              <div
                className="tab-pane fade"
                id="pills-profile"
                role="tabpanel"
                aria-labelledby="pills-profile-tab"
              >
                <div id="profile-container">This is the profile tab</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StoriesMachine;
