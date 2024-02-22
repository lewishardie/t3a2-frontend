import React from 'react'
import { NavLink } from 'react-router-dom'


const Sidebar = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav>
        <ul>
          <li>
            <NavLink to ='/' style={({isActive}) => isActive ? {color: "red"} : undefined }>Home</NavLink>
          </li>
          <li>
            <NavLink to ='/explore' style={({isActive}) => isActive ? {color: "red"} : undefined }>Explore</NavLink>
          </li>
          <li>
            <NavLink to ='/chats' style={({isActive}) => isActive ? {color: "red"} : undefined }>Chats</NavLink>
          </li>
          <li>
            <NavLink to ='/friends' style={({isActive}) => isActive ? {color: "red"} : undefined }>Friends</NavLink>
          </li>
          <li>
            <NavLink to ='/notifications' style={({isActive}) => isActive ? {color: "red"} : undefined }>Notifications</NavLink>
          </li>
          <li>
            <NavLink to ='/settings' style={({isActive}) => isActive ? {color: "red"} : undefined }>Settings</NavLink>
          </li>
        </ul>
        <div>Sidebar</div>
      </nav>
    </header>
  )
}

export default Sidebar