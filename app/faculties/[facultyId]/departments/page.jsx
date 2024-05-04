'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { usePathname } from 'next/navigation';
import { Icon } from '@iconify/react';

const DepartmentsPage = () => {
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();
  const pathSegments = pathname.split('/');
  const facultyId = pathSegments[2]; // Ensure this aligns with actual URL depth

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/departments/${facultyId}`);
        if (response.status === 200) {
          setDepartments(response.data);
        } else {
          throw new Error('Failed to fetch departments');
        }
      } catch (error) {
        console.error('Failed to fetch departments:', error);
      }
      setLoading(false);
    };

    if (facultyId) {
      fetchDepartments();
    }
  }, [facultyId]);

  if (loading) {
    return <div>Loading departments...</div>;
  }

  if (!departments.length) {
    return <div>No departments found for this faculty.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">Departments</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {departments.map((department) => (
          <div key={department.id} className="bg-white shadow-lg hover:shadow-xl rounded-lg p-6 transition-shadow duration-300 ease-in-out">
            <div className="flex items-center space-x-4">
              <Icon icon="ic:baseline-account-balance" className="h-8 w-8 text-blue-500" />
              <h2 className="text-xl font-semibold">{department.name}</h2>
            </div>
            <Link legacyBehavior href={`/faculties/${facultyId}/departments/${department.id}/levels`}>
              <a className="mt-4 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-200">
                Select University Level
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DepartmentsPage;
