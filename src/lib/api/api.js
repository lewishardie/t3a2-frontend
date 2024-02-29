

// Define the URL of your backend server
const backendUrl = process.env.REACT_APP_BACKEND_URL;

// Create user account
export async function createUserAccount(user) {
    return fetch(backendUrl + "/users/register", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    }).then((response) => {
      if (!response.ok) {
        throw new Error('Failed to create user account');
      }
      return response.json();
    });
  }