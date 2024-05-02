// context/AuthContext.js
"use client"
import { createContext, useContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    Cookies.set('token', userData.token, { expires: 1 }); // Set token in cookie, expires in 1 day
    Cookies.set('user', JSON.stringify(userData), { expires: 1 }); // Optionally save user details in cookies for quick access
    setUser(userData);
  };

  const logout = () => {
    Cookies.remove('token');
    Cookies.remove('user');
    setUser(null);
  };

  // Check for authentication token on initial load
  useEffect(() => {
    const token = Cookies.get('token');
    const userDetails = Cookies.get('user');
    if (token && userDetails) {
      setUser(JSON.parse(userDetails)); // Restore user details from cookie
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
