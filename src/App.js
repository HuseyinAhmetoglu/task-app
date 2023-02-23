import logo from "./logo.svg";
import "./App.css";
import TaskCreate from "./component/TaskCreate";
import TaskList from "./component/TaskList";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const toTaskCreate = (title, text) => {
    const task = [
      ...tasks,
      {
        id: Math.floor(Math.random() * 999999999),
        title,
        text,
      },
    ];
    setTasks(task);
  };
  const deleteTaskById = (id) => {
    const deletedTask = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(deletedTask);
  };
  const editTaskById = (id, updatedTitle, updatedText) => {
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
