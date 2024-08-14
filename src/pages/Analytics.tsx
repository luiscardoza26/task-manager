// src/pages/Analytics.tsx
import React from 'react';
import { useTasks } from '../hooks/useTasks';
import ProductivityChart from '../components/charts/ProductivityChart';

const Analytics: React.FC = () => {
  const { tasks, loading, error } = useTasks();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const completedTasks = tasks.filter(task => task.status === 'completed');
  const totalTasks = tasks.length;
  const completionRate = totalTasks > 0 ? (completedTasks.length / totalTasks) * 100 : 0;

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-4">Analytics</h2>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold mb-2">Task Completion Rate</h3>
        <p className="text-3xl font-bold">{completionRate.toFixed(2)}%</p>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <ProductivityChart tasks={tasks} />
      </div>
    </div>
  );
};

export default Analytics;
