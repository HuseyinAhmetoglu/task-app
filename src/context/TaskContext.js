import React, { createContext, useState } from "react";
import axios from "axios";
const TaskContext = createContext();

function Provider({ children }) {
  const [tasks, setTasks] = useState([]);

  const fetchTask = async () => {
    const response = await axios.get("http://localhost:3004/tasks");
    setTasks(response.data);
  };

  const toTaskCreate = async (title, text) => {
    const response = await axios.post("http://localhost:3004/tasks", {
      title,
      text,
    });
    const task = [...tasks, response.data];
    setTasks(task);
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

  const deleteTaskById = async (id) => {
    await axios.delete(`http://localhost:3004/tasks/${id}`);
    const deletedTask = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(deletedTask);
  };

  const sharedProps = {
    tasks,
    fetchTask,
    toTaskCreate,
    editTaskById,
    deleteTaskById,
  };

  return (
    <TaskContext.Provider value={sharedProps}>{children}</TaskContext.Provider>
  );
}
export { Provider };
export default TaskContext;
