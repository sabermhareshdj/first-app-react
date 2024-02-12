import logo from "./logo.svg";
import "./App.css";
import MyFirstComponent from "./MyFirstComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <MyFirstComponent />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to refresh.
        </p>
        <h1>Tarmez Academy</h1>
        <MyFirstComponent />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <MyFirstComponent />
      </header>
    </div>
  );
}

export default App;
