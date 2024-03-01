
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { useAuth } from '../../context/AuthContext';

export const Login = () => {
    const [loginData, setLoginData ] = useState({
                username: '',
                password: ''
            })
            const navigate = useNavigate()

    const { login } = useAuth();

    // handle change for inputs
    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginData({ ...loginData, [name]: value });
        
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        await login(loginData.username, loginData.password);
        console.log(loginData)
        // Redirect or handle successful login
        navigate('/')
      } catch (error) {
        // Handle login error
      }
    };

    return (

        <div className="d-flex justify-content-center align-items-center 100-w vh-100">
            <div className="50-w p-5 rounded bg-light">
                <div>
                    <h2 className="font-weight-bold pt-5 pt-sm-12">Login</h2>
                    <p>Enter your username and password</p>
                </div>

                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-2" controlId="formBasicUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter username" 
                        value={loginData.username} 
                        onChange={handleChange}
                        name="username"
                        required
                    />
                    <Form.Text className="text-muted">
                    </Form.Text>
                    </Form.Group>
        
                    <Form.Group className="mb-2" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        type="password" 
                        placeholder="Password" 
                        value={loginData.password} 
                        onChange={handleChange}
                        name="password"
                        required
                    />
                    </Form.Group>
                    <Button variant="primary" type="submit" className="container-fluid mb-2">
                    Login
                    </Button>
                    <span>
                    <p className="mb-2">Don't have an account?</p>
                    <Link to="/register">Create an Account</Link>
                    </span>
                </Form>
            </div>
      </div>
    );
};

export default Login