// components/admin/Header.js
"use client"
import React from 'react';
import { FaSignOutAlt } from 'react-icons/fa';

const AdminHeader = () => {
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Admin Dashboard</h1>
      <button className="flex items-center space-x-2 bg-gray-200 p-2 rounded-full hover:bg-gray-300">
        <span>Logout</span>
        <FaSignOutAlt />
      </button>
    </header>
  );
};

export default AdminHeader;
