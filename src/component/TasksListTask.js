import React, { Component } from "react";

export default class TasksListTask extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.task;
    this.completeTask = this.completeTask.bind(this);
  }
  completeTask(event) {
    const completed = event.target.checked;
    return fetch(`http://localhost:8000/api/tasks/${this.props.task.id}`, {
      method: "PATCH",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ action: completed ? "complete" : "uncomplete" })
    }).then(response => {
      if (response.ok) this.setState({ completed });
    });
  }
  render() {
    return (
      <li>
        <input
          type="checkbox"
          value={this.state.task}
          checked={this.state.completed}
          onChange={this.completeTask}
        />
        {this.state.title}
      </li>
    );
  }
}
