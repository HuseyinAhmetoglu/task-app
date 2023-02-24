import "./App.css";
import TaskCreate from "./component/TaskCreate";
import TaskList from "./component/TaskList";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [tasks, setTasks] = useState([]);

  const toTaskCreate = async (title, text) => {
    const response = await axios.post("http://localhost:3004/tasks", {
      title,
      text,
    });
    const task = [...tasks, response.data];
    setTasks(task);
  };

  const fetchTask = async () => {
    const response = await axios.get("http://localhost:3004/tasks");
    setTasks(response.data);
  };

  useEffect(() => {
    fetchTask();
  }, []);

  const deleteTaskById = async (id) => {
    await axios.delete(`http://localhost:3004/tasks/${id}`);
    const deletedTask = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(deletedTask);
  };
  const editTaskById = async (id, updatedTitle, updatedText) => {
    await axios.put(`http://localhost:3004/tasks/${id}`, {
      title: updatedTitle,
      text: updatedText,
    });
    const updateTask = tasks.map((task) => {
      if (task.id === id) {
        return { id, title: updatedTitle, text: updatedText };
      }
      return task;
    });
    setTasks(updateTask);
  };
  return (
    <div className="App">
      <TaskCreate onCreate={toTaskCreate} />
      <h2>Görevler</h2>
      <TaskList
        tasks={tasks}
        onDelete={deleteTaskById}
        onUpdate={editTaskById}
      />
    </div>
  );
}

export default App;
