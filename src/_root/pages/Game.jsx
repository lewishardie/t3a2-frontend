import { Loader } from '../../components/shared';
// import { useAuth } from '../../context/AuthContext';
import { useQuery } from '../../context/QueryContext';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import { useFriendPosts } from '../../components/hooks/useFriendPosts';
import { gameCategories } from '../../components/constants/GameCategory';


const Game = () => {

  const {loading, error } = useQuery()
  
  const { name } = useParams();
  
  const [ gameData, setGameData ] = useState(null)

  useEffect(() => {
    const selectedGame = gameCategories.find(game => game.name === name);
    setGameData(selectedGame)
  }, [name]);

  // const handleFollow = async () => {
  //   return null
  // };

  // const handleUnfollow = async () => {
  //   return null
  // };

  // if (!isAuthenticated) {
  //   return null;
  // }

  if (loading) {
    return <Loader />; // Render loader while data is loading
  }

  if (error) {
    return <div>Error: {error.message}</div>; // Render error message if there's an error
  }

  return (
    <div className="profile-container">
      <div className="profile-inner-container">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-start md:gap-10 py-8 px-4 md:px-0">
          <img
            src={gameData?.logo || "../assets/icons/gamestart-logo.svg"}
            alt="profile"
            className="w-28 h-28 md:h-36 md:w-36 rounded-full mb-4 md:mb-0"
          />

          <div className="flex flex-col text-center md:text-left">

            <h1 className="text-xl md:text-3xl font-semibold">{gameData?.name}</h1>



            {/* {!isOwnProfile && isAuthenticated && (
              <>
                {isFriend ? (
                  <button onClick={handleFollow} className="btn btn-secondary mt-4">Remove Friend</button>
                ) : (
                  <button onClick={handleUnfollow} className="btn btn-primary mt-4">Add Friend</button>
                )}
              </>

            )} */}
          </div>
        </div>

        <div className="post-container mt-8 border-t-2 border-black pt-4">
          <h2 className="text-xl font-semibold mb-4">Game Posts</h2>
          <div className="grid-container gap-4">

            {/* Loop through user posts and render each post */}
            {/* {filteredPosts.map((post) => (
              <div key={post._id} className="post-card p-2 rounded-md">
                <PostCard post={post} />
              </div>
            ))} */}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
