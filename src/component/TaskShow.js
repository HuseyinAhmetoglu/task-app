import React, { useState } from "react";
import TaskCreate from "./TaskCreate";
import { useContext } from "react";
import TaskContext from "../context/TaskContext";

export default function TaskShow({ task, onUpdate }) {
  const [editMod, setEditMod] = useState(false);
  const { deleteTaskById, editTaskById } = useContext(TaskContext);

  const handleDelete = () => {
    deleteTaskById(task.id);
  };

  const handleEdit = () => {
    setEditMod(!editMod);
  };

  const handleUpdate = (id, title, text) => {
    setEditMod(false);
    editTaskById(id, title, text);
  };

  return (
    <div className="task-show">
      {editMod ? (
        <TaskCreate task={task} updateMod={true} onUpdate={handleUpdate} />
      ) : (
        <div>
          <h3 className="task-h">Göreviniz</h3>
          <p className="task-title">{task.title}</p>
          <h3 className="task-h">Yapılacaklar</h3>
          <p className="task-texk">{task.text}</p>
          <div>
            <button className="task-delete" onClick={handleDelete}>
              Sil
            </button>
            <button className="task-edit" onClick={handleEdit}>
              Güncelle
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
