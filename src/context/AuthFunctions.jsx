// import api from '../lib/api/api'

// export const logInUser = async (username, password) => {
//     try {
//       const response = await api.post('/users/login', { username, password })
//       const token = response.data
//       localStorage.setItem('token', token);
//     //   setUser(response.data.user);
//       console.log(response.data.user)
//     //   setIsAuthenticated(true)
//       return response.data.user;
//     } catch (error) {
//       throw new Error('Login failed');
//     }
//   };

//   export const register = async (name, username, email, password) => {
//     try {
//       const response = await api.post('/users/register', { name, username, email, password});
//       console.log(response.data.user)
//       return response.data.user;
//     } catch (error) {
//       console.log(error)
//       throw new Error('axios failed');
//     };
//   };

