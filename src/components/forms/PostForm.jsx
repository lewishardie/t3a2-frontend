import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom';
// import FileDropzone from '../shared/FileDropzone';
import { useQuery } from '../../context/QueryContext';
import { useAuth } from '../../context/AuthContext';
import { gameCategories } from '../constants/GameCategory'

//Define Form
export const PostForm = () => {
  const { isAuthenticated, } = useAuth();
  const{ makePost, userData } = useQuery();
  const navigate = useNavigate();

  console.log(userData)

  const [postData, setPostData ] = useState({
    title: '',
    textArea: '',
    gameCategory: '',
    author: userData.username,
  });


  // handle on change for 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPostData({ ...postData, [name]: value });
  };

  // Define Submit Handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!isAuthenticated) {

        console.log('User is not authenticated');
        return;
      }
      // Call the makePost function
      await makePost(postData);
      console.log("makePost is: ", postData)
      // redirect to home page
      navigate('/'); 
    } catch (error) {
      // Error Handle
      console.error("Error creating post:", error);
    }

  };

  return (

    <form className="flex gap-9 w-full " onSubmit={handleSubmit}>

      <div className="flex w-full flex-col  bg-gray-200 border border-gray-200 rounded py-3 px-4 mb-3">

        {/* Category Selection */}
        <div className="w-full px-3 mb-6">
          <label 
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" 
            htmlFor="gameCategory">
          </label>

          <div className="relative">
            <select 
              className="appearance-none block w-full bg-gray-100 text-black border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-purple-400 focus:bg-white" 
              id="gameCategory"
              name="gameCategory"
              onChange={handleChange} 
              value={postData.gameCategory} 
              required
            >
              <option value="" disabled>Select a category</option>
              {gameCategories.map((category, index) => (
                <option key={index} value={category?.name}>{category.name}</option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            </div>
          </div>

        </div>
        
        {/* Title */}
        <div className="w-full px-3 mb-6">
          <label 
            htmlFor="title"
            className="block uppercase tracking-wide text-black text-xs font-bold mb-2" >
          </label>
          <input 
            className="appearance-none block w-full bg-gray-100 text-black border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-purple-400 focus:bg-white" 
            id="title" 
            type="text" 
            placeholder="Title" 
            name="title"
            value={postData.title}
            onChange={handleChange}
            required
          >
          </input>
        </div>

        {/* Content */}
        <div className="w-full px-3 mb-6">
          <label 
            htmlFor="textArea" 
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          >
          </label>
          <textarea 
            className="appearance-none block w-full bg-gray-100 text-black border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-purple-400 focus:bg-white" 
            id="textArea" 
            as='textArea'
            type="text"
            rows="8"
            placeholder="Text (required)"
            name="textArea"
            value={postData.textArea}
            onChange={handleChange}
            required
          />
        </div>

        <div className="flex justify-end gap-4">
          <button 
            type="button"
            className="bg-gray-700 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded-full"
            onClick={() => navigate(-1)}
          >
            Cancel
          </button>
          <button 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            type="submit"
          >
            Post
          </button>
        </div>

      </div>
    </form>
  )
}


export default PostForm