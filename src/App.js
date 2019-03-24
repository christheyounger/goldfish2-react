import React, { Component } from 'react';
import logo from './goldfish.svg';
import './App.css';
import TasksList from './screens/TasksList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Goldfish
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <TasksList/>
      </div>
    );
  }
}

export default App;
