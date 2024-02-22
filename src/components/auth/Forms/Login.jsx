import React from 'react'
import { useState } from 'react'
import { useBackend } from '../../../context/BackendProvider'

export const Login = (props) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const { postData } = useBackend();

    // prevent reload
    const loginUser = async (e) => {
        e.preventDefault();
        console.log(username, password)

        try {
            const userData = {
                username,
                password
            }

            await postData(userData);

        } catch (error) {
            console.error('Faied to register user:', error)
        };
    }

    return (
        <div>
            <form className="login-form" onSubmit={loginUser}>
                <label for="username">Username</label>
                <input type="username" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <label for="password">Password</label>
                <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Log In</button>
            </form>
        </div>
    )
}

export default Login