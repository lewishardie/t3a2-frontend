import { useEffect, useState } from 'react';
import { useQuery } from '../../context/QueryContext';

export function useFriendPosts() {

  const { getFriendsUsernames, getPostByAuthor } = useQuery();
  const [userPosts, setUserPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const friendsUsernames = await getFriendsUsernames();
        const friendPosts = await Promise.all(friendsUsernames.map(username => getPostByAuthor(username)));
        const allPosts = friendPosts.flat();

        setUserPosts(allPosts);
        setIsLoading(false);

      } catch (error) {
        console.error("Error fetching friend posts:", error);
        setError(error);
        setIsLoading(false);
      }
    };

      fetchData();
  }, []);

  return { userPosts, isLoading, error };
}