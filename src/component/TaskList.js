import React from "react";
import TaskShow from "./TaskShow";
import { useContext } from "react";
import TaskContext from "../context/TaskContext";

export default function TaskList() {
  const { tasks } = useContext(TaskContext);

  return (
    <div className="task-list">
      {tasks.map((task, index) => {
        return <TaskShow task={task} key={index} />;
      })}
    </div>
  );
}
