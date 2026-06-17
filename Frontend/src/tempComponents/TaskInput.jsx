import React from "react";

function TaskInput({
  task,
  setTask,
  addTask,
  updateTask,
  editId,
}) {
  return (
    <div className="input-section">
      <input
        type="text"
        placeholder="Enter your task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={editId ? updateTask : addTask}>
        {editId ? "Update" : "Add"}
      </button>
    </div>
  );
}

export default TaskInput;