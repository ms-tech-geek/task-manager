// src/components/TaskList.jsx
import React, { useEffect, useState } from 'react';
import { firestore } from '../firebase';

const TaskList = ({ statusFilter }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const unsubscribe = firestore
      .collection('tasks')
      .orderBy('createdAt', 'desc')
      .onSnapshot((snapshot) => {
        const tasksData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setTasks(tasksData);
      });
    return () => unsubscribe();
  }, []);

  const filteredTasks = tasks.filter(
    (task) => statusFilter === 'All' || task.status === statusFilter
  );

  return (
    <div>
      {filteredTasks.map((task) => (
        <div key={task.id}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p>{task.status}</p>
          {/* Add buttons for updating status and deleting the task */}
        </div>
      ))}
    </div>
  );
};

export default TaskList;
