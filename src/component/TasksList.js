import React, { Component } from 'react';

export default class TasksList extends Component {
    constructor(props) {
        super(props);
        this.state = {tasks: [{id: 1, title: 'cheese', done: true}]};
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
                    <li key={task.id}>
                        {task.title}
                    </li>
                ))}
            </ol>
        )
    }
}