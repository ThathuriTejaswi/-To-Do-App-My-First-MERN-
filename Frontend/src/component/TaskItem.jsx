import React from "react";

function TaskItem({ item, deleteTask, editTask }) {
  return (
    <div className="task-card">
      <span>{item.task}</span>

      <button onClick={() => editTask(item._id, item.task)}>
        Edit
      </button>

      <button onClick={() => deleteTask(item._id)}>
        Delete
      </button>
    </div>
  );
}

export default TaskItem;