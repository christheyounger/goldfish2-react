import React, { useEffect, useState } from "react";
import TasksListTask from "../component/TasksListTask";
import TaskNew from "../component/TaskNew";
import { get, saveNew, modify, save } from "../services/Tasks";

export default function TasksList(props) {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState(null);
  useEffect(() => {
    if (!tasks.length) get().then(setTasks);
  });

  async function addTask(task) {
    await saveNew(task);
    setTasks(tasks.concat(task));
  }

  async function update(id, data) {
    const oldTask = tasks.find(task => task.id === id);
    const newTask = { ...oldTask, ...data };
    await save(newTask);
    setTasks([...tasks.filter(task => task.id !== id), newTask]);
  }

  async function completeTask(id, completed) {
    const task = tasks.find(task => task.id === id);
    await modify(id, { action: completed ? "complete" : "uncomplete" });
    task.completed = completed;
    setTasks([...tasks.filter(task => task.id !== id), task]);
  }

  return (
    <div>
      <h2>Today's Tasks:</h2>
      <table className="table">
        <thead>
          <tr>
            <th />
            <th>Task</th>
            <th>Due</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map(task => (
            <TasksListTask
              key={task.id}
              completeTask={completed => completeTask(task.id, completed)}
              update={data => update(task.id, data)}
              {...task}
            />
          ))}
        </tbody>
      </table>
      <button
        onClick={() => {
          setNewTask({});
        }}
      >
        Hello
      </button>
      {newTask && <TaskNew add={addTask} />}
    </div>
  );
}
