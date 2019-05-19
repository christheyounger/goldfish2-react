import React, { Component } from "react";
import { save } from "../services/Tasks";

export default class TasksListTask extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.task;
    this.completeTask = this.completeTask.bind(this);
  }
  async completeTask(event) {
    const completed = event.target.checked;
    const { task } = this.props;
    await save(task.id, { action: completed ? "complete" : "uncomplete" });
    this.setState({ completed });
  }
  render() {
    const { task, title, completed, due } = this.state;
    return (
      <tr>
        <td>
          <input
            type="checkbox"
            value={task}
            checked={completed}
            onChange={this.completeTask}
          />
        </td>
        <td>{title}</td>
        <td>{due}</td>
      </tr>
    );
  }
}
