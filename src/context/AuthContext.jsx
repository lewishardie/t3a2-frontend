import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from '@tanstack/react-query';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // Added loading state
  const isAuthenticated = !!user;

  useEffect(() => {
    const cookieFallback = localStorage.getItem("cookieFallback");
    if (cookieFallback === "[]" || cookieFallback === null || cookieFallback === undefined) {
      navigate("/login");
    }

    // Simulate asynchronous authentication
    const checkAuthUser = async () => {
      try {
        // Assume fetching user data asynchronously using react-query
        const userData = await queryClient.fetchQuery("user");
        setUser(userData);
        setIsLoading(false); // Set loading state to false after user data is fetched
      } catch (error) {
        // Handle authentication error, e.g., redirect to error page
        navigate("");
      }
    };

    // ensure effect only runs once
    checkAuthUser();
  }, []);

  const logout = () => {
    // Clear user data from local storage or perform any necessary cleanup
    localStorage.removeItem("cookieFallback");
    setUser(null);
    navigate("/sign-in");
  };

  // Ensure session management (e.g., token expiration handling) is implemented here

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useUserContext = () => useContext(AuthContext);