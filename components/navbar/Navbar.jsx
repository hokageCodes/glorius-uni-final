"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '../../context/AuthContext';
import { FaBars, FaTimes, FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
  const { user, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isUserDropdownOpen) setIsUserDropdownOpen(false); // Close user dropdown if menu is toggled
  };

  const toggleUserDropdown = () => {
    setIsUserDropdownOpen(!isUserDropdownOpen);
    if (isMenuOpen) setIsMenuOpen(false); // Close the hamburger menu if user dropdown is toggled
  };

  const handleLogout = () => {
    logout();
    setIsMenuOpen(false); // Close the hamburger menu on logout
    setIsUserDropdownOpen(false); // Close the user dropdown on logout
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow fixed w-full z-10 top-0 left-0">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link href="/" legacyBehavior>
              <a>
                <img className="h-8 w-8" src="/assets/logo.jpg" alt="Logo" />
                <span className="font-bold text-xl ml-2 hidden md:block">Glorious Vision University</span>
              </a>
            </Link>
          </div>
          <div className="flex items-center">
            {user && (
              <button onClick={toggleUserDropdown} className="p-2 md:hidden">
                <FaUserCircle size={24} className="text-gray-800" />
              </button>
            )}
            <button onClick={toggleMenu} className="p-2 md:hidden">
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
            <div className="hidden md:flex items-center space-x-4">
              <Link href="/" legacyBehavior><a className="menu-link" onClick={closeMenu}>Home</a></Link>
              <Link href="/about" legacyBehavior><a className="menu-link" onClick={closeMenu}>About</a></Link>
              <Link href="/faculties" legacyBehavior><a className="menu-link" onClick={closeMenu}>Faculties</a></Link>
              <Link href="/cgpa-calculator" legacyBehavior><a className="menu-link" onClick={closeMenu}>CGPA Calculator</a></Link>
              <Link href="/#faqs" legacyBehavior><a className="menu-link" onClick={closeMenu}>FAQs</a></Link>
              <Link href="/contact" legacyBehavior><a className="menu-link" onClick={closeMenu}>Contact Us</a></Link>
              {!user ? (
                <>
                  <Link href="/login" legacyBehavior><a className="menu-link" onClick={closeMenu}>Login</a></Link>
                  <Link href="/signup" legacyBehavior><a className="menu-link" onClick={closeMenu}>Sign Up</a></Link>
                </>
              ) : (
                <button onClick={toggleUserDropdown} className="p-2">
                  <FaUserCircle size={24} className="text-gray-800" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md absolute w-full">
          <Link href="/" legacyBehavior><a className="block p-2" onClick={closeMenu}>Home</a></Link>
          <Link href="/about" legacyBehavior><a className="block p-2" onClick={closeMenu}>About</a></Link>
          <Link href="/faculties" legacyBehavior><a className="block p-2" onClick={closeMenu}>Faculties</a></Link>
          <Link href="/cgpa-calculator" legacyBehavior><a className="block p-2" onClick={closeMenu}>CGPA Calculator</a></Link>
          <Link href="/#faqs" legacyBehavior><a className="block p-2" onClick={closeMenu}>FAQs</a></Link>
          <Link href="/contact" legacyBehavior><a className="block p-2" onClick={closeMenu}>Contact Us</a></Link>
          {!user ? (
            <>
              <Link href="/login" legacyBehavior><a className="block p-2" onClick={closeMenu}>Login</a></Link>
              <Link href="/signup" legacyBehavior><a className="block p-2" onClick={closeMenu}>Sign Up</a></Link>
            </>
          ) : null}
        </div>
      )}
      {isUserDropdownOpen && (
        <div className="absolute right-0 mt-16 py-2 w-48 bg-white rounded-md shadow-xl z-20">
          <div className="flex items-center px-4 py-3 border-b border-gray-200">
            <FaUserCircle size={24} className="text-gray-800 mr-3" />
            <div>
              <p className="text-sm font-medium text-gray-900">{user?.name}</p>
              <p className="text-xs text-gray-600">{user?.matricNumber}</p>
            </div>
          </div>
          <Link href="/dashboard" legacyBehavior><a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={closeMenu}>Dashboard</a></Link>
          <Link href="/settings" legacyBehavior><a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={closeMenu}>Settings</a></Link>
          <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Logout</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
