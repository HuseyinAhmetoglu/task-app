import React, { useState } from "react";
import TaskCreate from "./TaskCreate";

export default function TaskShow({ task, onDelete, onUpdate }) {
  const [showEdit, setShowEdit] = useState(false);
  const handleDelete = () => {
    onDelete(task.id);
  };
  const handleEdit = () => {
    setShowEdit(!showEdit);
  };
  const handleUpdate = (id, title, text) => {
    setShowEdit(false);
    onUpdate(id, title, text);
  };
  return (
    <div className="task-show">
      {showEdit ? (
        <TaskCreate task={task} taskFormUpdate={true} onUpdate={handleUpdate} />
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
