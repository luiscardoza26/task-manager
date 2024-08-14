// src/services/taskService.ts

import { Task, TaskFormData } from '../types';

const STORAGE_KEY = 'tasks';

const getStoredTasks = (): Task[] => {
  const tasksJson = localStorage.getItem(STORAGE_KEY);
  return tasksJson ? JSON.parse(tasksJson) : [];
};

const setStoredTasks = (tasks: Task[]) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
};

export const taskService = {
  getTasks: (): Promise<Task[]> => {
    return Promise.resolve(getStoredTasks());
  },

  createTask: (taskData: TaskFormData): Promise<Task> => {
    const tasks = getStoredTasks();
    const newTask: Task = {
      ...taskData,
      id: Date.now().toString(),
    };
    tasks.push(newTask);
    setStoredTasks(tasks);
    return Promise.resolve(newTask);
  },

  updateTask: (id: string, taskData: Partial<TaskFormData>): Promise<Task> => {
    const tasks = getStoredTasks();
    const taskIndex = tasks.findIndex(t => t.id === id);
    if (taskIndex === -1) {
      return Promise.reject(new Error('Task not found'));
    }
    const updatedTask = { ...tasks[taskIndex], ...taskData };
    tasks[taskIndex] = updatedTask;
    setStoredTasks(tasks);
    return Promise.resolve(updatedTask);
  },

  deleteTask: (id: string): Promise<void> => {
    const tasks = getStoredTasks();
    const updatedTasks = tasks.filter(t => t.id !== id);
    setStoredTasks(updatedTasks);
    return Promise.resolve();
  },
};
