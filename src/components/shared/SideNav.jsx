
import { NavLink } from 'react-router-dom'
import { useState } from 'react'

import { Nav } from "react-bootstrap"


export default function SideNav() {

  const [showSidebar, setShowSidebar] = useState(true)

  return (
      <nav className="bg-dark w-25 h-100">
        <ul className="">
          <li className="nav-item">
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
      </nav>

    // <Nav defaultActiveKey="/home" className="flex-column bg-secondary w-25 h-100 border">
    //   <Nav.Link href="/home">Home</Nav.Link>
    //   <Nav.Link href="/explore">Explore</Nav.Link>
    //   <Nav.Link href="/chats">Chats</Nav.Link>
    //   <Nav.Link href="/friends">Friends</Nav.Link>
    //   <Nav.Link href="/notifications">Notifications</Nav.Link>
    //   <Nav.Link href="/settings">Settings</Nav.Link>
    // </Nav>

  )
}

/*
function StackedExample() {
  return (
    <Nav defaultActiveKey="/home" className="flex-column">
      <Nav.Link href="/home">Active</Nav.Link>
      <Nav.Link eventKey="link-1">Link</Nav.Link>
      <Nav.Link eventKey="link-2">Link</Nav.Link>
      <Nav.Link eventKey="disabled" disabled>
        Disabled
      </Nav.Link>
    </Nav>
  );
}
*/