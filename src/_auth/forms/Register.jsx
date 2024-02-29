
import { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Loader from '../../components/shared/Loader';
// Style
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// Backend
import { useCreateUserAccount } from '../../lib/react-query/mutations';
import { AuthContext } from '../../context/AuthContext';


// form object
export const Register = () => {
    const navigate = useNavigate()
    const isLoading = useContext(AuthContext);
    // Queries
    const { mutateAsync: createUserAccount } = useCreateUserAccount()

    const [formData, setFormData ] = useState({
        name: '',
        username: '',
        email: '',
        password: ''
    });

    // handle on change for inputs
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // handle submit
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const newUser = await createUserAccount(formData);
            if (!newUser) {
                console.error('sign up fail')
                return null
            }

            // const session = await signInAccount({
            //     email: formData.email,
            //     password: formData.password,
            // });

            // if (!session) {
            //     navigate("/register");
            //     return;
            // }

            // // Check if user is logged in
            // const isLoggedIn = await checkAuthUser();

            // if (isLoggedIn) {
            //     setFormData({
            //         name: '',
            //         username: '',
            //         email: '',
            //         password: ''
            //     });
            //     navigate('/')
            // } else {
            //     console.error('error')
            // }
            // navigate('/')
            
        } catch (error) {
            console.error('Failed to create user account:', error);
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
                            value={formData.name} 
                            onChange={handleChange}
                            name="name"
                            required
                    
                            />
                            {/* {errors && errors.name && <Form.Text className="text-danger">{errors.name}</Form.Text>} */}
                    </Form.Group>

                    <Form.Group className="mb-2" controlId="formBasicUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Enter username" 
                            value={formData.username} 
                            onChange={handleChange}
                            name="username"
                            required
                    
                            />
                            {/* {errors.username && <Form.Text className="text-danger">{errors.username}</Form.Text>} */}
                    </Form.Group>

                    <Form.Group className="mb-2" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control 
                            type="email" 
                            placeholder="Enter email" 
                            value={formData.email} 
                            onChange={handleChange}
                            name="email"
                            required

                        />
                            {/* {errors.email && <Form.Text className="text-danger">{errors.email}</Form.Text>}                         */}
                    </Form.Group>
        
                    <Form.Group className="mb-2" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                            type="password" 
                            placeholder="Password" 
                            value={formData.password} 
                            onChange={handleChange}
                            name="password"
                            required
                            minLength={10}

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
            </div>
        </div>

    );
};

export default Register