import React, {  useState } from 'react';
import { useQuery } from '../../context/QueryContext';
import { BsThreeDots } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';


const PostCard = ({ post }) => {
  const { deletePost } = useQuery()

  const [showMenu, setShowMenu] = useState(false)
  const navigate = useNavigate()


  const handleEdit = () => {
    setShowMenu(false);
    navigate(`/edit-post/${post._id}`, { state: { post }});
    console.log("post data from post card", post)
    
  };

  const handleDelete = async () => {
    try {
      await deletePost(post._id);
      console.log("delete Post: ", post._id)
      setShowMenu(false);

    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };
  

  return (
    <div className="relative bg-white p-4 m-2 shadow-md rounded-lg">
    <h3 className="text-lg font-semibold">{post.title}</h3>
    <p className="text-gray-700">Author: {post.author}</p>
    {post.image && (
      // eslint-disable-next-line jsx-a11y/img-redundant-alt
      <img 
        src={post.image} 
        alt="Post Image" 
        className="w-full my-2" 
      />
    )}
    <p className="text-gray-700">{post.textArea}</p>
    <p className="text-gray-700">Category: {post.gameCategory}</p>
    <p className="text-gray-700">Time: {new Date(post.time).toLocaleString()}</p>
      <div className="absolute top-2 right-2">
         <BsThreeDots 
          size={20}
          onClick={() => setShowMenu(!showMenu)} 
          className="hover:bg-gray-300 rounded-full"
          />
        {showMenu && (
          <div className="absolute top-8 right-0 w-48 bg-gray-300 rounded-md shadow-lg z-10">
            <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left" onClick={handleEdit}>Edit</button>
            <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left" onClick={handleDelete}>Delete</button>
          </div>
        )}
      </div>
  </div>
  );
};

export default PostCard;