import React from 'react'
import { useState } from 'react'

export const Register = (props) => {
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')



    const registerUser = (e) => {
        e.preventDefault();
        console.log(username)
    }

    return (
        <div>
            <form className="login-form" onSubmit={registerUser}>
                <label for="name">Name</label>
                <input type="name" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                <label for="username">Username</label>
                <input type="username" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <label for="email">Email</label>
                <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <label for="password">Password</label>
                <input type="password" id="username" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Log In</button>
            </form>
        </div>
    )
}

export default Register