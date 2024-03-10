
import { Link } from 'react-router-dom'
import { FiLogOut } from "react-icons/fi";
import { useAuth } from '../../context/AuthContext';

// Icon Imports

import { useQuery } from '../../context/QueryContext';


const TopNav = () => {
  
  const { userData } = useQuery();
  
  const { logOutUser } = useAuth();

  return (

      <section className="top-nav flex-between">
         

        <div className="flex items-center gap-5">

          <Link to="/" className="">
            <div className="w-[50px] md:w-[70px]">
            <img
              src={"../assets/icons/gamestart-logo.svg"}
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



            <Link to={`/profile/${userData?.username}`}>
              <div className="w-[40px] md:w-[60px]">
              <img
                src={`${userData?.avatarImg}` || '/assets/avatars/user_3177440.png'} 
                alt="logo"
                />
              </div>
            </Link>
       
            <button 
              className="hover:bg-red hover:text-white rounded-full p-2"
              onClick={logOutUser}
              >
              <FiLogOut 
                size={30}
                
              />
            </button>
        </div>

      </section>


  );
};

export default TopNav
