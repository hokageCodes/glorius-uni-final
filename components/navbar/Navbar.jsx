"use client"
import Link from 'next/link';
import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { FaBars, FaTimes, FaUserCircle } from 'react-icons/fa';  // Include user icon

const Navbar = () => {
  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

  return (
    <nav className="bg-white shadow fixed w-full z-10 top-0 left-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Hide logo text on mobile and show only the logo icon */}
          <div className="flex-shrink-0 flex items-center">
            <img className="h-8 w-8 mr-2" src="/assets/logo.jpg" alt="Logo" />
            <span className="font-bold text-xl hidden md:block">Glorious Vision University</span>
          </div>
          <div className="md:hidden">
            {/* User Icon and Hamburger Menu */}
            {user ? (
              <div className="flex items-center">
                <button onClick={toggleDropdown} className="p-2">
                  <FaUserCircle size={24} className="text-gray-800" />
                </button>
                <button onClick={toggleMenu} className="p-2">
                  {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
              </div>
            ) : (
              <button onClick={toggleMenu}>
                {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            )}
          </div>
          <div className="hidden md:flex items-center">
            {/* Desktop View */}
            {user ? (
              <div className="relative">
                <button onClick={toggleDropdown}>
                  <FaUserCircle size={24} className="text-gray-800" />
                </button>
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20">
                    <div className="flex items-center px-4 py-3 border-b border-gray-200">
                      <FaUserCircle size={24} className="text-gray-800 mr-3" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">{user.name}</p>
                        <p className="text-xs text-gray-600">{user.matricNumber}</p>
                      </div>
                    </div>
                    <Link legacyBehavior href="/dashboard"><a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Dashboard</a></Link>
                    <Link legacyBehavior href="/settings"><a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</a></Link>
                    <button onClick={logout} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Logout</button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex space-x-4">
                <Link legacyBehavior href="/login"><a className="text-gray-800 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium">Login</a></Link>
                <Link legacyBehavior href="/signup"><a className="bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-2 rounded-md text-sm font-medium">Sign Up</a></Link>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow">
          <Link legacyBehavior href="/about"><a className="text-gray-800 hover:text-indigo-600 block px-3 py-2 text-base font-medium">About</a></Link>
          <Link legacyBehavior href="/services"><a className="text-gray-800 hover:text-indigo-600 block px-3 py-2 text-base font-medium">Services</a></Link>
          {user ? (
            <>
              <a onClick={logout} className="text-gray-800 hover:text-indigo-600 block px-3 py-2 text-base font-medium cursor-pointer">Logout</a>
            </>
          ) : (
            <>
              <Link legacyBehavior href="/login"><a className="text-gray-800 hover:bg-gray-100 block px-3 py-2 text-base font-medium">Login</a></Link>
              <Link legacyBehavior href="/signup"><a className="bg-indigo-600 hover:bg-indigo-700 text-white block px-3 py-2 text-base font-medium">Sign Up</a></Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
