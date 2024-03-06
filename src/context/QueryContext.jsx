import { createContext, useContext } from 'react'
import apiRequest from '../lib/api/api'
// import { Loader } from '../../components/shared';

import { useAuth } from '../context/AuthContext';
import { useEffect, useState } from 'react';

const QueryContext = createContext();

export const useQuery = () => useContext(QueryContext);

export const QueryProvider = ({ children }) => {
    const { isAuthenticated } = useAuth();
    
    const [ userData, setUserData ] = useState(null); 
    const [ userListData, setUserListData ] = useState(null);
    const [ friendListData, setFriendListData ] = useState(null);
    const [ getUserId, setGetUserId ] = useState(null);

    const [ selectedUser , setSelectedUser ] = useState(null)
    
    const [ makeFriendRequest, setMakeFriendRequest ] = useState(null);
    const [ acceptFriendRequest, setAcceptFriendRequest ] = useState([]);

    const [ isLoading, setIsLoading ] = useState(false)
    const [ error, setError ] = useState(null)

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
            
        } catch(error) {
            console.error("Error", error)
            setError(error)
            setIsLoading(false)
        }
    }

// ====== UPDATE

    const updateUserData = async () => {
        try {
            if(!!isAuthenticated) {
                return
            }
            setIsLoading(true);
            const response = await apiRequest.put('/users');

            setUserData(response.data)
            setIsLoading(false)

        } catch(error) {
            console.error("Error", error)
            setError(error)
            setIsLoading(false)
        }
    }

// ====== GET ALL
    
    const getAllUsers = async () => {
        try {
            if(!!isAuthenticated) {
                return
            }
            setIsLoading(true);
            const response = await apiRequest.get('/users/list/all');
            
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
            console.log(username)
            
            setSelectedUser(response.data)
            setIsLoading(false)
            
        } catch(error) {
            console.error("Error", error)
            setError(error)
            setIsLoading(false)
        }
    }

    const getUserById = async (_id) => {
        try {
            if(!!isAuthenticated) {
                return
            }
            setIsLoading(true);
            const response = await apiRequest.get(`/users/${_id}`);
            console.log(_id)
            console.log(response)
            
            setGetUserId(response.data)
            setIsLoading(false)
            
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
            console.log("Making friend request for username:", username);
            setIsLoading(true);
            const response = await apiRequest.post(`/friends/add/${username}`);
            
            setMakeFriendRequest(response.data)
            setIsLoading(false)
            console.log("Friend request made successfully:", response.data);
            
        } catch(error) {
            console.error("Error making friend request:", error);
            setError(error)
            setIsLoading(false)
        }
    }

    const confirmFriendRequest = async (username) => {
        try {
            if(!!isAuthenticated) {
                return
            }
            setIsLoading(true);
            const response = await apiRequest.put(`/friends/accept/${username}`);
            console.log(username)
            
            setAcceptFriendRequest(response.data)
            setIsLoading(false)
            
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


    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isAuthenticated]);

    const value = {
        userData,
        isLoading,
        error,
        fetchUserData,
        updateUserData,
        getFriendsList,
        friendListData,
        getAllUsers,
        userListData,
        getUserByUsername,
        acceptFriendRequest,
        confirmFriendRequest,
        selectedUser,
        setSelectedUser,
        createFriendRequest,
        setMakeFriendRequest,
        makeFriendRequest,
        getUserId,
        setGetUserId,
        getUserById,


    }


    return (
        <QueryContext.Provider value = {value}>
            {children}
        </QueryContext.Provider>
    )
}
