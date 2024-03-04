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
      // console.log(response.data)
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
      console.log(response.data.user)
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


  // useEffect(() => {
  //   const cookieFallback = localStorage.getItem("cookieFallback");
  //   if (cookieFallback === "[]" || cookieFallback === null || cookieFallback === undefined) {
  //     navigate("/login");
  //   }



//     // Simulate asynchronous authentication
//     const checkAuthUser = async () => {
//       try {
//         // Assume fetching user data asynchronously using react-query
//         const userData = await queryClient.fetchQuery("user");
//         setUser(userData);
//         setIsLoading(false); // Set loading state to false after user data is fetched
//       } catch (error) {
//         // Handle authentication error, e.g., redirect to error page
//         navigate("");
//       }
//     };

//     // ensure effect only runs once
//     checkAuthUser();
//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   const logout = () => {
//     // Clear user data from local storage or perform any necessary cleanup
//     localStorage.removeItem("cookieFallback");
//     setUser(null);
//     navigate("/sign-in");
//   };

//   // Ensure session management (e.g., token expiration handling) is implemented here

//   return (
//     <AuthContext.Provider value={{ user, isAuthenticated, logout, isLoading }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

// export const useUserContext = () => useContext(AuthContext);