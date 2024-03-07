import React, { useEffect, useState } from 'react';
import { useQuery } from '../../context/QueryContext';
import { IoPersonAdd } from "react-icons/io5";
import { SearchBar, UserCard } from '../../components/shared';
import { FcCancel, FcCheckmark } from "react-icons/fc";
// import { useEffect } from 'react';
// import { useState } from 'react';



const Friends = () => {

  const { userListData, createFriendRequest, confirmFriendRequest, rejectFriendRequest, viewReceivedRequests, viewPendingRequests, getFriendsList, deleteFriend } = useQuery();
  const [requestedFriends, setRequestedFriends] = useState([]);
  const [receivedFriends, setReceivedFriends] = useState([]);
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

  const handleSendFriendRequest = async (username) => {
    try {
      await createFriendRequest(username)

      // Update friend list
      const updatedFriendList = await getFriendsList();
      setFriendList(updatedFriendList.friends)
      console.log("Friend Request Sent")

    } catch (error) {
      console.eorr("Error deleted friend:", error)
    }
};

  const handleAcceptRequest = async (username) => {
    try {
      await confirmFriendRequest(username);

      // Update received friends
      const updatedRequests = receivedFriends.filter(request => request.username !== username);
      setReceivedFriends(updatedRequests)

      // Update friend list
      const updatedFriendList = await getFriendsList();
      setFriendList(updatedFriendList.friends)
      console.log("Confirm Friend Request")

    } catch (error) {
      console.error("Error accepting friend request:", error);
    }
  };

  const handleCancelRequest = async (username) => {
    try {
      await rejectFriendRequest(username); 
      
      // Update received friends
      const updatedRequests = receivedFriends.filter(request => request.username !== username);
      setReceivedFriends(updatedRequests)
      console.log("Reject Friend Request")

    } catch (error) {
    console.error("Error rejecting friend request:", error);
    }
  };

  const handleDeleteFriend = async (username) => {
    try {
      await deleteFriend(username)

      // Update friend list
      const updatedFriendList = await getFriendsList();
      setFriendList(updatedFriendList.friends)
      console.log("Friend Deleted")

    } catch (error) {
      console.eorr("Error deleted friend:", error)
    }
  }

  return (
    <div className="flex flex-1">
      <div className="home-container">
        <div className="home-posts">
          <h2 className="h3-bold md:h1-bold text-left w-full">Friends </h2>
          <button>              
            <IoPersonAdd size={40} /> 
          </button>
          
          <div className="grid grid-rows w-full lg:grid-cols-3">
          {friendList && friendList.map((request, index) => (
            <div className="" key={index}>
                      <UserCard 
                        key={index} 
                        data={request} 
                        onDelete={handleDeleteFriend} 
                        onAdd={handleSendFriendRequest} 
                        isFriend={friendList.some(friend => friend.username === request.username)}
                        />
                    </div>
                  ))}
          </div>

          <div>
            <SearchBar 
              placeholder="Search Users" 
              data={userListData}
              onSend={handleSendFriendRequest}

              />
          </div>
          
          <div className="home-container w-full">
            <h2 className="h1-semibold">Friend Requests</h2>
            <div className="w-full flex flex-1 flex-col gap-5">

              <div className="flex flex-col">
                <div className="border-b-2 border-black pb-2">
                  <h2 className="h3">
                    Received Requests
                  </h2>
                </div>
                  <div className="flex w-full p-2 items-center flex-col ">
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
              </div>
              <div className="flex flex-col">
                <div className="border-b-2 border-black pb-2">
                  <h2 className="h3">
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
    </div>
  );
};

export default Friends;