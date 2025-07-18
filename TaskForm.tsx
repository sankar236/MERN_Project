import React, { useState } from "react";
import axios from "axios";

const TaskForm = ({ onAdd }: { onAdd: () => void }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/tasks", { title });
    setTitle("");
    onAdd();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Task title" />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
