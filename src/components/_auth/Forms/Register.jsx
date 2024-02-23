
import { useState } from 'react'
import { Link } from 'react-router-dom'
// Style
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// Backend
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

        <div className="d-flex justify-content-center align-items-center 100-w vh-100">
            <div className="50-w p-5 rounded bg-secondary">

                <Form onSubmit={registerUser}>
                    <Form.Group className="mb-2" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)}/>
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-2" controlId="formBasicUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-2" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>
        
                    <Form.Group className="mb-2" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                    Submit
                    </Button>

                    <div>
                    <p>Already have an account?</p>
                    <Link to="/login">Login</Link>
                    </div>
                </Form>
            </div>
        </div>

    )
}

export default Register