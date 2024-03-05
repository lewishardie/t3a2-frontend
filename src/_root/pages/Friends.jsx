import React from 'react'
import { useAuth } from '../../context/AuthContext'
import { useQuery } from '../../context/QueryContext'


const Friends = () => {
  const { getFriendsList } = useQuery()


  return (
    <div className="flex flex-1">
        <div className="home-container">
          <div>
            <h2 className="h3-bold md:h2-bold text-left w-full">Friends </h2>

      </div>
      </div>
    </div>
  )
}

export default Friends