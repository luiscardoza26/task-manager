// src/pages/Dashboard.tsx
import React from 'react';
import { useTasks } from '../hooks/useTasks';
import TaskSummary from '../components/dashboard/TaskSummary';
import RecentTasks from '../components/dashboard/RecentTasks';

const Dashboard: React.FC = () => {
  const { tasks, loading, error } = useTasks();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <TaskSummary tasks={tasks} />
      <RecentTasks tasks={tasks} />
    </div>
  );
};

export default Dashboard;
