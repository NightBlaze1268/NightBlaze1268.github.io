import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <link href="./src/output.css" rel="stylesheet"></link>
      <header className="App-header">
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
        <h1 class="text-6xl text-blue-500 font-bold underline">
            Hello world!
        </h1>
      </header>
    </div>
  );
}

export default App;
