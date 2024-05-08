// components/dashboard/Sidebar.js
"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { FaTachometerAlt, FaBook, FaBox, FaEnvelope, FaCog, FaBars } from 'react-icons/fa';
import Image from 'next/image';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <aside className={`bg-blue-900 text-white h-screen ${isOpen ? 'w-64' : 'w-16'} transition-width duration-300`}>
      <div className="flex flex-col h-full p-5">
        <Link className='pointer' href="/" legacyBehavior>
          <Image width={100} height={100} src='/assets/logo.jpg' alt="logo" className="mb-8"/>
        </Link>
        <button onClick={toggleSidebar} className="mb-5 text-white">
          <FaBars />
        </button>
        <ul className={`flex flex-col space-y-4 ${!isOpen && 'items-center'}`}>
          {[
            { icon: FaTachometerAlt, label: "Overview", link: "/dashboard" },
            { icon: FaBook, label: "Course", link: "/course" },
            { icon: FaBox, label: "Resources", link: "/resources" },
            { icon: FaEnvelope, label: "Message", link: "/message" },
            { icon: FaCog, label: "Setting", link: "/settings" },
            { icon: FaCog, label: "logout", link: "/logout" }
          ].map(({ icon: Icon, label, link }) => (
            <li key={label}>
              <Link legacyBehavior href={link}>
                <a className="flex items-center space-x-2 hover:bg-blue-800 p-2 rounded-lg">
                  <Icon />
                  {isOpen && <span>{label}</span>}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
