// pages/FacultiesPage.jsx
'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { FaLaptop, FaGavel, FaPaintBrush, FaCalculator, FaBuilding } from 'react-icons/fa';

const iconStyles = "text-blue-500 text-3xl mb-8 m-auto";

const facultyIcons = {
  "Computer Science": <FaLaptop className={iconStyles} />,
  "Law": <FaGavel className={iconStyles} />,
  "Arts": <FaPaintBrush className={iconStyles} />,
  "Engineering": <FaCalculator className={iconStyles} />,
  "Architecture": <FaBuilding className={iconStyles} />,
};

const FacultiesPage = () => {
  const [faculties, setFaculties] = useState([]);

  useEffect(() => {
    const fetchFaculties = async () => {
      const response = await axios.get('http://localhost:8000/api/faculties');
      setFaculties(response.data);
    };
    fetchFaculties();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">Faculties</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {faculties.map(faculty => (
          <div key={faculty.id} className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <div className="text-center">
              {facultyIcons[faculty.name] || <FaLaptop className={iconStyles} />}
              <h2 className="text-xl font-semibold mb-4">{faculty.name}</h2>
              <p className="text-gray-700 mb-4">{faculty.description}</p>
              <Link legacyBehavior href={`/faculties/${faculty.id}/departments`}>
                <a className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-200 ease-in-out">
                  View Departments
                </a>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FacultiesPage;
