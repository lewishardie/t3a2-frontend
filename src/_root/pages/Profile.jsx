import { Loader, PostCard } from '../../components/shared';
import { useAuth } from '../../context/AuthContext';
import { useQuery } from '../../context/QueryContext';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useFriendPosts } from '../../components/hooks/useFriendPosts';

const Profile = () => {
  const { isAuthenticated } = useAuth();
  const { error, getUserByUsername, userData, createFriendRequest, deleteFriend, getFriendsList, viewFollows } = useQuery();
  const { userPosts } = useFriendPosts();
  const { username: currentUsername } = useParams();
  const navigate = useNavigate();
  const [profileData, setProfileData] = useState(null);
  const [isOwnProfile, setIsOwnProfile] = useState(false);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isFriend, setIsFriend] = useState(false);
  const [follows, setFollows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUserByUsername(currentUsername);
        setProfileData(data);
        setIsOwnProfile(userData?.username === data?.username);
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUsername]);

  useEffect(() => {
    // Filter userPosts based on the username
    if (userPosts.length > 0) {
      const filtered = userPosts.filter((post) => post.author === currentUsername);
      setFilteredPosts(filtered);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUsername, userPosts]);

  useEffect(() => {
    const checkFriendship = async () => {
      try {
        const friendsList = await getFriendsList();
        setIsFriend(friendsList.friends.some((friend) => friend.username === currentUsername));
      } catch (error) {
        console.error("Error fetching friends list:", error);
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const fetchFollowsData = async () => {
      try {
        const followsList = await viewFollows();
        setFollows(followsList);
      } catch (error) {
        console.error("Error fetching follows:", error);
      }
    };

    if (isAuthenticated) {
      fetchFollowsData();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  const handleAddFriend = async (username) => {
    try {
      await createFriendRequest(username);
      console.log("Friend request sent:", username);
    } catch {
      console.error("Error sending friend request:", error);
    }
  };

  const handleRemoveFriend = async () => {
    try {
      await deleteFriend(currentUsername);
      console.log("Friend removed:", currentUsername);
    } catch (error) {
      console.error("Error removing friend:", error);
    }
  };

  const handleGoToFriendProfile = (friendUsername) => {
    navigate.push(`/profile/${friendUsername}`);
  };

  if (!isAuthenticated) {
    return null;
  }

  if (loading) {
    return <Loader />; // Render loader while data is loading
  }

  if (error) {
    return <div>Error: {error.message}</div>; // Render error message if there's an error
  }
  console.log("profile data",profileData)

  return (
    <div className="profile-container">
      <div className="profile-inner-container">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-start md:gap-10 py-8 px-4 md:px-0">
          <img
            src={profileData?.avatarImg || "../assets/icons/gamestart-logo.svg"}
            alt="profile"
            className="w-28 h-28 md:h-36 md:w-36 rounded-full mb-4 md:mb-0"
          />
          <div className="flex flex-col text-center md:text-left">
            <h1 className="text-xl md:text-3xl font-semibold">{profileData?.username}</h1>
            <p className="text-gray-600 text-sm md:text-base mt-2">{profileData?.about}</p>
            {!isOwnProfile && isAuthenticated && (
              <>
                {!isFriend ? (
                  <button onClick={handleRemoveFriend} className="btn btn-secondary mt-4">Remove Friend</button>
                ) : (
                  <button onClick={() => handleAddFriend(profileData?.username)} className="btn btn-primary mt-4">Add Friend</button>
                )}
              </>
            )}
          </div>
        </div>
        <div className="follows-container mt-8 border-t-2 border-black pt-4 flex flex-col">
          <div className="flex flex-row gap-2">
            <h2 className="h2-semibold mb-4">Following</h2>
            <h4>({profileData.follows.length})</h4>
          </div>
          <ul>
            {profileData.follows.map((follow, index) => (
              <li key={index}>{follow}</li>
            ))}
          </ul>
        </div>

        <div className="post-container mt-8 border-t-2 border-black pt-4">
          <h2 className="h2-semibold mb-4">User Posts</h2>
          <div className="grid-container">
            {/* Loop through user posts and render each post */}
            {filteredPosts.map((post) => (
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

export default Profile;