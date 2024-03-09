import React from 'react'
import { Link } from 'react-router-dom'
import { IoBookOutline } from "react-icons/io5";
import { gameCategories } from '../../components/constants/GameCategory';

const Explore = () => {

  return (

    <div className="home-container">

      <div className="flex flex-row gap-4 items-center border-b-2 border-black pb-2">
      <button>              
        <IoBookOutline size={35} /> 
      </button>
      <h2 className="w-full h3-bold md:h1-bold text-left m-0">Explore </h2>
      </div>

      <div className="home-container">

        <div className="grid grid-cols-3 lg:grid-cols-4 gap-5">

        {gameCategories.map((category, index) => (
              <div key={index} className="flex flex-col items-center p-2">
                <Link to={`/games/${category.name}`}>
                  {/* Assuming each category object has an 'imageUrl' property */}
                  <img
                    src={category.logo}
                    alt={category.name}
                    className="rounded-full w-40 h-40"
                    
                    />
                </Link>

                <h2 className="h3-bold m-0">{category.name}</h2>
              </div>
            ))}
        </div>
      </div>
  

    </div>
    
  )
}

export default Explore