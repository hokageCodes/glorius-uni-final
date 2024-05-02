"use client"
// pages/signin.js
import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import Link from 'next/link';

const Signin = () => {
  const { login } = useAuth();
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const identifier = event.target.identifier.value;
    const password = event.target.password.value;

    const response = await fetch('http://localhost:8000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ identifier, password }),
    });

    if (response.ok) {
      const data = await response.json();
      login(data);
    } else {
      const errData = await response.json();
      setError(errData.error || 'Failed to login');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <div className="max-w-md w-full bg-white rounded p-8 shadow">
      <div className="flex justify-center mb-6">
          <img src="/assets/logo.jpg" alt="Logo" className="h-12" />
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="identifier" className="text-sm font-medium text-gray-700">Email/Matric Number</label>
            <input type="text" name="identifier" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" required />
          </div>
          <div>
            <label htmlFor="password" className="text-sm font-medium text-gray-700">Password</label>
            <input type="password" name="password" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" required />
          </div>
          <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700">
            Login
          </button>
          {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Need an account? <Link legacyBehavior href="/signup"><a className="font-medium text-indigo-600 hover:text-indigo-500">Sign Up</a></Link>
        </p>
      </div>
    </div>
  );
};

export default Signin;
