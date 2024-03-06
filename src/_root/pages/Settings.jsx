import React from 'react'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { useQuery } from '../../context/QueryContext';
import { useAuth } from '../../context/AuthContext';
// import { Loader } from '../../components/shared';


const Settings = () => {
  // const { isAuthenticated } = useAuth()
  const { userData } = useQuery(); // isLoading, error

  const [userUpdate, setUserUpdate] = useState({
    name: '',
    email: '',
    password: '',
    about: '',
    avatar: '',
  });

  const { updateUserData } = useAuth()

   // handle on change for inputs
   const handleChange = (e) => {
    const { name, value } = e.target;
    setUserUpdate({ ...userUpdate, [name]: value });
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

}
    
// handle submit
const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await updateUserData(userUpdate.name, userUpdate.username, userUpdate.email, userUpdate.password, userUpdate.about);
        console.log(response)

        if (response) {
            handleSuccess('success');
        } else {
            handleError('error')
        }
    } catch (error) {
        console.log(error)
        handleError('Registration failed. Please try again.');

    } finally {
        // reset form inputs
        setUserUpdate({
            name: "",
            email: "",
            password: "",
            username: "",
            about: "",
        })
    }
}

  return (
    
    <div className="flex flex-1">
        <div className="home-container">
          <div>


      <h2 className="h3-bold md:h2-bold text-left w-full">Settings</h2>

      <form onSubmit={handleSubmit} className="max-w-md mx-auto">

        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder={`${userData?.name}`}
            value={userUpdate.name}
            onChange={handleChange}
            className="mt-1 p-2 block w-full rounded border border-gray-300"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder={`${userData?.email}`}
            value={userUpdate.email}
            onChange={handleChange}
            className="mt-1 p-2 block w-full rounded border border-gray-300"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Change Password?"
            value={userUpdate?.password}
            onChange={handleChange}
            className="mt-1 p-2 block w-full rounded border border-gray-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirm-password"
            name="confirm-password"
            placeholder="Confirm Password"
            value={userUpdate?.confirmPassword}
            onChange={handleChange}
            className="mt-1 p-2 block w-full rounded border border-gray-300"
          />
          
        </div>
        <div className="mb-4">
          <label htmlFor="about" className="block text-sm font-medium text-gray-700">
            About
          </label>
          <textarea
            type="textarea"
            id="about"
            name="about"
            placeholder={userUpdate?.about ? `Write something about yourself: ${userData?.about}` : 'Write something about yourself?'}
            rows="3"
            value={userUpdate?.about}
            onChange={handleChange}
            className="mt-1 p-2 block w-full rounded border border-gray-300"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="avatar" className="block text-sm font-medium text-gray-700">
            Avatar
          </label>
          <input
            type="file"
            id="avatar"
            name="avatar"
            accept="image/*"
            onChange={handleChange}
            className="mt-1 p-2 block w-full rounded border border-gray-300"
          />
        </div>

        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Save Changes
        </button>
      </form>

      <div className="flex justify-end">
      <button type="submit" className="bg-dark text-white px-4 py-2 rounded">
        Delete Account
      </button>
      </div>
      
      </div>
      </div>
    </div>
    
  )
}

export default Settings