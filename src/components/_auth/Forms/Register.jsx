import React from 'react'
import { useState } from 'react'
import { useBackend } from '../../../context/BackendProvider'

export const Register = (props) => {
    // variables for user registration form
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // Access backend-related functions
    const { postData } = useBackend();

    // prevent reload
    const registerUser = async (e) => {
        e.preventDefault();
        console.log(name, username, email, password)

        try {
            const userData = {
                name,
                username,
                email,
                password
            }

            await postData(userData);

        } catch (error) {
            console.error('Faied to register user:', error)
        };
    };

    return (
        <div>
            <form className="register-form" onSubmit={registerUser}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                <label htmlFor="username">Username</label>
                <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <label htmlFor="email">Email</label>
                <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Log In</button>
            </form>
        </div>
    )
}

export default Register