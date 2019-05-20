import React from "react";
import EditableText from "./EditableText";

const TaskListTask = props => {
  const { key, title, due, completed, update, completeTask } = props;
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
      <td>
        <EditableText key="title" value={title} update={update} />
      </td>
      <td>{due}</td>
    </tr>
  );
};

export default TaskListTask;
