
import { useState } from 'react'
import { Link } from 'react-router-dom'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { useBackend } from '../../context/BackendProvider'


export const Login = () => {
    const [loginData, setLoginData ] = useState({
        username: '',
        password: ''
    })

    const { postData } = useBackend();

    // handle change for inputs
    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginData({ ...loginData, [name]: value });
    };

    // handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(loginData)

        try {
            const response = await postData(loginData);
            console.log('Server response:', response)
            console.log(loginData)
            // Handle success
        } catch (error) {
            console.error('Failed to register user:', error)
            // Handle error
        }
    };

        // try {
        //     const userData = {
        //         username,
        //         password
        //     };

        //     const response = await postData(loginData);

        //     if (response.success) {
        //         //redirect
        //         console.log('login successful')
        //     } else {
        //         console.log('error')
        //     }

        // } catch (error) {
        //     console.error('Faied to Login:', error)
        // };
    // }

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