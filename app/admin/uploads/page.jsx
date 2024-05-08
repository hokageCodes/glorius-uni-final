
"use client"
import React from 'react';
import FacultyForm from '../../../components/admin/FacultyForm';
import AdminLayout from '@/components/admin/AdminLayout';

const SchoolDataUpload = () => {
  const handleFacultySubmit = (data) => {
    // Logic to submit faculty data to the backend
  };

  return (
    <AdminLayout>
        <div>
        <h2 className="text-2xl font-semibold mb-4">School Data Upload</h2>
        <div className="mb-8">
            <h3 className="text-xl font-semibold mb-2">Upload Faculty</h3>
            <FacultyForm onSubmit={handleFacultySubmit} />
        </div>
        </div>
    </AdminLayout>
  );
};

export default SchoolDataUpload;
