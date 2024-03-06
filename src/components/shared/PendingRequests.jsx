import React, { useEffect, useState } from 'react';
import { useQuery } from '../../context/QueryContext';

const PrendingFriendRequests = () => {
  const { userData, getUserById } = useQuery();
  const [requestedFriendsData, setRequestedFriendsData] = useState([]);

  useEffect(() => {
    const fetchRequestedFriendsData = async () => {
      if (userData && userData.requestedFriends) {
        const requestedFriends = userData.requestedFriends;

        if (requestedFriends.length > 0) {
          const requestedFriendsData = await Promise.all(
            requestedFriends.map(async (friendId) => {
              const user = await getUserById(friendId);
              console.log(friendId, user)
              return user;
            })
          );
          setRequestedFriendsData(requestedFriendsData);
        }
      }
    };

    fetchRequestedFriendsData();
  }, [userData, getUserById]);

  return (
    <div>
      <h2>Requested Friends</h2>
      {requestedFriendsData.length > 0 ? (
        <ul>
          {requestedFriendsData.map((friend, index) => (
            <li key={friend?._id || index}> {/* Added key prop */}
              <div>
                <p>Username: {friend?.username}</p>
                <p>Email: {friend?.email}</p>
                {/* Add other user information as needed */}
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No requested friends</p>
      )}
    </div>
  );
};

export default PrendingFriendRequests;