import React, { Component } from 'react';
import './App.css';
import MainMenu from '../MainMenu';

class App extends Component {
  render() {
    return (
      
      <div className="App">
      <MainMenu/>
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
        </header>
      </div>
    );
  }
}

export default App;
