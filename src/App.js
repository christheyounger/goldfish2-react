import React, { Component } from 'react';
import logo from './goldfish.svg';
import './App.css';
import TasksList from './screens/TasksList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TasksList/>
      </div>
    );
  }
}

export default App;
