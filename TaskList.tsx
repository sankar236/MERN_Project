import React, { useEffect, useState } from "react";
import axios from "axios";

type Task = {
  _id: string;
  title: string;
  completed: boolean;
};

const TaskList = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const fetchTasks = async () => {
    const res = await axios.get("http://localhost:5000/api/tasks");
    setTasks(res.data);
  };

  const toggleComplete = async (id: string, current: boolean) => {
    await axios.patch(`http://localhost:5000/api/tasks/${id}`, { completed: !current });
    fetchTasks();
  };

  const deleteTask = async (id: string) => {
    await axios.delete(`http://localhost:5000/api/tasks/${id}`);
    fetchTasks();
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div>
      {tasks.map((task) => (
        <div key={task._id}>
          <span
            onClick={() => toggleComplete(task._id, task.completed)}
            style={{ textDecoration: task.completed ? "line-through" : "none", cursor: "pointer" }}
          >
            {task.title}
          </span>
          <button onClick={() => deleteTask(task._id)}>❌</button>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
