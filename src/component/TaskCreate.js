import React, { useState } from "react";

export default function TaskCreate({ onCreate }) {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };
  const handleChangeText = (event) => {
    setText(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(title, text);
    setTitle("");
    setText("");
  };
  return (
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
  );
}
