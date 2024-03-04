import { useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import api from '../../lib/api/api'


export const useRegister = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)

    const { dispatch } = useAuth()

    const register = async (username, password) => {
        setIsLoading(true)
        setError(null)

        const response = await api.post('/users/login', { username, password })
        const json = await response.json()

        if (!response.ok) {
            setIsLoading(false)
            setError(json.error)
        }
        if (response.ok) {
            // save
            localStorage.setItem('user', JSON.stringify(json))

            // update auth
            dispatch({type: 'LOGIN', payload: json})
        }
    }
    return { register, isLoading, }
}


// try {
//     const response = await api.post('/users/login', { username, password })
//     const token = response.data
//     localStorage.setItem('token', token);
//     setUser(response.data.user);
//     setIsAuthenticated(true)
//     return response;
//   } catch (error) {
//     throw new Error('Login failed');
//   }
// };