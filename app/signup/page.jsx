// pages/signup.js
"use client"
import { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import Link from 'next/link';
import axios from 'axios';

const Signup = () => {
  const { user, login } = useAuth();
  const [error, setError] = useState('');

  useEffect(() => {
    // Redirect if already logged in
    if (user) {
      window.location.href = '/'; // Redirect to dashboard or another target page
    }
  }, [user]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const matricNumber = event.target.matricNumber.value;

    try {
      const response = await axios.post('http://localhost:8000/api/auth/signup', {
        name, 
        email, 
        password, 
        matricNumber
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true // Necessary for cookies to be sent with requests
      });

      if (response.status === 201) {
        login(response.data);
      } else {
        throw new Error('Failed to sign up');
      }
    } catch (err) {
      if (err.response) {
        // The server responded with a status other than 200 range
        setError(err.response.data.error || 'Failed to signup');
      } else if (err.request) {
        // The request was made but no response was received
        setError('No response from server');
      } else {
        // Something happened in setting up the request that triggered an Error
        setError('Error: ' + err.message);
      }
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col justify-center items-center">
      <div className="max-w-sm w-full bg-white rounded p-8 shadow">
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
