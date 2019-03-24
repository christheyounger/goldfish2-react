import React, { useEffect, useState } from 'react';
import TasksListTask from '../component/TasksListTask';

export default function TasksList(props) {

    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        if (!tasks.length) fetch('http://localhost:8000/api/tasks')
        .then(response => response.json())
        .then(setTasks)
    })

    function addTask() {
        setTasks(tasks.concat({}));
    }

    return (
        <div>
            <ol>
                {tasks.map(task => (
                    <TasksListTask key={task.id} task={task} />
                ))}
            </ol>
            <button onClick={() => {addTask()}}>
                Hello
            </button>
        </div>
    )
}