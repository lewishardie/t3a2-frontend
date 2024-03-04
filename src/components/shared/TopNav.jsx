
import { Link, NavLink } from 'react-router-dom'
import { FiLogOut } from "react-icons/fi";
import { useAuth } from '../../context/AuthContext';

import { Button } from 'react-bootstrap'

// Icon Imports
import { IoNotificationsOutline } from "react-icons/io5";
import { BiMessageSquareDots } from "react-icons/bi";
import { LiaUserFriendsSolid } from "react-icons/lia";


const TopNav = () => {
  
  
  const { logOutUser } = useAuth()
  
  

  return (


      <div className="top-nav">
        <div className="w-1/4 flex items-center gap-5">

          <Link to="/" className="">
            <div className="w-[50px] md:w-[70px]">
            <img
              src="/assets/icons/gamestart-logo.svg"
              alt="logo"
              />
            </div>
          </Link>

            <span className="">
              <p className="h2-bold m-0">Convokers</p>
            </span>
        </div>

        <div className="w-1/2">
          {/* <div className="flex justify-between">
            <Link to="/" className="bg-red rounded">
              <p>game1</p>

            </Link>
            <Link to="/" className="bg-red rounded">
              <p>game2</p>
            </Link>
            <Link to="/" className="bg-red rounded">
              <p>game3</p>

            </Link>
            <Link to="/" className="bg-red rounded">
              <p>game3</p>

            </Link>
            <Link to="/" className="bg-red rounded">
              <p>game3</p>

            </Link>
            <Link to="/" className="bg-red rounded">
              <p>game3</p>

            </Link>
          </div> */}

        </div>

        <div className="w-1/4 flex justify-end gap-2 items-center">
            <NavLink 
              to="/friends" 
              className="btn"
              style={({isActive}) => isActive ? {color:"white"} : undefined }
              >
              <LiaUserFriendsSolid size={25}/>
            </NavLink>
          
            {/* Need to change link to open the side menu with notifcations panel*/}
            <NavLink 
              to="/notifications" 
              className="btn"
              style={({isActive}) => isActive ? {color:"white"} : undefined }
              >
              <IoNotificationsOutline size={25}/>
            </NavLink>
            <NavLink 
              to="/chats"
              className="btn"
              style={({isActive}) => isActive ? {color:"white"} : undefined }
              >
              <BiMessageSquareDots size={25}/>
            </NavLink>

            <Button 
              variant="" 
              className=""
              onClick={logOutUser}
              >
              <FiLogOut 
                //logout button
              />
            </Button>

            <Link to="/profile">
              <div className="w-[40px] md:w-[60px]">
              <img
                src="/assets/icons/gamestart-logo.svg"
                alt="logo"
                />
              </div>
            </Link>
       
        </div>
      </div>


  );
};

export default TopNav