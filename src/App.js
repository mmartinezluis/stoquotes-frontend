import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Outlet } from "react-router-dom";
import Machine from "./components/Machine";

function App() {
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
        <Machine />
        {/* <Routes>
          <Route element={<Machine />}>
          <Route path="/" element={null} />
          <Route path="/" element={<Machine />} />
          <Route path="/quote" element={<Machine />} />
          <Route path="/stories" element={<Machine />} />
          <Route path="/quote" element={<Machine />} />
          </Route>
        </Routes> */}
      </div>
    </div>
  );
}

export default App;
