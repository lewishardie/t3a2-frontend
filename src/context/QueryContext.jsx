import { createContext, useContext, useEffect, useState, useCallback } from 'react';
import apiRequest from '../lib/api/api';
import { useAuth } from '../context/AuthContext';

const QueryContext = createContext();

export const useQuery = () => useContext(QueryContext);

export const QueryProvider = ({ children }) => {
    const { isAuthenticated } = useAuth();
    const [ userData, setUserData ] = useState(null);
    const [ userListData, setUserListData ] = useState(null);
    const [ friendListData, setFriendListData ] = useState(null);
    const [ isLoading, setIsLoading] = useState(false);
    const [ error, setError ] = useState(null);

    const fetchData = useCallback(async (endpoint, setStateCallback) => {
        try {
            setIsLoading(true);
            const response = await apiRequest.get(endpoint);
            setStateCallback(response.data);
            console.log("hello")

        } catch (error) {
            console.error("Error fetching data:", error);
            setError("Failed to fetch data");
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        const fetchUserData = async () => {
            if (isAuthenticated) {
                await fetchData('/users', setUserData);
            }
        };

        const getAllUsers = async () => {
            if (isAuthenticated) {
                await fetchData('/users/list/all', setUserListData);
            }
        };

        const getFriendsList = async () => {
            if (isAuthenticated) {
                await fetchData('/friends', setFriendListData);
            }
        };

        fetchUserData();
        console.log("cya")
        getAllUsers();
        console.log("cya")
        getFriendsList();
        console.log("cya")

        return () => {
            setError(null); // Reset error on unmount
        };
    }, [isAuthenticated]);

    const getUserById = async (_id) => {
        try {
            if (!isAuthenticated) {
                return;
            }
            setIsLoading(true);
            const response = await apiRequest.get(`/users/${_id}`);
            setIsLoading(false);
            return response.data;
        } catch(error) {
            console.error("Error getting user by ID:", error);
            setError("Failed to get user by ID");
            setIsLoading(false);
            return null;
        }
    };

    const getUserByUsername = async (username) => {
        try {
            if (!isAuthenticated) {
                return;
            }
            setIsLoading(true);
            const response = await apiRequest.get(`/users/username/${username}`);
            setIsLoading(false);
            return response.data;
        } catch(error) {
            console.error("Error getting user by username:", error);
            setError("Failed to get user by username");
            setIsLoading(false);
            return null;
        }
    };

    const updateUserData = async () => {
        try {
            if (!isAuthenticated) {
                return;
            }
            setIsLoading(true);
            const response = await apiRequest.patch('/users');            
            setIsLoading(false);
            setUserData(response.data)
        } catch(error) {
            console.error("Error updating user data:", error);
            setError("Failed to update user data");
            setIsLoading(false);
            return null;
        }
    };

    const createFriendRequest = async (username) => {
        try {
            if (!isAuthenticated) {
                return;
            }
            setIsLoading(true);
            const response = await apiRequest.post(`/friends/add/${username}`);
            setIsLoading(false);
            console.log("Friend Request Sent")

            return response.data
        } catch(error) {
            console.error("Error creating friend request:", error);
            setError("Failed to create friend request");
            setIsLoading(false);
            return null;
        }
    };

    const confirmFriendRequest = async (username) => {
        try {
            if (!isAuthenticated) {
                return;
            }
            setIsLoading(true);
            const response = await apiRequest.put(`/friends/accept/${username}`);
            console.log("Friend Request Accepted")

            setIsLoading(false);
            return response.data;
        } catch(error) {
            console.error("Error confirming friend request:", error);
            setError("Failed to confirm friend request");
            setIsLoading(false);
            return null;
        }
    };

    const viewReceivedRequests = async () => {
        try {
            if (!isAuthenticated) {
                return;
            }
            setIsLoading(true);
            const response = await apiRequest.get(`/friends/received`);
            console.log("Received friend requests:", response.data);

            setIsLoading(false);
            return response.data;
        } catch(error) {
            console.error("Error viewing received friend requests:", error);
            setError("Failed to view received friend requests");
            setIsLoading(false);
            return null;
        }
    };

    const viewPendingRequests = async () => {
        try {
            if (!isAuthenticated) {
                return;
            }
            setIsLoading(true);
            const response = await apiRequest.get(`/friends/requested`);
            console.log(response)
            
            setIsLoading(false);

            return response.data;
        } catch(error) {
            console.error("Error viewing pending friend requests:", error);
            setError("Failed to view pending friend request");
            setIsLoading(false);
            return null;
        }
    };
    

    const rejectFriendRequest = async (username) => {
        try {
            if (!isAuthenticated) {
                return;
            }
            setIsLoading(true);
            const response = await apiRequest.delete(`/friends/reject/${username}`);
            console.log("Friend Request Rejected")

            setIsLoading(false);
            return response.data;
        } catch(error) {
            console.error("Error rejecting friend request:", error);
            setError("Failed to reject friend request");
            setIsLoading(false);
            return null;
        }
    };

    const deleteFriend = async (username) => {
        try {
            if (!isAuthenticated) {
                return;
            }
            setIsLoading(true);
            const response = await apiRequest.delete(`/friends/reject/${username}`);
            setFriendListData(response.data)
            setIsLoading(false);
            return response.data;

        } catch(error) {
            console.error("Error rejecting friend request:", error);
            setError("Failed to reject friend request");
            setIsLoading(false);
            return null;
        }
    };

    const value = {
        userData,
        isLoading,
        error,
        userListData,
        friendListData,
        updateUserData,
        getUserByUsername,
        getUserById,
        createFriendRequest,
        confirmFriendRequest,
        rejectFriendRequest,
        deleteFriend,
        viewReceivedRequests,
        viewPendingRequests,

    };

    return (
        <QueryContext.Provider value={value}>
            {children}
        </QueryContext.Provider>
    );
};