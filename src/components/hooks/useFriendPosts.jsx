import { useEffect, useState } from 'react';
import { useQuery } from '../../context/QueryContext';

export function useFriendPosts() {
  const { getFriendsUsernames, getPostByAuthor, getPostByCategory, userData, viewFollows } = useQuery();
  const [userPosts, setUserPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const username = userData?.username;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
    
        // Fetch friends' usernames
        const friendsUsernames = await getFriendsUsernames();
        const friendPosts = await Promise.all(friendsUsernames.map(username => getPostByAuthor(username)));
    
        // Fetch categories followed by the user
        const followsData = await viewFollows();
        const followsCategories = followsData?.follows || [];
    
        // Fetch posts for each category followed
        const followPosts = await Promise.all(followsCategories.map(category => getPostByCategory(category)));
    
        // Filter out category posts without categories
        const filteredFollowPosts = followPosts.flat().filter(post => post.category && post.category.length > 0);
    
        // Fetch current user's posts
        const currentUserPosts = await getPostByAuthor(username);
    
        // Concatenate all posts
        const allPosts = friendPosts.flat().concat(filteredFollowPosts, currentUserPosts);
    
        setUserPosts(allPosts);
    
        setIsLoading(false);
    
      } catch (error) {
        console.error("Error fetching posts:", error);
        setError(error);
        setIsLoading(false);
      }
    };

    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [username]);

  return { userPosts, isLoading, error };
}

