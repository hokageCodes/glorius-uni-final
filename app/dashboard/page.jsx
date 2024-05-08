"use client"
import React from 'react';
import { useRouter } from 'next/navigation';
// import { useAuth } from '../../context/AuthContext';
import Header from '../../components/dashboard/Header';
import Sidebar from '../../components/dashboard/Sidebar';
import Overview from '@/components/dashboard/Overview';

const DashboardPage = () => {
  const router = useRouter();
  // const { user, logout } = useAuth();

  // // Redirect if not logged in
  // if (!user) {
  //   router.push('/login');
  //   return null;
  // }

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1">
        <Header />
        <div className="p-6">
          {/* <p className="text-lg font-semibold">Welcome back, {user.name}!</p> */}
          {/* Additional dashboard content here */}
          <Overview />
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;
