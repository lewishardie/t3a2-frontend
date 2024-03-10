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

        fetchUserData();

        getAllUsers();

        return () => {
            setError(null);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
            console.log("user Id:", username)
            const response = await apiRequest.get(`/users/username/${username}`);
            setIsLoading(false);
            console.log("get user response:", response.data)
            return response.data;
        } catch(error) {
            console.error("Error getting user by username:", error);
            setError("Failed to get user by username");
            setIsLoading(false);
            return null;
        }
    };

    const updateUserData = async (userUpdate) => {
        try {
            if (!isAuthenticated) {
                return;
            }
            setIsLoading(true);
            const response = await apiRequest.patch('/users', userUpdate);            
            setIsLoading(false);
            console.log("updated user: ", userUpdate)

            setUserData()
            
            return response.data


        } catch(error) {
            console.error("Error updating user data:", error);
            setError("Failed to update user data");
            setIsLoading(false);
            return null;
        }
    };

    //===== Friend Routes ========//

    const getFriendsList = async () => {
        try {
            if (!isAuthenticated) {
                return;
            }
            setIsLoading(true);
            const response = await apiRequest.get('/friends');
            setIsLoading(false);
            
            console.log("friend list", response)

            return response.data;
        } catch(error) {
            console.error("Error getting user by username:", error);
            setError("Failed to get user by username");
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

            console.log("update friend list data", response)

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
            const response = await apiRequest.delete(`/friends/${username}`);
            setIsLoading(false);
            return response.data;

        } catch(error) {
            console.error("Error rejecting friend request:", error);
            setError("Failed to reject friend request");
            setIsLoading(false);
            return null;
        }
    };

    const getFriendsUsernames = async () => {
        try {
            if (!isAuthenticated) {
                return [];
            }
            setIsLoading(true);
            const response = await apiRequest.get('/friends/');
            setIsLoading(false);
            return response.data.friends.map(friend => friend.username);
        } catch(error) {
            console.error("Error getting friends usernames:", error);
            setError("Failed to get usernames from the friends list");
            setIsLoading(false);
            return [];
        }
    };

    //===== Post Routes ====//



    const makePost = async (postData) => {
        try {
            if (!isAuthenticated) {
                return;
            }
            setIsLoading(true);
            console.log("starting make post")
            const response = await apiRequest.post('/posts', postData);
            console.log("make post request", response)
            
            setIsLoading(false);
            return response.data;

        } catch(error) {
            console.error("Error getting post request:", error);
            setError("Failed to get post request");
            setIsLoading(false);
            return null;
        }
    };

    const getPostById = async (postId) => {
        try {
            if (!isAuthenticated) {
                return;
            }
            setIsLoading(true);
            const response = await apiRequest.get(`/posts/${postId}`);
            setIsLoading(false);
            return response.data;

        } catch(error) {
            console.error("Error getting post by Id request:", error);
            setError("Failed to get post by Id request");
            setIsLoading(false);
            return null;
        }
    };

    const updatePost = async (postId, updatePost) => {
        try {
            if (!isAuthenticated) {
                return;
            }
            setIsLoading(true);
            const response = await apiRequest.patch(`/posts/${postId}`, updatePost);
            console.log("editing post:", updatePost)
            setIsLoading(false);
            return response.data;

        } catch(error) {
            console.error("Error updated post request:", error);
            setError("Failed to update post request");
            setIsLoading(false);
            return null;
        }
    };

    const deletePost = async (postId) => {
        try {
            if (!isAuthenticated) {
                return;
            }
            setIsLoading(true);
            const response = await apiRequest.delete(`/posts/${postId}`);
            
            setIsLoading(false);
            return response.data;

        } catch(error) {
            console.error("Error deleteing post request:", error);
            setError("Failed to delete post request");
            setIsLoading(false);
            return null;
        }
    };

    const getPostByAuthor = async (username) => {
        try {
            if (!isAuthenticated) {
                return;
            }
            setIsLoading(true);
            const response = await apiRequest.get(`/posts/author/${username}`);

            setIsLoading(false);
            return response.data;

        } catch(error) {
            console.error("Error getting post by Id request:", error);
            setError("Failed to get post by Id request");
            setIsLoading(false);
            return;
        }
    };

    const getPostByCategory = async (gameCategory) => {
        try {
            if (!isAuthenticated) {
                return;
            }
            setIsLoading(true);
            const response = await apiRequest.get(`/posts/category/${gameCategory}`);

            setIsLoading(false);
            return response.data;

        } catch(error) {
            console.error("Error getting post by Id request:", error);
            setError("Failed to get post by Id request");
            setIsLoading(false);
            return null;
        }
    };

    //======== Follows

    const followCategory = async (game) => {
        try {
            if (!isAuthenticated) {
                return;
            }
            setIsLoading(true);
            const response = await apiRequest.post(`/users/follows/${game}`)
            console.log("follow a game: ", response)

            setIsLoading(false);
            return response.data;

        } catch(error) {
            console.error("Error getting post by Id request:", error);
            setError("Failed to get post by Id request");
            setIsLoading(false);
            return null;
        }
    }

    const unfollowCategory = async (game) => {
        try {
            if (!isAuthenticated) {
                return;
            }
            setIsLoading(true);
            const response = await apiRequest.delete(`/users/follows/${game}`)
            console.log("remove follow: ", response)

            setIsLoading(false);
            return response.data;

        } catch(error) {
            console.error("Error getting post by Id request:", error);
            setError("Failed to get post by Id request");
            setIsLoading(false);
            return null;
        }
    }

    const viewFollows = async () => {
        try {
            if (!isAuthenticated) {
                return;
            }
            setIsLoading(true);
            const response = await apiRequest.get(`/users/follows/list`)

            const follows = response.data.follows.map(username => ({ username }));
            return follows;

        } catch(error) {
            console.error("Error getting post by Id request:", error);
            setError("Failed to get post by Id request");
            setIsLoading(false);
            return null;
        }
    }


    const value = {
        userData,
        isLoading,
        error,
        userListData,
        friendListData,
        setFriendListData,
        updateUserData,
        getUserByUsername,
        getUserById,
        createFriendRequest,
        confirmFriendRequest,
        rejectFriendRequest,
        viewReceivedRequests,
        viewPendingRequests,
        getFriendsList,
        deleteFriend,
        makePost,
        getPostById,
        updatePost,
        deletePost,
        getPostByAuthor,
        getPostByCategory,
        getFriendsUsernames,
        followCategory,
        unfollowCategory,
        viewFollows,
        

    };

    return (
        <QueryContext.Provider value={value}>
            {children}
        </QueryContext.Provider>
    );
};