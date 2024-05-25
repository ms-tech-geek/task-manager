// src/App.js
import React, { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import StatusFilter from './components/StatusFilter';

function App() {
  const [status, setStatus] = useState('All');

  return (
    <div className="App">
      <h1>Task Manager</h1>
      <TaskForm />
      <StatusFilter status={status} setStatus={setStatus} />
      <TaskList statusFilter={status} />
    </div>
  );
}

export default App;
