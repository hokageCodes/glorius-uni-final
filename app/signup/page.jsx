// pages/signup.js
"use client"
import { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import Link from 'next/link';
import Router from 'next/router';

const Signup = () => {
  const { user, login } = useAuth();
  const [error, setError] = useState('');

  useEffect(() => {
    // Redirect if already logged in
    if (user) {
      Router.push('/login'); // Redirect to dashboard or another target page
    }
  }, [user]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const matricNumber = event.target.matricNumber.value;

    const response = await fetch('http://localhost:8000/api/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include', // Ensure cookies are included with the request
      body: JSON.stringify({ name, email, password, matricNumber }),
    });

    if (response.ok) {
      const data = await response.json();
      login(data);
    } else {
      const errData = await response.json();
      setError(errData.error || 'Failed to signup');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <div className="max-w-md w-full bg-white rounded p-8 shadow">
        <div className="flex justify-center mb-6">
          <img src="/assets/logo.jpg" alt="Logo" className="h-28" />
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name</label>
            <input type="text" name="name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" required />
          </div>
          <div>
            <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
            <input type="email" name="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" required />
          </div>
          <div>
            <label htmlFor="password" className="text-sm font-medium text-gray-700">Password</label>
            <input type="password" name="password" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" required />
          </div>
          <div>
            <label htmlFor="matricNumber" className="text-sm font-medium text-gray-700">Matric Number</label>
            <input type="text" name="matricNumber" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" required />
          </div>
          <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700">
            Sign Up
          </button>
          {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account? <Link legacyBehavior href="/login"><a className="font-medium text-indigo-600 hover:text-indigo-500">Login</a></Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
