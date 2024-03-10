import { Loader, PostCard } from '../../components/shared';
import { useQuery } from '../../context/QueryContext';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { gameCategories } from '../../components/constants/GameCategory';

const Game = () => {
  const { name } = useParams();
  const { loading, error, getPostByCategory, followCategory, unfollowCategory, isAuthenticated } = useQuery();

  const [gameData, setGameData] = useState(null);
  const [gamePosts, setGamePosts] = useState([]);
  const [isFollowing, setIsFollowing] = useState(false);

  useEffect(() => {
    const selectedGame = gameCategories.find(game => game.name === name);
    setGameData(selectedGame);

    if (selectedGame) {
      const fetchPosts = async () => {
        try {
          const posts = await getPostByCategory(selectedGame.name);
          setGamePosts(posts);
        } catch (error) {
          console.error('Error fetching posts:', error);
        }
      };
      fetchPosts();
    }
  }, [name]);

  useEffect(() => {
    const checkFollowing = async () => {
      try {
        // Assuming `name` is the category name and `followCategory` follows that category
        const isFollowing = await followCategory(name); 
        setIsFollowing(isFollowing);
      } catch (error) {
        console.error('Error checking if following:', error);
      }
    };

    if (isAuthenticated) {
      checkFollowing();
    }
  }, [name, isAuthenticated, followCategory]);

  const handleFollowToggle = async () => {
    try {
      if (isFollowing) {
        await unfollowCategory(name); // Unfollow the category
        setIsFollowing(false);
      } else {
        await followCategory(name); // Follow the category
        setIsFollowing(true);
      }
    } catch (error) {
      console.error('Error toggling follow status:', error);
    }
  };

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
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

            {/* Render follow/unfollow button */}

            {(
              <button onClick={handleFollowToggle} className={`btn mt-4 ${isFollowing ? 'btn-secondary' : 'btn-primary'}`}>
                {isFollowing ? 'Unfollow' : 'Follow'}
              </button>
            )}
          </div>
        </div>

        <div className="post-container mt-8 border-t-2 border-black pt-4">
          <h2 className="text-xl font-semibold mb-4">Game Posts</h2>
          <div className="grid-container gap-4">
            {/* Render game posts */}
            
            {gamePosts.map(post => (
              <div key={post._id} className="post-card p-2 rounded-md">
                <PostCard post={post} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;