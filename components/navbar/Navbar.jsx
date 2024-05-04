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
    if (isUserDropdownOpen) setIsUserDropdownOpen(false);
  };

  const toggleUserDropdown = () => {
    setIsUserDropdownOpen(!isUserDropdownOpen);
  };

  const handleLogout = () => {
    logout();
    setIsMenuOpen(false);  // Close the menu on logout
    setIsUserDropdownOpen(false);  // Close the user dropdown
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow fixed w-full z-10 top-0 left-0">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <a href="/">
              <img className="h-8 w-8" src="/assets/logo.jpg" alt="Logo" />
            </a>
            <a href='/' className="font-bold text-xl ml-2 hidden md:block">Glorious Vision University</a>
          </div>
          <div className="flex items-center">
            {user ? (
              <>
                <button onClick={toggleUserDropdown} className="p-2">
                  <FaUserCircle size={24} className="text-gray-800" />
                </button>
              </>
            ) : null}
            <button onClick={toggleMenu} className="p-2">
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>
      <div className={`animated-menu-left ${isMenuOpen ? 'nav-active' : ''}`}>
        <Link legacyBehavior href="/" onClick={closeMenu}><a className="menu-link">Home</a></Link>
        <Link legacyBehavior href="/about" onClick={closeMenu}><a className="menu-link">About</a></Link>
        <Link legacyBehavior href="/faculties" onClick={closeMenu}><a className="menu-link">Past Questions</a></Link>
        <Link legacyBehavior href="/cgpa-calculator" onClick={closeMenu}><a className="menu-link">CGPA Calculator</a></Link>
        <Link legacyBehavior href="/#faqs" onClick={closeMenu}><a className="menu-link">FAQs</a></Link>
        <Link legacyBehavior href="/contact" onClick={closeMenu}><a className="menu-link">Contact Us</a></Link>
        {!user && (
          <>
            <Link legacyBehavior href="/login" onClick={closeMenu}><a className="menu-link">Login</a></Link>
            <Link legacyBehavior href="/signup" onClick={closeMenu}><a className="menu-link cta">Sign Up</a></Link>
          </>
        )}
      </div>
      {isUserDropdownOpen && (
        <div className="absolute right-0 mt-16 py-2 w-48 bg-white rounded-md shadow-xl z-20">
          <div className="flex items-center px-4 py-3 border-b border-gray-200">
            <FaUserCircle size={24} className="text-gray-800 mr-3" />
            <div>
              <p className="text-sm font-medium text-gray-900">{user?.name}</p>
              <p className="text-xs text-gray-600">{user?.matricNumber}</p>
            </div>
          </div>
          <Link legacyBehavior href="/dashboard"><a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={closeMenu}>Dashboard</a></Link>
          <Link legacyBehavior href="/settings"><a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={closeMenu}>Settings</a></Link>
          <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Logout</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
