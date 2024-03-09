import React, {  useState } from 'react';
import { useQuery } from '../../context/QueryContext';
import { BsThreeDots } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import { gameCategories } from '../constants/GameCategory'
import { useAuth } from '../../context/AuthContext';



const PostCard = ({ post }) => {
  const { deletePost } = useQuery()

  const { isAuthenticated } = useAuth();

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

  const game = gameCategories.find(game => game.name === post?.gameCategory);
  const isAuthor = isAuthenticated && post?.author === isAuthenticated?.username;
  

  return (
    <div className="relative bg-white p-4 m-2 shadow-md rounded-lg">
      {game && (
        <div className="flex items-center mb-2">
          <img 
            src={game.logo} 
            alt={game.name} 
            className="w-6 h- rounded-full mr-2"
            
          />
          <p className="text-gray-600 m-0">{game.name}</p>
        </div>
      )}
      <h3 className="text-xl font-bold mb-2 border-b-2 pb-1 border-gray-600">{post.title}</h3>


      <p className="text-gray-600 mb-2">{post.author}</p>

      {post.image && (
        // eslint-disable-next-line jsx-a11y/img-redundant-alt
        <img 
          src={post.image} 
          alt="Post Image" 
          className="w-full rounded-lg overflow-hidden mb-4"
          
        />
      )}
        <div className="overflow-hidden max-h-[150px]">
          <p className="text-gray-800 mb-4">{post.textArea}</p>
        </div>
      <div className="flex justify-between items-center">
        <p className="text-gray-600 text-xs">{new Date(post.time).toLocaleString()}</p>
      </div>

      {/* edit / delete function */}
      {isAuthor && (
        <div className="absolute top-2 right-2">
          <BsThreeDots 
            size={20}
            onClick={() => setShowMenu(!showMenu)} 
            className="hover:bg-gray-300 rounded-full cursor-pointer"
          />
          {showMenu && (
            <div className="absolute top-10 right-0 w-48 bg-white rounded-md shadow-lg z-10">
              <button className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 w-full text-left" onClick={handleEdit}>Edit</button>
              <button className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 w-full text-left" onClick={handleDelete}>Delete</button>
            </div>
          )}
        </div>
      )}
      </div>

  );
};

export default PostCard;