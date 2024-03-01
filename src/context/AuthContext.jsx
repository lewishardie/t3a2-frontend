import { createContext, useState, useContext } from "react";
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
// const BACKEND_LOCAL = process.env.REACT_APP_LOCAL

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [ user, setUser ] = useState(null);
  // const [ isAuthenticated, setIsAuthenticated ] = useState(false)

  const login = async (username, password) => {
    try {
      const response = await axios.post(BACKEND_URL + '/users/login', { username, password })
      setUser(response.data.user);
      return response.data;
    } catch (error) {
      throw new Error('Login failed');
    }
  };

  const register = async (name, username, email, password) => {
    try {
      console.log(name)
      const response = await axios.post(BACKEND_URL + 'users/register', { name, username, email, password});
      setUser(response.data.user);
      console.log(response.data.user)
      return response.data;
    } catch (error) {
      throw new Error('Registration failed');
    }
  }

  const logout = async () => {
    setUser(null);
  }

  // const isAuthenticated = !!user;

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  )
}


  // const navigate = useNavigate();
  // const queryClient = useQueryClient();
  // const [user, setUser] = useState(null);
  // const [isLoading, setIsLoading] = useState(true); // Added loading state
  // const isAuthenticated = !!user;

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