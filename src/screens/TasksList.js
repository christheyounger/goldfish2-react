import React, { useEffect, useState } from 'react';
import TasksListTask from '../component/TasksListTask';
import TaskNew from '../component/TaskNew';

export default function TasksList(props) {

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState(null);
    useEffect(() => {
        if (!tasks.length) fetch('http://localhost:8000/api/tasks')
        .then(response => response.json())
        .then(setTasks)
    });

    async function addTask (task) {
        await fetch('http://localhost:8000/api/tasks', {
            body: JSON.stringify(task),
            method: 'POST',
            headers: {'Content-Type': 'application/json'}
        });
        setTasks(tasks.concat(task));
    }

    return (
        <div>
            <ol>
                {tasks.map(task => (
                    <TasksListTask key={task.id} task={task} />
                ))}
            </ol>
            <button onClick={() => {setNewTask({})}}>
                Hello
            </button>
            {newTask && (<TaskNew add={addTask}/>)}
        </div>
    )
}