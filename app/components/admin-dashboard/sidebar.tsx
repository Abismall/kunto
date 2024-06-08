"use client";

import React, { useState } from 'react';
import { FaBars, FaTimes, FaFileAlt } from 'react-icons/fa';

const AdminDashboardSidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex relative">
      {/* Mobile toggle button */}
      <button
        className="md:hidden bg-primary text-white p-4 fixed left-0 z-50"
        onClick={toggleSidebar}
      >
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`bg-gray-700 text-white h-full fixed left-0 top-14 ransition-all duration-500 ${isHovered ? 'w-40' : 'w-20'}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex flex-col items-center space-y-4 py-4">
       
          <div className="flex items-center space-x-2 text-lg">
            <FaFileAlt size={24} />
            {isHovered && <span>Sisältö</span>}
          </div>
        </div>
      </aside>

      {/* Overlay */}
   
      {/* Main content */}
      <main
        className={`flex-1 top-14 transition-all duration-500 ease-in-out ${isHovered ? 'pointer-events-none admin-dim-overlay ml-40' : 'pointer-events-auto ml-20'}
         
  `}
      >
        {/* Your content goes here */}
      </main>
    </div>
  );
};

export default AdminDashboardSidebar;
