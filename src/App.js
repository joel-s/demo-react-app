import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Demo</h2>
          <h3>Click a heading to sort or reverse sort direction</h3>
          <h3>Double-click a cell to edit; press enter to commit</h3>
        </div>
      </div>
    );
  }
}

export default App;
