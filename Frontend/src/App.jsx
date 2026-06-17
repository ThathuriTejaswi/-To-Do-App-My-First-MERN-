import React, { useState, useEffect } from "react";
import "./App.css";
import TaskInput from "./component/TaskInput";
import TaskList from "./component/TaskList";

const API_URL = import.meta.env.VITE_API_URL;

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editId, setEditId] = useState(null);

  const fetchTasks = async () => {
    try {
      const res = await fetch(`${API_URL}/tasks`);
      const data = await res.json();

      if (Array.isArray(data)) {
        setTasks(data);
      } else {
        setTasks([]);
        console.error(data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = async () => {
    if (!task.trim()) return;

    await fetch(`${API_URL}/tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ task }),
    });

    setTask("");
    fetchTasks();
  };

  const updateTask = async () => {
    if (!task.trim()) return;

    await fetch(`${API_URL}/tasks/${editId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ task }),
    });

    setTask("");
    setEditId(null);
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await fetch(`${API_URL}/tasks/${id}`, {
      method: "DELETE",
    });

    fetchTasks();
  };

  const editTask = (id, value) => {
    setTask(value);
    setEditId(id);
  };

  return (
    <div className="app">
      <div className="todo-card">
        <h1>✨ My To-Do List</h1>

        <TaskInput
          task={task}
          setTask={setTask}
          addTask={addTask}
          updateTask={updateTask}
          editId={editId}
        />

        <TaskList
          tasks={tasks}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      </div>
    </div>
  );
}

export default App;