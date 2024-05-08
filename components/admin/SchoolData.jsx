"use client"
import React, { useEffect, useState } from 'react';

const SchoolData = () => {
  const [faculties, setFaculties] = useState([]);
  const [activeFaculty, setActiveFaculty] = useState(null);
  const [loadingFaculties, setLoadingFaculties] = useState(true);
  const [errorFaculties, setErrorFaculties] = useState('');

  useEffect(() => {
    fetchFaculties();
  }, []);

  const fetchFaculties = () => {
    fetch('http://localhost:8000/api/faculties')
      .then(response => {
        if (!response.ok) {
          throw new Error(`Failed to fetch faculties, status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        const fetchPromises = data.map(faculty => {
          return fetchFacultyData(faculty)
            .catch(error => {
              console.error(`Error fetching data for faculty ${faculty.id}:`, error);
              // Return a modified faculty object with an error property
              return { ...faculty, error: error.message };
            });
        });

        // Wait for all fetch requests to complete
        return Promise.all(fetchPromises)
          .then(facultiesWithUpdatedData => {
            setFaculties(facultiesWithUpdatedData);
            setLoadingFaculties(false);
          });
      })
      .catch(error => {
        setErrorFaculties(error.message);
        setLoadingFaculties(false);
      });
  };

  const fetchFacultyData = (faculty) => {
    const fetchDepartments = fetch(`http://localhost:8000/api/departments/${faculty.id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Failed to fetch departments for faculty ${faculty.id}, status: ${response.status}`);
        }
        return response.json();
      });

    const fetchLevels = fetchDepartments.then(departments => {
      const fetchLevelPromises = departments.map(department => {
        return fetch(`http://localhost:8000/api/levels/${department.id}`)
          .then(response => {
            if (!response.ok) {
              throw new Error(`Failed to fetch levels for department ${department.id}, status: ${response.status}`);
            }
            return response.json();
          })
          .then(levels => {
            department.levels = levels;
            return department;
          });
      });
      return Promise.all(fetchLevelPromises);
    });

    return fetchLevels.then(departmentsWithLevels => {
      faculty.departments = departmentsWithLevels;
      return faculty;
    });
  };

  const handleTabClick = (faculty) => {
    setActiveFaculty(activeFaculty === faculty ? null : faculty);
  };

  if (loadingFaculties) return <p className="text-center mt-4">Loading faculties...</p>;
  if (errorFaculties) return <p className="text-center mt-4">Error fetching faculties: {errorFaculties}</p>;

  return (
    <div className="container mx-auto px-4">
      <div className="mb-4 border-b border-gray-200">
        <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" role="tablist">
          {faculties.map(faculty => (
            <li key={faculty.id} className="me-2" role="presentation">
              <button
                className={`inline-block p-4 border-b-2 rounded-t-lg ${activeFaculty === faculty ? 'border-gray-700' : 'border-gray-200'} focus:outline-none`}
                onClick={() => handleTabClick(faculty)}
                aria-controls={`faculty-${faculty.id}`}
                aria-selected={activeFaculty === faculty ? 'true' : 'false'}
              >
                {faculty.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div id="default-tab-content">
        {faculties.map(faculty => (
          <div key={faculty.id} className={`p-4 rounded-lg ${activeFaculty === faculty ? 'block' : 'hidden'}`} id={`faculty-${faculty.id}`} role="tabpanel">
            {activeFaculty === faculty && (
              <div>
                {faculty.error && <p>Error: {faculty.error}</p>}
                {faculty.departments && faculty.departments.map(department => (
                  <div key={department.id} className="my-4 border rounded p-4">
                    <h3 className="text-lg font-semibold mb-2">{department.name}</h3>
                    {department.error && <p>Error: {department.error}</p>}
                    {department.levels && (
                      <ul>
                        {department.levels.map(level => (
                          <li key={level.id}>Level {level.level}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SchoolData;






