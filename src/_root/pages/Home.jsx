import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Loader } from '../../components/shared';
import { useFriendPosts } from '../../components/hooks/useFriendPosts';
import { PostCard } from '../../components/shared';
import { IoHomeOutline } from "react-icons/io5";

export default function Home() {
  const { isAuthenticated } = useAuth();
  const { userPosts, isLoading, error } = useFriendPosts();

  const [showFriendPosts, setShowFriendPosts] = useState(true);

  // eslint-disable-next-line no-unused-vars
  const togglePosts = () => {
    setShowFriendPosts(prevState => !prevState);

  };

  if (!isAuthenticated) {
    return null;
  }

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="home-container">
        <div className="flex flex-row gap-4 items-center border-b-2 border-black pb-2">
        <button>              
          <IoHomeOutline size={35} /> 
        </button>
        <h2 className="w-full h3-bold md:h1-bold text-left m-0">Timeline </h2>
        </div>


      <div className="flex lg:w-2/3 min-w-[500px] w-full flex-col items-center">


          <nav className="flex flex-col sm:flex-row">
            <button className={`py-4 px-6 block hover:text-blue-500 focus:outline-none ${showFriendPosts ? 'text-blue-500 border-b-2 font-medium border-blue-500' : 'text-gray-600'}`} onClick={() => setShowFriendPosts(true)}>
              Friends 
            </button>
            <button className={`py-4 px-6 block hover:text-blue-500 focus:outline-none ${!showFriendPosts ? 'text-blue-500 border-b-2 font-medium border-blue-500' : 'text-gray-600'}`} onClick={() => setShowFriendPosts(false)}>
              Categories
            </button>
          </nav>
    

        <div className="home-posts">
          <ul className="flex flex-col flex-1 gap-9 w-full">
            {showFriendPosts ? (
              userPosts.map((post, index) => (
                <li key={index} className="justify-center w-full">
                  <PostCard post={post} />
                </li>
              ))
              ) : (
                userPosts.filter(post => post.category && post.category.length > 0).map((post, index) => (
                  <li key={index} className="justify-center w-full">
                  <PostCard post={post} />
                </li>
              ))
              )}
          </ul>
        </div>
      </div>
    </div>
  );
}
