import { useEffect, useState } from 'react';
import { useQuery } from '../../context/QueryContext';

export function useFriendPosts() {

  const { getFriendsUsernames, getPostByAuthor, userData } = useQuery();
  const [userPosts, setUserPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);


  const username = userData?.username

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const friendsUsernames = await getFriendsUsernames();
        const friendPosts = await Promise.all(friendsUsernames.map(username => getPostByAuthor(username)));
        const currentUserPosts = await getPostByAuthor(username);
        const allPosts = friendPosts.flat().concat(currentUserPosts);

        setUserPosts(allPosts);

        setIsLoading(false);

      } catch (error) {
        console.error("Error fetching friend posts:", error);
        setError(error);
        setIsLoading(false);
      }
    };

      fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [username]);

  return { userPosts, isLoading, error };
  
}