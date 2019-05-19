import React from "react";

const TaskListTask = props => {
  const { key, title, due, completed, completeTask } = props;
  return (
    <tr>
      <td>
        <input
          type="checkbox"
          value={key}
          checked={completed}
          onChange={() => completeTask(!completed)}
        />
      </td>
      <td>{title}</td>
      <td>{due}</td>
    </tr>
  );
};

export default TaskListTask;
