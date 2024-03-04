import { createContext, useContext } from 'react'
import apiRequest from '../lib/api/api'
// import { Loader } from '../../components/shared';

import { useAuth } from '../context/AuthContext';
import { useEffect, useState } from 'react';

const QueryContext = createContext();

export const useQuery = () => useContext(QueryContext);

export const QueryProvider = ({ children }) => {
    const [ userData, setUserData ] = useState(null); 
    const [ isLoading, setIsLoading ] = useState(false)
    const [ error, setError ] = useState(null)
    const { isAuthenticated } = useAuth();

    const fetchUserData = async () => {
        try {
            if (!isAuthenticated) {
                return;
            }
            setIsLoading(true);
            const response = await apiRequest.get('/users');

            // Set User Data to current user
            setUserData(response.data)
            setIsLoading(false)
            console.log(response)
            
        } catch(error) {
            console.error("Error", error)
            setError(error)
            setIsLoading(false)
        }
    }

    const updateUserData = async () => {
        try {
            if(!!isAuthenticated) {
                return
            }
            setIsLoading(true);
            const response = await apiRequest.put('/users');
            console.log(response)

            setUserData(response.data)
            setIsLoading(false)
            console.log(response)

        } catch(error) {
            console.error("Error", error)
            setError(error)
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchUserData(); // Fetch user data when component mounts

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isAuthenticated]);

    const value = {
        userData,
        isLoading,
        error,
        fetchUserData,
        updateUserData

    }


    return (
        <QueryContext.Provider value = {value}>
            {children}
        </QueryContext.Provider>
    )
}
