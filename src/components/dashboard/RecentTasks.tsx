// src/components/dashboard/RecentTasks.tsx
import React from 'react';
import { Task } from '../../types';

interface RecentTasksProps {
  tasks: Task[];
}

const RecentTasks: React.FC<RecentTasksProps> = ({ tasks }) => {
  const recentTasks = tasks.slice(0, 5); // Get the 5 most recent tasks

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold mb-4">Recent Tasks</h3>
      <ul className="space-y-2">
        {recentTasks.map(task => (
          <li key={task.id} className="flex items-center justify-between">
            <span className="text-gray-800">{task.title}</span>
            <span className={`px-2 py-1 rounded-full text-xs font-semibold
              ${task.status === 'completed' ? 'bg-green-200 text-green-800' :
                task.status === 'in_progress' ? 'bg-blue-200 text-blue-800' :
                'bg-yellow-200 text-yellow-800'}`}>
              {task.status}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentTasks;
