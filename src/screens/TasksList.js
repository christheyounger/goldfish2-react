import React, { Component } from 'react';
import TasksListTask from '../component/TasksListTask';

export default class TasksList extends Component {
    constructor(props) {
        super(props);
        this.state = {tasks: []};
    }
    componentDidMount() {
        fetch('http://localhost:8000/api/tasks')
        .then(response => response.json())
        .then(tasks => this.setState({tasks}))
    }
    render() {
        return (
            <ol>
                {this.state.tasks.map(task => (
                    <TasksListTask key={task.id} task={task} />
                ))}
            </ol>
        )
    }
}