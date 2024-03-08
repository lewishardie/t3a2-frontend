
import { Link, NavLink } from 'react-router-dom'
import { FiLogOut } from "react-icons/fi";
import { useAuth } from '../../context/AuthContext';

import { Button } from 'react-bootstrap'

// Icon Imports
import { IoNotificationsOutline } from "react-icons/io5";
import { BiMessageSquareDots } from "react-icons/bi";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { useQuery } from '../../context/QueryContext';


const TopNav = () => {
  
  const { userData } = useQuery();
  
  const { logOutUser } = useAuth();

  return (
      <section className="top-nav">
        <div className=" flex-between">
        <div className="flex items-center gap-5">

          <Link to="/" className="">
            <div className="w-[50px] md:w-[70px]">
            <img
              src={userData?.imageUrl || "../assets/icons/gamestart-logo.svg"}
              alt="logo"
              />
            </div>
          </Link>

            <span className="">
              <p className="h2-bold m-0">Convokers</p>
            </span>
        </div>

        <div className="w-1/2">

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

            <Link to={`/profile/${userData?.username}`}>
              <div className="w-[40px] md:w-[60px]">
              <img
                src="/assets/icons/gamestart-logo.svg"
                alt="logo"
                />
              </div>
            </Link>
       
        </div>
        </div>
      </section>


  );
};

export default TopNav