import React, { useEffect, useState } from "react";
import TasksListTask from "../component/TasksListTask";
import TaskNew from "../component/TaskNew";
import { get, saveNew } from "../services/Tasks";

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

  return (
    <div>
      <h2>Today's Tasks:</h2>
      <table class="table">
        <thead>
          <tr>
            <th />
            <th>Task</th>
            <th>Due</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map(task => (
            <TasksListTask key={task.id} task={task} />
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
