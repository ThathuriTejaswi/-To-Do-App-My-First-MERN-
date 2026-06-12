import React from "react";

function TaskList({
  tasks,
  deleteTask,
  editTask,
}) {
  return (
    <div className="task-container">
      {tasks.length === 0 ? (
        <p className="empty">No tasks available</p>
      ) : (
        tasks.map((item) => (
          <div className="task-card" key={item._id}>
            <span>{item.task}</span>

            <div>
              <button
                className="edit-btn"
                onClick={() => editTask(item._id, item.task)}
              >
                Edit
              </button>

              <button
                className="delete-btn"
                onClick={() => deleteTask(item._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default TaskList;