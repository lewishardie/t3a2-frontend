
import { NavLink } from 'react-router-dom'


import { BiMessageSquareDots } from 'react-icons/bi'
import { IoNotificationsOutline } from 'react-icons/io5'
import { LiaUserFriendsSolid } from 'react-icons/lia'
import { IoHomeOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { IoBookOutline } from "react-icons/io5";



export default function SideNav() {
  // const { pathname } = useLocation()

  // const [showSidebar, setShowSidebar] = useState(true)

  return (

    <nav className="side-nav" >
        <ul className="flex flex-col gap-4 px-2">
          {/* Home Nav Link */}
          <li className="side-nav-link">
            <NavLink 
              to='/home'
              className="flex gap-4 items-center py-4 px-2"
            >
              <IoHomeOutline size={30}/>
              Home
            </NavLink>
          </li>

          <li className="side-nav-link">
            <NavLink 
              to ='/explore'
              className="flex gap-4 items-center py-4 px-2"
            >
              <IoBookOutline size={30}/>
              Explore
            </NavLink>
          </li>

          <li className="side-nav-link">
            <NavLink 
              to='/chats'
              className="flex gap-4 items-center py-4 px-2"
            >
              <BiMessageSquareDots size={30}/>
              Chats
            </NavLink>
          </li>

          <li className="side-nav-link">
            <NavLink 
            to='/friends' 
            className="flex gap-4 items-center py-4 px-2"
            >
              <LiaUserFriendsSolid size={30}/>
              Friends
            </NavLink>
          </li>

          <li className="side-nav-link">
            <NavLink 
            to='/notifications'
            className="flex gap-4 items-center py-4 px-2"
            >
              <IoNotificationsOutline size={30}/>
              Notifications
            </NavLink>
          </li>

          <li className="side-nav-link">
            <NavLink 
            to='/settings'
            className="flex gap-4 items-center py-4 px-2"
            >
              <IoSettingsOutline size={30}/>
              Settings
            </NavLink>
          </li>
          <li className="side-nav-link">
            <NavLink 
            to='/profile'
            className="flex gap-4 items-center py-4 px-2"
            >
              <IoSettingsOutline size={30}/>
              Profile
            </NavLink>
          </li>
        </ul>
    </nav>
  )
}