// src/components/layout/Sidebar.tsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { HomeIcon, ClipboardDocumentListIcon, ChartBarIcon } from '@heroicons/react/24/outline';



const Sidebar: React.FC = () => {
  return (
    <div className="bg-gray-800 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
      <nav>
        <NavLink to="/" className={({ isActive }) => `block py-2.5 px-4 rounded transition duration-200 ${isActive ? 'bg-blue-500' : 'hover:bg-gray-700'}`}>
          <HomeIcon className="h-5 w-5 inline-block mr-2" />
          Dashboard
        </NavLink>
        <NavLink to="/tasks" className={({ isActive }) => `block py-2.5 px-4 rounded transition duration-200 ${isActive ? 'bg-blue-500' : 'hover:bg-gray-700'}`}>
        <ClipboardDocumentListIcon className="h-5 w-5 inline-block mr-2" />
          Tasks
        </NavLink>
        <NavLink to="/analytics" className={({ isActive }) => `block py-2.5 px-4 rounded transition duration-200 ${isActive ? 'bg-blue-500' : 'hover:bg-gray-700'}`}>
          <ChartBarIcon className="h-5 w-5 inline-block mr-2" />
          Analytics
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
