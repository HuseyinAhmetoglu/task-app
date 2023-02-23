import React from "react";
import TaskShow from "./TaskShow";

export default function TaskList({ tasks }) {
  return (
    <div className="task-list">
      {tasks.map((task, index) => {
        return <TaskShow task={task} key={index} />;
      })}
    </div>
  );
}
