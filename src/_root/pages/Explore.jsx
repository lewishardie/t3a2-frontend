import React from 'react'
import { useQuery } from '../../context/QueryContext'
import { Link } from 'react-router-dom'

const Explore = () => {

  const { userData } = useQuery()


  return (
    <div className="xl:border-b-2 xl:border-gray-200 pb-6">
      <p className="text-gray-500 font-semibold m-3 mt-4 xl:block">
        Explore
      </p>
      <div className="home-container">

        <div className="grid grid-cols-3 lg:grid-cols-5 gap-5">

          <div className="flex flex-col items-center">
            <Link to="/games/1">
            <img
              src={userData?.imageUrl || "/assets/icons/gamestart-logo.svg"}
              alt="game"
              className="rounded-full"
              />
              </Link>
              <h2 className="h2-bold">Game 1</h2>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Explore