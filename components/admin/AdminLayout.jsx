// components/admin/AdminLayout.js
"use client"
import React from 'react';
import AdminSidebar from './Sidebar';
import AdminHeader from './Header';

const AdminLayout = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-100">
      <AdminSidebar />
      <main className="flex-1">
        <AdminHeader />
        <div className="p-6">
          {children}
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
