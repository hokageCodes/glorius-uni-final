"use client"
import React, { useState } from 'react';

const AdminForm = () => {
    const [facultyName, setFacultyName] = useState('');
    const [facultyDescription, setFacultyDescription] = useState('');
    const [departments, setDepartments] = useState([{ name: '', numLevels: '' }]);

    const handleAddDepartment = () => {
        setDepartments([...departments, { name: '', numLevels: '' }]);
    };

    const handleDepartmentChange = (index, field, value) => {
        const newDepartments = [...departments];
        newDepartments[index][field] = value;
        setDepartments(newDepartments);
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      const facultyData = {
          name: facultyName,
          description: facultyDescription,
          departments: departments.map(dept => ({
              name: dept.name,
              levels: Array.from({ length: parseInt(dept.numLevels) }, (_, i) => ({
                  num: i + 1,
                  semesters: [] // Define default semesters or get them from form if needed
              }))
          }))
      };
  
      try {
          const response = await fetch('http://localhost:8000/api/faculties', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(facultyData)
          });
          const result = await response.json();
          if (!response.ok) throw new Error(result.message);
          alert('Faculty and departments saved successfully!');
      } catch (error) {
          console.error('Failed to save faculty:', error);
          alert(`Failed to save faculty and departments. Error: ${error.message}`);
      }
  };
  

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded">
            <h2 className="text-lg font-semibold text-gray-700">Add Faculty and Departments</h2>
            <form onSubmit={handleSubmit} className="mt-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="facultyName">
                    Faculty Name
                </label>
                <input
                    type="text"
                    id="facultyName"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={facultyName}
                    onChange={(e) => setFacultyName(e.target.value)}
                    required
                />

                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="facultyDescription">
                    Faculty Description
                </label>
                <textarea
                    id="facultyDescription"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={facultyDescription}
                    onChange={(e) => setFacultyDescription(e.target.value)}
                    required
                />

                <div className="mt-4">
                    <h3 className="text-md font-semibold text-gray-700">Departments</h3>
                    {departments.map((dept, index) => (
                        <div key={index} className="mt-4">
                            <input
                                type="text"
                                placeholder="Department Name"
                                className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
                                value={dept.name}
                                onChange={(e) => handleDepartmentChange(index, 'name', e.target.value)}
                                required
                            />
                            <input
                                type="number"
                                placeholder="Number of Levels"
                                className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={dept.numLevels}
                                onChange={(e) => handleDepartmentChange(index, 'numLevels', e.target.value)}
                                required
                            />
                        </div>
                    ))}
                    <button
                        type="button"
                        onClick={handleAddDepartment}
                        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Add Another Department
                    </button>
                </div>

                <button
                    type="submit"
                    className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Submit All
                </button>
            </form>
        </div>
    );
};

export default AdminForm;
