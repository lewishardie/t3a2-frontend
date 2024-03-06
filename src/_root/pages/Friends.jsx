import React from 'react';
import { useQuery } from '../../context/QueryContext';
import { IoPersonAdd } from "react-icons/io5";
import { SearchBar } from '../../components/shared';

const Friends = () => {
  const { userListData, friendListData, userData } = useQuery();

  console.log(friendListData)
  console.log(userData)

  return (
    <div className="flex flex-1">
      <div className="home-container">
        <div className="home-posts">
          <h2 className="h3-bold md:h2-bold text-left w-full">Friends </h2>
          <button>              
            <IoPersonAdd size={40} /> 
          </button>
          <div>
            <SearchBar placeholder="Search Users" data={userListData} />
          </div>
          
          <div className="grid grid-cols-3 w-full bg-slate-400">
            <div>
              {friendListData && friendListData.friends && (
                <div>
                  {friendListData.friends.map((friend, index) => (
                    <div key={index} className="user-card">
                      {friend?.username}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div>Friend 2</div>
          </div>
          
          <div className="home-container w-full">
            <h2 className="h2-bold">Friend Requests</h2>
            <div className="w-full flex flex-1 flex-col gap-5">
              <div className="flex flex-col">
                <h2 className="h3">Received Requests</h2>
                {userData?.receivedFriends && userData?.receivedFriends.map((request, index) => (
                  <div key={index}>{request}</div>
                ))}
              </div>
              <div className="flex flex-col">
                <h2 className="h3">Pending Requests</h2>
                {userData?.requestedFriends && userData?.requestedFriends.map((request, index) => (
                  <div key={index}>{request}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Friends;