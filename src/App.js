import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Machine from "./components/Machine";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Routes>
          <Route element={<Machine />}>
            <Route path="/" element={null} />
            <Route path="/stories" element={null} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
