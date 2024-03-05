import React from 'react'
// import { useAuth } from '../../context/AuthContext'
import { useQuery } from '../../context/QueryContext'
// import { useState, useEffect } from 'react'
import SearchBar from '../../components/shared/SearchBar'



const Friends = () => {
  const { userListData, friendListData } = useQuery()
  // const [ users, setUsers ] = useState([]);
  // const [ friends, setFriends ] = useState([]);
  // const { isAuthenticated } = useAuth();
  // const [ isLoading, setIsLoading ] = useState(false)


  // const userList = useQuery(userListData)

  // console.log(userList)

  
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const userData = await userListData
  //       const friendsData = await friendListData
        
  //       console.log(userData)
  //       console.log(friendsData)
        
  //       // Fetch user Data
  //       setUsers(userData);
  //       // Fetch friends llist
  //       setFriends(friendsData)

        

  //     } catch (error) {
  //       console.error("Error fetching data:", error)
  //       setIsLoading(false);
  //     }
  //   }

  //   fetchData();
  // }, [userListData, friendListData, isAuthenticated])


  return (
    <div className="flex flex-1">
      <div className="home-container">
        <div className="bg-slate-500">

            <h2 className="h3-bold md:h2-bold text-left w-full">Friends </h2>

            
            {friendListData && friendListData.length > 0 ? (
              friendListData.map((friendListData, index) => (
                <div key={index}>  </div>
              ))
            ) : (
              <p>No Friends Found. </p>
            )}
            <div>
              <SearchBar placeholder="Search Users" data={userListData} />
            </div>
            <div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Friends