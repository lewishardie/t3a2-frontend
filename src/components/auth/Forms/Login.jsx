import React from 'react'
import { useState } from 'react'

export const Login = (props) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const loginUser = (e) => {
        e.preventDefault();
        console.log(username)
    }


    return (
        <div>
            <form className="login-form" onSubmit={loginUser}>
                <label for="username">Username</label>
                <input type="username" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <label for="password">Password</label>
                <input type="password" id="username" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Log In</button>
            </form>
        </div>
    )
}

export default Login