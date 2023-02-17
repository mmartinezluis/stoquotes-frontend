// import logo from "./logo.svg";
import "./App.css";
import QuotesMachine from "./pages/quotesMachine";
import StoriesMachine from "./pages/storiesMachine";

function App() {
  return (
    <div className="App">
      <div className="contienr">
        {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
        <StoriesMachine />
        <QuotesMachine />
      </div>
    </div>
  );
}

export default App;
