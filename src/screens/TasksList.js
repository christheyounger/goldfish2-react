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

    addTask = () => {
        const { tasks } = this.state;
        tasks.push({});
        this.setState({ tasks });
    }

    render() {
        const { addTask } = this;
        return (
            <div>
                <ol>
                    {this.state.tasks.map(task => (
                        <TasksListTask key={task.id} task={task} />
                    ))}
                </ol>
                <button onClick={addTask}>
                    Hello
                </button>
            </div>
        )
    }
}