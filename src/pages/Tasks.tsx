// src/pages/Tasks.tsx
import React, { useState } from 'react';
import TaskList from '../components/tasks/TaskList';
import TaskForm from '../components/tasks/TaskForm';
import { useTasks } from '../hooks/useTasks';
import { TaskFormData } from '../types';

const Tasks: React.FC = () => {
  const { tasks, loading, error, addTask, updateTask, deleteTask } = useTasks();
  const [showForm, setShowForm] = useState(false);

  const handleAddTask = (taskData: TaskFormData) => {
    addTask(taskData);
    setShowForm(false);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Tasks</h2>
      <button
        onClick={() => setShowForm(!showForm)}
        className="mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        {showForm ? 'Cancel' : 'Add New Task'}
      </button>
      {showForm && <TaskForm onSubmit={handleAddTask} />}
      <TaskList tasks={tasks} onUpdateTask={updateTask} onDeleteTask={deleteTask} />
    </div>
  );
};

export default Tasks;
