import { createContext, useState, useContext, useEffect } from "react";
// import axios from 'axios'
import api from '../lib/api/api'

const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
  const [ user, setUser ] = useState(null);
  const [ isAuthenticated, setIsAuthenticated ] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);
  
  const logInUser = async (username, password) => {
    try {
      const response = await api.post('/users/login', { username, password })
      const token = response.data
 
      localStorage.setItem('token', token);
      setIsAuthenticated(true)
      return response;
    } catch (error) {
      throw new Error('Login failed');
    }
  };

  const register = async (name, username, email, password) => {
    try {
      const response = await api.post('/users/register', { name, username, email, password});
      setUser(response.data.user);

      return response;
    } catch (error) {
      console.log(error)
      throw new Error('axios failed');
    };
  };

    const logOutUser = () => {
      localStorage.removeItem('token');
      setIsAuthenticated(false);
      setUser(null);
    };

    const value = {
      user,
      setUser,
      isAuthenticated,
      setIsAuthenticated,
      logInUser,
      logOutUser,
      register

    }
 

  return (
    <AuthContext.Provider value={ value }>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext);
