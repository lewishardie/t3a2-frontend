import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom';
import FileDropzone from '../shared/FileDropzone';

//Define Form
export const PostForm = () => {
  
  const [postData, setPostData ] = useState({
    title: '',
    content: '',
    author: '',
    image: '',
  });
  const { navigate } = useNavigate()

  // handle on change for 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPostData({ ...postData, [name]: value });
};

  // Define Submit Handler
  function handleSubmit(e) {
    e.preventDefault();

    console.log(postData)
  }

  return (

    <form className="flex gap-9 w-full " onSubmit={handleSubmit}>

      <div className="flex w-full flex-col  bg-gray-200 border border-gray-200 rounded py-3 px-4 mb-3">

        {/* Category Selection */}
        <div className="w-full px-3 mb-6">
          <label 
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" 
            htmlFor="post-form">
          </label>
          <div className="relative">
            <select 
              className="appearance-none block w-full bg-gray-100 text-black border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-purple-400 focus:bg-white" 
              id="post-form"
              >
                <option defaultValue="" disabled>Choose a Game</option>
                <option>World of Wacraft</option>
                <option>Last Epoch</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
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
            htmlFor="content" 
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          >
          </label>
          <textarea 
            className="appearance-none block w-full bg-gray-100 text-black border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-purple-400 focus:bg-white" 
            id="content" 
            as='textarea'
            type="text"
            rows="8"
            placeholder="Text (required)"
            name="content"
            value={postData.content}
            onChange={handleChange}
            required
          />
        </div>

        {/* Image */}
        <div className="w-full px-3 mb-6">
          <label 
            htmlFor="image"
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          >
          </label>
          <FileDropzone
            onChange={handleChange}
            value={postData.image}
            mediaUrl="post?.imageUrl"
          
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