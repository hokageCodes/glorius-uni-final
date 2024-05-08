// context/AuthContext.js
"use client"
import { createContext, useContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    Cookies.set('token', userData.token, { expires: 1 });
    Cookies.set('user', JSON.stringify(userData), { expires: 1 });
    setUser(userData);
  };

  const logout = () => {
    Cookies.remove('token');
    Cookies.remove('user');
    setUser(null);
  };

  useEffect(() => {
    const token = Cookies.get('token');
    const userDetails = Cookies.get('user');
    if (token && userDetails) {
      const parsedUser = JSON.parse(userDetails);
      setUser(parsedUser);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export const isAdmin = () => {
  const { user } = useAuth();
  return user && user.role === 'admin';
};
