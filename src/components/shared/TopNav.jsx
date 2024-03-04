
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


      <div className="sticky z-50 top-0 w-full flex justify-between items-center border-b-2 border-gray-200 py-4 px-5 bg-slate-400">
        <div className="w-1/4">

          <Link to="/home" className="">
            <div className="w-[40px] md:w-[50px]">
            <img
              src="/assets/icons/gamestart-logo.svg"
              alt="logo"
              />
            </div>
          </Link>
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

        <div className="w-1/4">
          <div className="flex justify-end gap-2">
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
              <img
                src='/assets/icons/gamestart-logo.svg'
                alt="profile"
                width={40}
                height={40}
                roundedCircle
                className="fixed gap-3"
                />
            </Link>
       
          </div>
        </div>
      </div>


  );
};

export default TopNav