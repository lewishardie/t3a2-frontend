import axios from 'axios'

// Function to call the API
const apiRequest = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL,

});

// Interceptors to include token with the request
apiRequest.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers['jwt'] = token;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

export default apiRequest