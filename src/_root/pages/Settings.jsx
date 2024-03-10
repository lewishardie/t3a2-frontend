import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useQuery } from '../../context/QueryContext';
import avatarOptions from '../../components/constants/AvatarConst';
import AvatarImage from '../../components/shared/AvatarProfile';
import { IoSettingsOutline } from "react-icons/io5";
import { useAuth } from '../../context/AuthContext';

const Settings = () => {
  const { userData, updateUserData, deleteUser } = useQuery();

    
  const { logOutUser } = useAuth();

  const [selectedAvatar, setSelectedAvatar] = useState(avatarOptions[0].url);

  const [userUpdate, setUserUpdate] = useState(() => ({
    name: userData?.name || '',
    // email: userData?.email || '',
    password: '',
    about: userData?.about || '',
    avatarImg: userData?.avatarImg || '',
  }));

const handleAvatarSelect = (avatarUrl) => {
  setSelectedAvatar(avatarUrl);
  setUserUpdate(prevState => ({
    ...prevState,
    avatarImg: avatarUrl
  }));
};

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await updateUserData(userUpdate);

      if (response) {
        showSuccessToast('Settings updated successfully.');
      } else {
        showErrorToast('Failed to update settings. Please try again.');
      }
    } catch (error) {
      console.error(error);
      showErrorToast('Failed to update settings. Please try again.');
    } finally {
      setUserUpdate({
        name: "",
        // email: "",
        password: "",
        // username: "",
        avatarmg: "",
        about: "",
      });
    }
  };

  const handleDeleteAccount = async () => {
    try {
      const deletedUser = await deleteUser();
      if (deletedUser) {
        showSuccessToast('User account deleted successfully.');
        
        await logOutUser()
      }
    } catch (error) {
      console.error("Error deleting user account:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserUpdate({ ...userUpdate, [name]: value });
  };

  const showSuccessToast = (message) => {
    toast.success(message, { position: 'bottom-right' });
  };

  const showErrorToast = (message) => {
    toast.error(message, { position: 'bottom-left' });
  };

  return (
    <div className="home-container">
        <div className="home-posts">
          <div className="flex flex-row gap-4 items-center w-full border-b-2 border-black pb-2">
          <button>              
            <IoSettingsOutline size={35} /> 
          </button>

          <h2 className="h3-bold md:h1-bold text-left m-0">Settings </h2>
          </div>


          <form onSubmit={handleSubmit} className="flex flex-col w-full">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
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
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Change Password?"
                value={userUpdate.password}
                onChange={handleChange}
                className="mt-1 p-2 block w-full rounded border border-gray-300"
                autoComplete="off"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="about" className="block text-sm font-medium text-gray-700">About</label>
              <textarea
                id="about"
                name="about"
                placeholder=''
                rows="3"
                value={userUpdate.about}
                onChange={handleChange}
                className="mt-1 p-2 block w-full rounded border border-gray-300"
              />
            </div>
            <div className="mb-4 flex flex-col gap-4">
              <div className="flex flex-row">

              <label htmlFor="avatar" className="block text-sm font-medium text-gray-700">Avatar:</label>
              <AvatarImage 
                avatarOptions={avatarOptions} 
                onSelectAvatar={handleAvatarSelect} 
                selectedAvatar={selectedAvatar} />
                </div>
                <img src={selectedAvatar} alt="Selected Avatar" className="selected-avatar" />
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded w-1/3">Save Changes</button>
          </form>
          <div className="flex mt-5">
            <button type="submit" onClick={handleDeleteAccount} className="bg-dark text-white px-4 py-2 rounded">Delete Account</button>
          </div>
        </div>
      </div>
  );
};

export default Settings;