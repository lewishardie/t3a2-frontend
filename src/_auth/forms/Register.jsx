
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from '../../shared/Loader';
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
    const [errors, SetErrors] = useState({})

    const isLoading = false;

    // Access backend-related functions
    const { postData } = useBackend();

    // handle submit of the form
    const registerUser = async (e) => {
        // prevent reload of the app
        e.preventDefault();
        console.log(name, username, email, password)

        // try to send the data

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
        <div class="d-flex justify-content-center align-items-center 100-w vh-100">
            
            <div className="50-w p-5 rounded bg-light">
                <div>
                    <h2 className="font-weight-bold pt-5 pt-sm-12">Create a New Account</h2>
                    <p>To create a new account, please enter your details</p>
                </div>
                {/* <div className="d-flex justify-content-center align-items-center row">
                    <img 
                    src="/assets/icons/gamestart-logo.svg"
                    alt=""
                    className="img-fluid h-25 w-25"
                    />
                    <div>
                        <p>Create a new account</p>
                    </div>
                </div> */}
                

                <Form onSubmit={registerUser}>
                    <Form.Group className="mb-2" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Enter your name" 
                            value={name} 
                            onChange={(e) => setName(e.target.value)}
                            required
                            />
                        <Form.Text id="nameHelpBlock" muted>
                            Enter your first and/or last name
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-2" controlId="formBasicUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Enter username" 
                            value={username} 
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            />
                        <Form.Text id="usernameHelpBlock" muted>
                            Your username mustn't contain profanity blah blah
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-2" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control 
                            type="email" 
                            placeholder="Enter email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            />
                        <Form.Text id="emailHelpBlock" muted>
                            Your email must be valid
                        </Form.Text>
                    </Form.Group>
        
                    <Form.Group className="mb-2" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                            type="password" 
                            placeholder="Password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            required
                        />
                        <Form.Text id="passwordHelpBlock" muted>
                            Your password must be atleast 8 characters long
                        </Form.Text>
                    </Form.Group>

                    <Button variant="primary" type="submit" className="container-fluid mb-2">
                        {isLoading ? (
                            <div className="d-flex justify-content-center align-items-center gap-3">
                                <Loader />Loading...
                            </div>
                        ): "Submit"}
                    </Button>

                    <p className="text-muted text-center mt-2">
                        Already have an account?
                    <Link to="/login" className="fw-semibold ms-1">Log in</Link>
                    </p>
         
                </Form>
            </div>
        </div>

    )
}

export default Register