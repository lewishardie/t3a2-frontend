import { createContext, useContext } from 'react'
import apiRequest from '../lib/api/api'
// import { Loader } from '../../components/shared';

import { useAuth } from '../context/AuthContext';
import { useEffect, useState } from 'react';

const QueryContext = createContext();

export const useQuery = () => useContext(QueryContext);

export const QueryProvider = ({ children }) => {
    const [ userData, setUserData ] = useState(null); 
    const [ userListData, setUserListData ] = useState(null);
    const [ friendListData, setFriendListData ] = useState(null);
    
    
    const [ isLoading, setIsLoading ] = useState(false)
    const [ error, setError ] = useState(null)
    const { isAuthenticated } = useAuth();

// =================================================
// ============ USER QUERIES =====================

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

    
    const getAllUsers = async () => {
        try {
            if(!!isAuthenticated) {
                return
            }
            setIsLoading(true);
            const response = await apiRequest.get('/users/list/all');
            console.log(response)
            console.log(response.data)
            
            setUserListData(response.data)
            setIsLoading(false)
            
        } catch(error) {
            console.error("Error", error)
            setError(error)
            setIsLoading(false)
        }
    }
    
    const getUserByUsername = async (username) => {
        try {
            if(!!isAuthenticated) {
                return
            }
            setIsLoading(true);
            const response = await apiRequest.get(`/users/username/${username}`);
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

// =================================================
// ============ FRIEND QUERIES =====================
    
    const createFriendRequest = async (username) => {
        try {
            if(!!isAuthenticated) {
                return
            }
            setIsLoading(true);
            const response = await apiRequest.post(`/add/${username}`);
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
    
    const getFriendsList = async () => {
        try {
            if(!!isAuthenticated) {
                return
            }

            setIsLoading(true);
            const response = await apiRequest.get('/friends');
            console.log(response)
            console.log(response.data)

            setFriendListData(response.data)
            setIsLoading(false)

        } catch(error) {
            console.error("Error", error)
            setError(error)
            setIsLoading(false)
        }
    }
    
    
    useEffect(() => {
        fetchUserData(); // Fetch user data when component mounts
        getAllUsers();
        getFriendsList()

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isAuthenticated]);

    const value = {
        userData,
        friendListData,
        userListData,
        isLoading,
        error,
        fetchUserData,
        updateUserData,
        getFriendsList,
        getAllUsers,
        getUserByUsername,
        createFriendRequest,

    }


    return (
        <QueryContext.Provider value = {value}>
            {children}
        </QueryContext.Provider>
    )
}
