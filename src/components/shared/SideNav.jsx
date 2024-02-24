import React from 'react'
import { NavLink } from 'react-router-dom'

import { Nav } from "react-bootstrap"


export default function SideNav() {

  return (
      <nav className="">
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