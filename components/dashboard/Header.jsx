// components/dashboard/Header.js
"use client"
import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { FaUserCircle, FaBell } from 'react-icons/fa';
import Image from 'next/image';

const Header = () => {
  const { user } = useAuth();

  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <div className="hidden sm:flex items-center space-x-4">
        <Image src="/assets/logo.jpg" alt="Profile" width={32} height={32} className="rounded-full" />
        <span className="text-lg font-semibold text-gray-800">Student Dashboard</span>
      </div>
      <div className="flex items-center space-x-4">
        <FaBell size={20} className="text-gray-600" />
        <div className="flex items-center space-x-2">
          {/* <FaUserCircle size={24} className="text-gray-800" /> */}
          <span className="hidden sm:block text-sm font-medium text-gray-800">Welcome back, {user?.name}</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
