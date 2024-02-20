import React, { useState } from 'react'
import { FaUser, FaLock } from "react-icons/fa"
import { useNavigate } from "react-router-dom"

export const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

  }



  return (
    <div className="container">
      <div className="form">
        <h1 className="title">Social Media App</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
          <div align="center">
            <button type="submit" className="button">
              <span>Login</span>
            </button>
          </div>
        </form>
      </div>
    </div>

  )
}
    // <form>
    //   <label for="email">Email</label>
    //   <input type={email} placeholder="email@email.com" id="email" name="email" />
    //   <label for="password">Password</label>
    //   <input type={pass} placeholder="password" id="password" name="password" />
    //   <button>Log In</button>
    // </form>

    
    // <div className='container'>
    //   <form actions="">
    //     <h1>Login</h1>
    //     <div className="input-box">
    //       <input type="text" placeholder='Username' required />
    //       <FaUser />
    //     </div>
    //     <div className="input-box">
    //       <input type="password" placeholder='Password' required />
    //       <FaLock />
    //     </div>

    //     <div className="remember-forget">
    //       <label><input type="checkbox" />Remember me</label>
    //       <a href="#">Forgot password?</a>
    //     </div>

    //     <button type="submit">Login</button>

    //     <div className="register-link">
    //       <p>Don't have an account? <a href="#">Register</a></p>
    //     </div>

    //     </form>
    //     </div>

export default LoginForm