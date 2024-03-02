// export const Register = () => {
//     // const isLoading = useContext(AuthContext);
//     const isLoading = false
//     // Queries
    
//     const [registerData, setRegisterData ] = useState({
//         name: '',
//         username: '',
//         email: '',
//         password: ''
//     });
    
//     const { register } = useAuth()
//     const navigate = useNavigate()

//     const { name, username, email, password } = registerData

//     // handle on change for inputs
//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setRegisterData({ 
//             ...registerData, 
//             [name]: value 
//         });
//     };

//     // error
//     const handleError = (error) =>
//         toast.error(error, {
//             position: "bottom-left",
//         });
//     // success
//     const handleSuccess = (message) =>
//     toast.success(message, {
//         position: "bottom-right",
//     });

//     // handle submit
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const newUser = await register({name, email, username, password});
//             console.log(JSON.stringify(newUser));
//             console.log(newUser)

//             const { success, message } = newUser;
//             if (success) {
//                 handleSuccess(message);
//                 setTimeout(() => {
//                     navigate("/");
//                 }, 1000)
//             } else {
//                 handleError(message)
//             }
//         } catch (error) {
//             console.log(error)
//         }
//         setRegisterData({
//             ...registerData,
//             name: "",
//             email: "",
//             password: "",
//             username: "",
//         })
//     }