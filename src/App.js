import React from "react";
import logo from "./logo.svg";
import "./App.css";
import TextInput from "./components/TextInput";

function App() {
  const name = "Ulf";
  return (
    <div className="App">
      <header className="App-header">
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
        <a
          className="App-link"
          href="https://lexicon.se"
          target="_blank"
          rel="noopener noreferrer"
        >
          Lexicon
        </a>
      </header>
      <div>
        <TextInput name={name} />
        <TextInput name={"Erik"} />
        <TextInput name={"Fredrik"} />
      </div>
      <footer>&copy; {name}</footer>
    </div>
  );
}

export default App;
