
import { useState } from 'react'
import {  Link, useNavigate } from 'react-router-dom'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useAuth } from '../../context/AuthContext';
import { ToastContainer, toast  } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export const Login = () => {
    const [loginData, setLoginData ] = useState({
        username: '',
        password: ''
    })
    
    const { logInUser } = useAuth();
    const navigate = useNavigate()

    // handle change for inputs
    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginData({ ...loginData, [name]: value });     
    };

    // error
    const handleError = (error) => {
        toast.error(error, {
            position: "bottom-left",
        });
    }
    // success
    const handleSuccess = (message) => {
        toast.success(message, {
            position: "bottom-right",
        });
        navigate('/'); // Navigate after successful registration
    }
        
  
    const handleSubmit = async (e) => { 
      e.preventDefault();
      try {
            const session = await logInUser(loginData.username, loginData.password);

            if (session) {
                handleSuccess('success');
            } else {
                handleError('error')
            }
        } catch (error) {

            handleError('Login failed. Please try again.');

        } finally {

            setLoginData({
                password: "",
                username: "",
            })
        }
    }    

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
            <ToastContainer />
      </div>
    );
};

export default Login