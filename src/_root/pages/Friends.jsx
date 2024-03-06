import React from 'react';
import { useQuery } from '../../context/QueryContext';
import { IoPersonAdd } from "react-icons/io5";
import { SearchBar, UserCard } from '../../components/shared';
import { FcCancel, FcCheckmark } from "react-icons/fc";
// import { useEffect } from 'react';
// import { useState } from 'react';
import UsernameConverter from '../../components/hooks/UsernameConverter';


import { useState } from 'react';

const Friends = () => {

  const { userListData, friendListData, userData, confirmFriendRequest, rejectFriendRequest, updateUserData } = useQuery();
  const [ loading, setLoading ] = useState(false);


  const handleAcceptRequest = async (username) => {
    await confirmFriendRequest(username); // Call confirmFriendRequest function on accepting request
    setLoading(true)
    await updateUserData()
    console.log("Confirm Friend Request")

  };

  const handleCancelRequest = async (username) => {
    await rejectFriendRequest(username); // Call confirmFriendRequest function on accepting request
    console.log("Reject Friend Request")

    if (loading) {
      return <div>Loading...</div>
    }

  };

  return (
    <div className="flex flex-1">
      <div className="home-container">
        <div className="home-posts">
          <h2 className="h3-bold md:h1-bold text-left w-full">Friends </h2>
          <button>              
            <IoPersonAdd size={40} /> 
          </button>
          <div>
            <SearchBar placeholder="Search Users" data={userListData} />
          </div>
          
          <div className="w-full">
            <div>
              {friendListData && friendListData.friends && (
                <div className="grid grid-cols-3 w-full">
                  {friendListData.friends.map((friend, index) => (
                    <UserCard key={index} data={friend}/>
                      // {friend?.username}
                  ))}
                </div>
              )}
            </div>

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
                  {userData?.receivedFriends && userData?.receivedFriends.map((id, index) => (
                  <UsernameConverter key={index} id={id}>
                    {(username) => (
                      <div className="flex flex-1 w-full items-center justify-between border-b-2 py-3" key={index}>
                        <h3 className="flex m-0">
                          {username} 
                          </h3>
                        <div className="flex flex-row gap-4">
                          <button 
                            onClick={() => handleAcceptRequest(username)}
                            className="flex items-center justify-center border border-black rounded-full w-10 h-10"
                            >
                            <FcCheckmark size={30}/>
                          </button>
                          <button 
                            onClick={() => handleCancelRequest(username)}
                            className="flex items-center justify-center border border-black rounded-full w-10 h-10"
                            >
                            <FcCancel size={30}/>
                          </button>
                        </div>
                      </div>
                    )}
                  </UsernameConverter>
                  ))}
                </div>
              </div>

              <div className="flex flex-col">
                <div className="border-b-2 border-black pb-2">
                  <h2 className="h3">
                    Pending Requests
                  </h2>
                </div>

                <div className="flex w-full p-2 items-center flex-col">
                {userData?.requestedFriends && userData?.requestedFriends.map((id, index) => (
                  <UsernameConverter key={index} id={id}>
                    {(username) => (

                      <div className="flex flex-1 w-full items-center justify-between border-b-2 py-2" key={index}>
                        <h3 className="flex m-0 body-bold text-gray-500">
                            {username} 
                        </h3> 

                      </div>
                    )}
                  </UsernameConverter>
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