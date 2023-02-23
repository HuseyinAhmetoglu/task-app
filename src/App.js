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
  return (
    <div className="App">
      <TaskCreate onCreate={toTaskCreate} />
      <h2>Görevler</h2>
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
