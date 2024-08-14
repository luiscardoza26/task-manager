import React from 'react';
import { Bar } from 'react-chartjs-2';
import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  BarElement, 
  Title, 
  Tooltip, 
  Legend 
} from 'chart.js';
import { Task } from '../../types';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface ProductivityChartProps {
  tasks: Task[];
}

const ProductivityChart: React.FC<ProductivityChartProps> = ({ tasks }) => {
  const last7Days = Array.from({ length: 7 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() - i);
    return d.toISOString().split('T')[0];
  }).reverse();

  const completedTasksByDay = last7Days.map(date => 
    tasks.filter(task => 
      task.status === 'completed' && 
      new Date(task.dueDate).toISOString().split('T')[0] === date
    ).length
  );

  const data = {
    labels: last7Days.map(date => new Date(date).toLocaleDateString()),
    datasets: [
      {
        label: 'Completed Tasks',
        data: completedTasksByDay,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Productivity Over Last 7 Days',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1,
        },
      },
    },
  };

//   if (completedTasksByDay.every(count => count === 0)) {
//     return <p>No completed tasks in the last 7 days.</p>;
//   }

  return <Bar options={options} data={data} />;
};

export default ProductivityChart;
