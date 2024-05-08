// components/dashboard/Overview.js
"use client"
import React from 'react';

const Overview = () => {
  return (
    <div className="p-2">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white p-4 shadow rounded-lg flex justify-between items-center">
          <div>
            <h2 className="text-lg font-semibold">Courses In Progress</h2>
            <p className="text-xl font-bold">5</p>
          </div>
          {/* Icon or image can be placed here */}
        </div>
        <div className="bg-white p-4 shadow rounded-lg">
          <h2 className="text-lg font-semibold">Latest Scores</h2>
          <p className="text-xl font-bold">88%</p>
          {/* More details or graph can be added */}
        </div>
        <div className="bg-white p-4 shadow rounded-lg">
          <h2 className="text-lg font-semibold">Next Assignment Due</h2>
          <p className="text-md">Calculus, Sep 10</p>
          {/* Countdown timer or calendar link can be added */}
        </div>
      </div>
    </div>
  );
};

export default Overview;
