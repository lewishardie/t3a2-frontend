import React from 'react'
import { useState, useEffect } from 'react'
import { Nav } from 'react-bootstrap'


const Settings = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    avatar: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission
    console.log(formData);
  };

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
            value={formData.name}
            onChange={handleChange}
            className="mt-1 p-2 block w-full rounded border border-gray-300"
            required
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
            value={formData.email}
            onChange={handleChange}
            className="mt-1 p-2 block w-full rounded border border-gray-300"
            required
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
            value={formData.password}
            onChange={handleChange}
            className="mt-1 p-2 block w-full rounded border border-gray-300"
            required
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