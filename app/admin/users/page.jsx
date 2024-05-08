// pages/admin/users.js
import React from 'react';
import AdminLayout from '../../../components/admin/AdminLayout';
import UserTable from '../../../components/admin/UserTable';

const AdminUsersPage = () => {
  return (
    <AdminLayout>
      <UserTable />
    </AdminLayout>
  );
};

export default AdminUsersPage;
