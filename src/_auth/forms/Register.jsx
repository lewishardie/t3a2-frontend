
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Loader from '../../components/shared/Loader';
// Style
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// Backend
// import { useCreateUserAccount } from '../../lib/react-query/mutations';
import { useAuth } from '../../context/AuthContext';
import { ToastContainer, toast  } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export const Register = () => {
    // const isLoading = useContext(AuthContext);
    const isLoading = false
    
    const [registerData, setRegisterData ] = useState({
        name: '',
        username: '',
        email: '',
        password: ''
    });
    
    const { register } = useAuth()
    const navigate = useNavigate()

    // handle on change for inputs
    const handleChange = (e) => {
        const { name, value } = e.target;
        setRegisterData({ ...registerData, [name]: value });
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
        navigate('/login'); // Navigate after successful registration
    }
        
    // handle submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const newUser = await register(registerData.name, registerData.username, registerData.email, registerData.password);
  

            if (newUser) {
                handleSuccess('success');
            } else {
                handleError('error')
            }
        } catch (error) {

            handleError('Registration failed. Please try again.');

        } finally {
            // reset form inputs
            setRegisterData({
                name: "",
                email: "",
                password: "",
                username: "",
            })
        }
    }
    
    return (

        <div className="d-flex justify-content-center align-items-center 100-w vh-100">
            
            <div className="50-w p-5 rounded bg-light">
                <div>
                    <h2 className="font-weight-bold pt-5 pt-sm-12">Create a New Account</h2>
                    <p>To create a new account, please enter your details</p>
                </div>
                
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-2" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Enter your name" 
                            value={registerData.name} 
                            onChange={handleChange}
                            name="name"
                            required
                            autoComplete="off"
                    
                            />
                            {/* {errors && errors.name && <register.Text className="text-danger">{errors.name}</Form.Text>} */}
                    </Form.Group>

                    <Form.Group className="mb-2" controlId="formBasicUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Enter username" 
                            value={registerData.username} 
                            onChange={handleChange}
                            name="username"
                            required
                            autoComplete="off"
                    
                            />
                            {/* {errors.username && <Form.Text className="text-danger">{errors.username}</Form.Text>} */}
                    </Form.Group>

                    <Form.Group className="mb-2" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control 
                            type="email" 
                            placeholder="Enter email" 
                            value={registerData.email} 
                            onChange={handleChange}
                            name="email"
                            required
                            autoComplete="off"

                        />
                            {/* {errors.email && <Form.Text className="text-danger">{errors.email}</Form.Text>}                         */}
                    </Form.Group>
        
                    <Form.Group className="mb-2" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                            type="password" 
                            placeholder="Password" 
                            value={registerData.password} 
                            onChange={handleChange}
                            name="password"
                            required
                            minLength={8}
                            autoComplete="off"

                        />
                        {/* {errors.password && <Form.Text className="text-danger">{errors.password}</Form.Text>} */}
                        
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
                <ToastContainer/>
            </div>
            
        </div>

    );
};

export default Register