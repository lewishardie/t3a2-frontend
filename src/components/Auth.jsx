import React from 'react'
import { useState } from 'react'

import axios from 'axios';

const initialState = {
    fullname:'',
    email: '',
    username:'',
    password: '',
    confirmPassword: '',

}

const Auth = () => {
    const [form, setForm] = useState(initialState);
    const [isLogin, setIsLogin] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });

        console.log(form)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(form)
    }

    const switchMode = () => {
        setIsLogin((prevIsLogin) => !prevIsLogin);
    }

    return (
        <div className="container">
            <div className="container_fields">
                <div className="container_fields-content">
                    <p>{isLogin ? 'Login' : 'Create Account'}</p>
                    <form onSubmit={handleSubmit}>
                        {isLogin && (
                            <div className="form-container_fields-content_input">
                                <label htmlFor="fullName">Full Name</label>
                                <input
                                    name="fullname"
                                    type="text"
                                    placeholder="Full Name"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        )}
                        {isLogin && (
                            <div className="form-container_fields-content_input">
                                <label htmlFor="email">Email</label>
                                <input
                                    name="email"
                                    type="email"
                                    placeholder="email@email.com"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        )}
                        <div className="form-container_fields-content_input">
                                <label htmlFor="username">Username</label>
                                <input
                                    name="username"
                                    type="text"
                                    placeholder="Username"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        <div className="form-container_fields-content_input">
                                <label htmlFor="password">Password</label>
                                <input
                                    name="password"
                                    type="password"
                                    placeholder="Password"
                                    onChange={handleChange}
                                    required
                                    />
                            </div>
                        {isLogin && (
                            <div className="form-container_fields-content_input">
                                <label htmlFor="confirmPassword">Confirm Password</label>
                                <input
                                    name="confirmPassword"
                                    type="password"
                                    placeholder="Confirm Password"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        )}
                        <div className="auth__form-container_fields-content_button">
                            <button>{isLogin ? "Create Account" : "Login"}</button>
                        </div>
                    </form>
                    <div className="auth__form-container_fields-account-">
                        <p>
                            {isLogin
                            ? "Already have an account? "
                            : "Don't have an account? "
                            }
                            <span onClick={switchMode}>
                                {isLogin ? 'Login' : 'Create Account'}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth