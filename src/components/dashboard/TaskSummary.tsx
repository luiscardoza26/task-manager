// src/components/dashboard/TaskSummary.tsx
import React from 'react';
import { Task } from '../../types';

interface TaskSummaryProps {
  tasks: Task[];
}

const TaskSummary: React.FC<TaskSummaryProps> = ({ tasks }) => {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.status === 'completed').length;
  const pendingTasks = tasks.filter(task => task.status === 'pending').length;
  const inProgressTasks = tasks.filter(task => task.status === 'in_progress').length;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold mb-2">Total Tasks</h3>
        <p className="text-3xl font-bold">{totalTasks}</p>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold mb-2">Completed Tasks</h3>
        <p className="text-3xl font-bold text-green-600">{completedTasks}</p>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold mb-2">Pending Tasks</h3>
        <p className="text-3xl font-bold text-yellow-600">{pendingTasks}</p>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold mb-2">In Progress Tasks</h3>
        <p className="text-3xl font-bold text-blue-600">{inProgressTasks}</p>
      </div>
    </div>
  );
};

export default TaskSummary;
