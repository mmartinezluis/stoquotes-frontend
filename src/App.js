// import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import QuotesMachine from "./pages/quotesMachine";
import StoriesMachine from "./pages/storiesMachine";

function App() {
  return (
    <div className="App">
      <div className="container">
        {/* <Routes>
          <Route path="/">
            <Route index element={<QuotesMachine />} />
            <Route path="stories" element={<StoriesMachine />} />
          </Route>
        </Routes> */}
        <QuotesMachine />
        <StoriesMachine />
      </div>
    </div>
  );
}

export default App;
