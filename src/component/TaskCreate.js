import React, { useState } from "react";
import { useContext } from "react";
import TaskContext from "../context/TaskContext";

export default function TaskCreate({ task, updateMod, onUpdate }) {
  const { toTaskCreate } = useContext(TaskContext);
  const [title, setTitle] = useState(task ? task.title : "");
  const [text, setText] = useState(task ? task.text : "");

  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleChangeText = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (updateMod) {
      onUpdate(task.id, title, text);
    } else {
      toTaskCreate(title, text);
    }
    setTitle("");
    setText("");
  };
  return (
    <div>
      {updateMod ? (
        <div className="taskUpdate">
          <h3>Lütfen Taskı Güncelleyiniz!</h3>
          <form className="taskForm">
            <label className="taskLabel">Başlığı Güncelleyiniz</label>
            <input
              className="taskInput"
              value={title}
              onChange={handleChangeTitle}
            />
            <label className="taskLabel">Görevleri Güncelleyiniz</label>
            <textarea
              className="taskInput"
              rows={5}
              value={text}
              onChange={handleChangeText}
            />
            <button className="taskButton update-button" onClick={handleSubmit}>
              Düzenle
            </button>
          </form>
        </div>
      ) : (
        <div className="taskCreate">
          <h3>Lütfen Task Ekleyiniz!</h3>
          <form className="taskForm">
            <label className="taskLabel">Başlık</label>
            <input
              className="taskInput"
              value={title}
              onChange={handleChangeTitle}
            />
            <label className="taskLabel">Task</label>
            <textarea
              className="taskInput"
              rows={5}
              value={text}
              onChange={handleChangeText}
            />
            <button className="taskButton" onClick={handleSubmit}>
              Oluştur
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
