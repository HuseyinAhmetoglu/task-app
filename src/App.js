import "./App.css";
import TaskCreate from "./component/TaskCreate";
import TaskList from "./component/TaskList";
import { useEffect, useContext } from "react";
import TaskContext from "./context/TaskContext";

function App() {
  const { fetchTask } = useContext(TaskContext);
  useEffect(() => {
    fetchTask();
  }, []);

  return (
    <div className="App">
      <TaskCreate />
      <h2>Görevler</h2>
      <TaskList />
    </div>
  );
}

export default App;
