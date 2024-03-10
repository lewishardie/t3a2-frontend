import { useEffect, useState } from 'react';
import { useQuery } from '../../context/QueryContext';
import { SearchBar, UserCard } from '../../components/shared';
import { FcCancel, FcCheckmark } from "react-icons/fc";
import { LiaUserFriendsSolid } from 'react-icons/lia'


const Friends = () => {

  const { userListData, confirmFriendRequest, rejectFriendRequest, viewReceivedRequests, viewPendingRequests, getFriendsList, deleteFriend } = useQuery();

  const [ requestedFriends, setRequestedFriends ] = useState([]);
  const [ receivedFriends, setReceivedFriends ] = useState([]);
  const [ friendList, setFriendList ] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const requested = await viewPendingRequests();
        const received = await viewReceivedRequests();
        const friends = await getFriendsList();
        setRequestedFriends(requested.requestedFriends);
        setReceivedFriends(received.receivedFriends);
        setFriendList(friends.friends)
      } catch (error) {
        console.error("Error fetching pending requests:", error);
      }
    };

    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateFriendLists = async () => {
    try {
      const { friends } = await getFriendsList();
      setFriendList(friends);
    } catch (error) {
      console.error("Error updating friend lists:", error);
    }
  };

  // const handleSendFriendRequest = async (username) => {
  //   try {
  //     await createFriendRequest(username);
  //     const updatedPending = requestedFriends.filter(request => request.username !== username);
  //     setRequestedFriends(updatedPending);

  //     console.log("Friend request sent");
  //   } catch (error) {
  //     console.error("Error sending friend request:", error);
  //   }
  // };

  const handleAcceptRequest = async (username) => {
    try {
      await confirmFriendRequest(username);
      const updatedRequests = receivedFriends.filter(request => request.username !== username);
      setReceivedFriends(updatedRequests);

      console.log("Friend request accepted");
    } catch (error) {
      console.error("Error accepting friend request:", error);
    }
  };

  const handleCancelRequest = async (username) => {
    try {
      await rejectFriendRequest(username);
      const updatedRequests = receivedFriends.filter(request => request.username !== username);
      setReceivedFriends(updatedRequests);

      const updatedPending = requestedFriends.filter(request => request.username !== username);
      setRequestedFriends(updatedPending);
      console.log("Friend request rejected");
    } catch (error) {
      console.error("Error rejecting friend request:", error);
    }
  };

  const handleDeleteFriend = async (username) => {
    try {
      await deleteFriend(username);
      await updateFriendLists();
      console.log("Friend deleted");
    } catch (error) {
      console.error("Error deleting friend:", error);
    }
  };

  return (
      <div className="home-container">
        <div className="home-posts">
          <div className="flex flex-row gap-4 items-center border-b-2 border-black pb-2">
          <button>              
            <LiaUserFriendsSolid size={35} /> 
          </button>
          <h2 className="w-full h3-bold md:h1-bold text-left m-0">Friends</h2>
          <h3>({friendList.length})</h3>
          </div>
          
          <div className="user-grid ">
          {friendList && friendList.map((request, index) => (
            <div key={index}>
                      <UserCard 
                        key={index} 
                        data={request} 
                        onDelete={handleDeleteFriend} 
                        isFriend={friendList.some(friend => friend.username === request.username)}
                        />
                    </div>
                  ))}
          </div>

          <div>
            <SearchBar 
              placeholder="Search Users" 
              data={userListData}
              friendList={friendList}
              requestedFriends={requestedFriends}
              updateFriendLists={updateFriendLists}

              />
          </div>
          

          <div className="home-container w-full">
            <h2 className="h2-semibold">Friend Requests</h2>
            <div className="w-full flex flex-1 flex-col gap-5">

              <div className="flex flex-col">
                <div className="border-b-2 border-black pb-2">
                  <h2 className="h4">
                    Received Requests
                  </h2>
                </div>
                  <div className="flex w-full p-2 items-center flex-col ">
                  {receivedFriends.map((request, index) => (
                    <div className="flex items-center w-full justify-between border-b-2 py-3" key={index}>
                      <h3 className="m-0">{request.username}</h3>
                      <div className="flex gap-4">
                        <button 
                          onClick={() => handleAcceptRequest(request.username)}
                          className="flex items-center justify-center border border-black rounded-full w-10 h-10"
                        >
                          <FcCheckmark size={30} />
                        </button>
                        <button 
                          onClick={() => handleCancelRequest(request.username)}
                          className="flex items-center justify-center border border-black rounded-full w-10 h-10"
                        >
                          <FcCancel size={30} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

              <div className="flex flex-col">
                <div className="border-b-2 border-black pb-2">
                  <h2 className="h4">
                    Pending Requests
                  </h2>
                </div>
                <div className="flex w-full p-2 items-center flex-col ">
                  {requestedFriends.map((request, index) => (
                    <div className="flex items-center w-full justify-between border-b-2 py-3" key={index}>
                      <h3 className="flex m-0 body-bold text-gray-500">{request.username}</h3>
                    </div>
                  ))}
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  
  );
};

export default Friends;