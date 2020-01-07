import React from 'react';
import logo from './logo.svg';
import './App.css';
import ComContainer from './comContainer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <ComContainer />
        <a
          className="App-link"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
