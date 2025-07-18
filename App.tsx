import React, { useState } from "react"; 

import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [refresh, setRefresh] = useState(0);

  return (
    <div>
      <h1>Task Manager</h1>
      <TaskForm onAdd={() => setRefresh((r) => r + 1)} />
      <TaskList key={refresh} />
    </div>
  );
}

export default App;
