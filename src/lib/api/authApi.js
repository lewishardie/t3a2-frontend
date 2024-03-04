import axios from './api'

export const login = async (username, password) => {
    return axios.post('/users/login', username, password)
};

export const logout = async () => {
    return axios.post('/users/logout')
}