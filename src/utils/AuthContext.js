import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { url } from "../utils/request";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token') || null);
  const [user, setUser] = useState({
    id: 0
  });
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const storedUserId = localStorage.getItem('userId');

    if (token && storedUserId) {
      fetchUser(storedUserId);
    }
  }, []);

  async function fetchUser(userId) {
    try {
      const response = await axios.get(`${url}/users?sellerId=${userId}`);
      const data = response.data;
      setUser(prevUser => ({ ...prevUser, ...data }));
      setIsAuthenticated(true);
    } catch (error) {
      console.log(error);
    }
  }

  const authlogin = async ({ email, password }) => {
    try {
      const response = await axios.post(`${url}/auth`, {
        email: email,
        password: password
      });

      if (response.status !== 200) {
        return Promise.resolve(401);
      }

      const data = response.data;
      const { token, user: userData } = data;
      setToken(token);
      localStorage.setItem('accessLevel', userData.accessLevel);
      localStorage.setItem('token', token);
      localStorage.setItem('userId', userData.id);
      localStorage.setItem('profileImage', userData.profileImage);
      localStorage.setItem('name', userData.name);

      setUser(prevUser => ({ ...prevUser, ...userData }));
      setIsAuthenticated(true);

      return Promise.resolve(200);
    } catch (error) {
      console.log(error);
      return Promise.reject(error);
    }
  };

  const authlogout = () => {
    setUser({
      id: 0
    });
    setToken(null);
    setIsAuthenticated(false);
    localStorage.removeItem('userId');
    localStorage.removeItem('token');
    localStorage.removeItem('profileImage');
    localStorage.removeItem('name');

    window.location.reload();
  };

  return (
    <AuthContext.Provider
      value={{ user, token, isAuthenticated, authlogin, authlogout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };