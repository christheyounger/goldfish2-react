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
      <ol>
        {tasks.map(task => (
          <TasksListTask key={task.id} task={task} />
        ))}
      </ol>
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
