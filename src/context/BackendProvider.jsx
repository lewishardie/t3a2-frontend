import React, { createContext, useContext, useState } from 'react';

// Create the backend context
const BackendContext = createContext();

// Custom hook to consume the backend context
export const useBackend = () => useContext(BackendContext);

// Backend provider component
export function BackendProvider(props) {
    // Define state or any backend-related data you want to share
    const [data, setData] = useState(null);

    // Define the URL of your backend server
    const backendUrl = process.env.REACT_APP_BACKEND_URL;

    // Define backend-related functions
    const fetchData = async () => {
        try {
            const response = await fetch(`${backendUrl}/users/login`);
            const data = await response.json();
            setData(data);
        } catch (error) {
            console.error('Failed to fetch data:', error);
        }
    };

    const postData = async (postData) => {
        try {
            const response = await fetch(`${backendUrl}/users/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(postData),
            });
            // Handle response if needed
        } catch (error) {
            console.error('Failed to send data:', error);
        }
    };

    // Create the context value with data and functions
    const contextValue = {
        data,
        fetchData,
        postData,
    };

    // Provide the context value to its children
    return (
        <BackendContext.Provider value={contextValue}>
            {props.children}
        </BackendContext.Provider>
    );
};
