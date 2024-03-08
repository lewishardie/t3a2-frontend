import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '../../context/QueryContext';
import { gameCategories } from '../constants/GameCategory';

const UpdateForm = ({ post }) => {
  const { updatePost } = useQuery();
  const navigate = useNavigate();

  const [updateData, setUpdateData] = useState({
    title: post.title,
    textArea: post.textArea,
    image: post.image,
    gameCategory: post.gameCategory,
  });

  useEffect(() => {
    setUpdateData({
      title: post.title,
      textArea: post.textArea,
      image: post.image,
      gameCategory: post.gameCategory,
    });
  }, [post]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdateData({ ...updateData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updatePost(post._id, updateData);
      navigate('/');
    } catch (error) {
      console.error('Error updating post:', error);
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
              value={updateData.gameCategory} 
            >
              <option value="" disabled>Select a category</option>
              {gameCategories.map((category, index) => (
                <option key={index} value={category}>{category}</option>
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
            value={updateData.title}
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
            value={updateData.textArea}
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
          <input 
            type="file"
            name="image"
            id="image"
            value={updateData.image}
            onChange={handleChange}
            accept=".jpg,.png,.jpeg,.svg"
          
          />
          
          {/* <FileDropzone
            onChange={handleChange}
            value={postData.image}
            mediaUrl="post?.imageUrl"
          
          /> */}
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
            Save
          </button>
        </div>

      </div>
    </form>
  );
};

export default UpdateForm;