import React from "react";

export default function TaskShow({ task }) {
  return (
    <div className="task-show">
      <h3 className="task-h">Göreviniz</h3>
      <p className="task-title">{task.title}</p>
      <h3 className="task-h">Yapılacaklar</h3>
      <p className="task-texk">{task.text}</p>
      <div>
        <button className="task-delete">Sil</button>
        <button className="task-edit">Güncelle</button>
      </div>
    </div>
  );
}
