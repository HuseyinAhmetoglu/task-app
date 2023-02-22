import logo from "./logo.svg";
import "./App.css";
import TaskCreate from "./component/TaskCreate";
import TaskList from "./component/TaskList";

function App() {
  const toTaskCreate = (title, text) => {
    console.log(title, text);
  };
  return (
    <div className="App">
      <TaskCreate onCreate={toTaskCreate} />
      <TaskList />
    </div>
  );
}

export default App;
