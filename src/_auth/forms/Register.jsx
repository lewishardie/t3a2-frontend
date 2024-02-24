
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from '../../components/shared/Loader';
// Style
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// Backend
import { useBackend } from '../../context/BackendProvider'
// import { registerValidation } from '../../lib/validation';
// import { parse } from 'valibot'


// form object
export const Register = () => {
    const [formData, setFormdata ] = useState({
        name: '',
        username: '',
        email: '',
        password: '',
    })
    const [isLoading, setIsLoading] = useState(false);

    // Access backend-related functions
    const { postData } = useBackend();

    // handle on change for inputs
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormdata({ ...formData, [name]: value });
    };

    // handle submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await postData(formData);
            console.log('Server response:', response)
            console.log(formData)
            // Handle success
        } catch (error) {
            console.error('Failed to register user:', error)
            // Handle error
        } finally {
            setIsLoading(false);
        }
    };

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
                            minlength={10}

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

    )
}

export default Register


// combined form data and valibot

// export const Register = () => {
//     const [formData, setFormdata ] = useState({
//         name: '',
//         username: '',
//         email: '',
//         password: '',
//     })
//     const [errors, setErrors] = useState({});
//     const [isLoading, setIsLoading] = useState(false);
//     const [valdated, setValidated] = useState(false)


//     // Access postData from useBackend context
//     const { postData } = useBackend();

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormdata({ ...formData, [name]: value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setIsLoading(true);

//         const validation = parse(registerValidation, formData)
//         if (validation.success) {
//             try {
//                 const response = await postData(formData);
//                 console.log('Server response:', response)
//                 console.log(formData)
//                 // Handle success
//             } catch (error) {
//                 console.error('Failed to register user:', error)
//                 // Handle error
//             } finally {
//                 setIsLoading(false);
//             }
//         } else {
//             setErrors(validation.errors);
//             setIsLoading(false);
//         }
//     };


// seperate inputs and usestates

// // export const Register = (props) => {
// //     // variables for user registration form
// //     const [name, setName] = useState('')
// //     const [username, setUsername] = useState('')
// //     const [email, setEmail] = useState('')
// //     const [password, setPassword] = useState('')
// //     // const [errors, SetErrors] = useState({})

// //     

// //     // Access backend-related functions
// //     const { postData } = useBackend();

// //     // handle submit of the form
// //     const registerUser = async (e) => {
// //         // prevent reload of the app
// //         e.preventDefault();
// //         console.log(name, username, email, password)

// //         // try to send the data

// //         try {
// //             const userData = {
// //                 name,
// //                 username,
// //                 email,
// //                 password
// //             }

// //             await postData(userData);

// //         } catch (error) {
// //             console.error('Faied to register user:', error)
// //         };
// //     };