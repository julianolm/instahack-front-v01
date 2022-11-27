import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          My first react page deployed!
        </p>
        <a
          className="App-link"
          href="https://github.com/julianolm/instahack-front-v01"
          target="_blank"
          rel="noopener noreferrer"
        >
          First page!
        </a>
      </header>
    </div>
  );
}

export default App;
