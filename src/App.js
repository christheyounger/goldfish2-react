import React, { Component } from "react";
import "./App.css";
import Header from "./component/Header";
import TasksList from "./screens/TasksList";
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <TasksList />
      </div>
    );
  }
}

export default App;
