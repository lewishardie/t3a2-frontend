
// import axios from 'axios'

//Create Account
// export async function registerUserAccount() {
//     try {
//         const newUser = await axios.post({
//             name: "",
//             username: "",
//             password: "",
//             email: ""
//         });
//         if (!newUser)
//     }
// }

//Login
// export async function logInAccount(username, password){
//     try{
//         const session = await axios.post('http://localhost:3000/users/login', { username, password })

//         return session
//     } catch (error) {
//         console.log(error)
//     }
// }

// ------------------------------------------------------------------------------------------

// // Define the URL of your backend server
// const backendUrl = process.env.REACT_APP_BACKEND_URL;

// // Create user account
// export async function createUserAccount(user) {
//     return fetch(backendUrl + "/users/register", {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(user),
//     }).then((response) => {
//       if (!response.ok) {
//         throw new Error('Failed to create user account');
//       }
//       return response.json();
//     });
// }


// // Login
// export async function login({ email, password }) {
//     const response = await fetch(backendUrl, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email, password}),
//     });
//     if (!response.ok) {
//         throw new Error('Sign in failed');
//     }
//     return response.json()
// }

// // Logout
// export async function logout() {
//     const response = await fetch(backendUrl, {
//         method: 'POST' });
//         if (!response.ok) {
//             throw new Error('Sign out failed')
//         }
//     return true;
// }