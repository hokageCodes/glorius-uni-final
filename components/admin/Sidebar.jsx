// components/admin/Sidebar.js
"use client"
import React from 'react';
import Link from 'next/link';
import { FaUsers, FaBookOpen, FaChartPie, FaCog } from 'react-icons/fa';

const AdminSidebar = () => {
  return (
    <aside className="w-64 bg-blue-900 text-white h-screen">
      <div className="flex flex-col h-full p-5">
        <h2 className="text-lg font-bold mb-8">Admin Panel</h2>
        <ul className="flex flex-col space-y-4">
          <li>
            <Link legacyBehavior href="/admin">
              <a className="flex items-center space-x-2 hover:bg-blue-800 p-2 rounded-lg">
                <FaUsers />
                <span>Overview</span>
              </a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/admin/users">
              <a className="flex items-center space-x-2 hover:bg-blue-800 p-2 rounded-lg">
                <FaUsers />
                <span>Users</span>
              </a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/admin/school-data">
              <a className="flex items-center space-x-2 hover:bg-blue-800 p-2 rounded-lg">
                <FaBookOpen />
                <span>School Data</span>
              </a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/admin/uploads">
              <a className="flex items-center space-x-2 hover:bg-blue-800 p-2 rounded-lg">
                <FaChartPie />
                <span>Uploads</span>
              </a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/admin/settings">
              <a className="flex items-center space-x-2 hover:bg-blue-800 p-2 rounded-lg">
                <FaCog />
                <span>Settings</span>
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default AdminSidebar;


