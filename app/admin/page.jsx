// components/admin/AdminLayout.js
import React from 'react';
import AdminSidebar from '../../components/admin/Sidebar';
import AdminHeader from '../../components/admin/Header';

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
