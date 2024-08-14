import { Task } from '../types';

export const sampleTasks: Task[] = [
  {
    id: '1',
    title: 'Complete project proposal',
    description: 'Write and submit the project proposal for the new client',
    status: 'in_progress',
    priority: 'high',
    dueDate: '2023-06-15',
    tags: ['work', 'proposal'],
  },
  {
    id: '2',
    title: 'Buy groceries',
    description: 'Get milk, eggs, bread, and vegetables',
    status: 'pending',
    priority: 'medium',
    dueDate: '2023-06-10',
    tags: ['personal', 'shopping'],
  },
  {
    id: '3',
    title: 'Prepare for presentation',
    description: 'Create slides and practice for the upcoming team presentation',
    status: 'pending',
    priority: 'high',
    dueDate: '2023-06-20',
    tags: ['work', 'presentation'],
  },
  {
    id: '4',
    title: 'Go for a run',
    description: 'Complete 5km run in the park',
    status: 'completed',
    priority: 'low',
    dueDate: '2023-06-08',
    tags: ['personal', 'health'],
  },
  {
    id: '5',
    title: 'Read a book',
    description: 'Finish reading "The Pragmatic Programmer"',
    status: 'in_progress',
    priority: 'medium',
    dueDate: '2023-06-30',
    tags: ['personal', 'learning'],
  },
  {
    id: '6',
    title: 'Complete code review',
    description: 'Review and provide feedback on team\'s code',
    status: 'completed',
    priority: 'high',
    dueDate: new Date().toISOString().split('T')[0], // Fecha de hoy
    tags: ['work', 'review'],
  },
  {
    id: '7',
    title: 'Update portfolio website',
    description: 'Add new projects and update skills section',
    status: 'completed',
    priority: 'medium',
    dueDate: new Date(Date.now() - 86400000).toISOString().split('T')[0], // Ayer
    tags: ['personal', 'portfolio'],
  },
];

export const initializeSampleData = () => {
  const existingTasks = localStorage.getItem('tasks');
  if (!existingTasks) {
    localStorage.setItem('tasks', JSON.stringify(sampleTasks));
  }
};
