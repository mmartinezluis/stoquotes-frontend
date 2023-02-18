// import logo from "./logo.svg";
import "./App.css";
import QuotesMachine from "./pages/quotesMachine";
import StoriesMachine from "./pages/storiesMachine";

function App() {
  return (
    <div className="App">
      <div className="container">
        <StoriesMachine />
        <QuotesMachine />
      </div>
    </div>
  );
}

export default App;
