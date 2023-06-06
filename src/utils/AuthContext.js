import React, { createContext, useState } from 'react';
import axios from 'axios';
import { url } from "../utils/request";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState({
    id: 0
  });
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const authlogin = async ({ email, password }) => {
    try {
      const response = await axios.post(`${url}/auth`, {
        email: email,
        password: password
      });

      if (response.status !== 200) {
        return Promise.resolve(401);
      }

      const data = response.data
      setToken(data.token)
      setUser(data.user)
      setIsAuthenticated(true)

      return Promise.resolve(200);
    } catch (error) {
      console.log(error);
      return Promise.reject(error);
    }
  };

  const authlogout = () => {
    setUser(null);
    setToken(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ user, token, isAuthenticated, authlogin, authlogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };