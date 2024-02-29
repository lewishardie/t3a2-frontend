
import { NavLink } from 'react-router-dom'
import { useState } from 'react'

import { Navbar, Container, Row } from "react-bootstrap"
import { BiMessageSquareDots } from 'react-icons/bi'
import { IoNotificationsOutline } from 'react-icons/io5'
import { LiaUserFriendsSolid } from 'react-icons/lia'
import { IoHomeOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { IoBookOutline } from "react-icons/io5";



export default function SideNav() {

  // const [showSidebar, setShowSidebar] = useState(true)

  return (

    <Navbar >
      <Container fluid>
        <Row className="flex-column gap-11 bg-light">
        <ul className="d-flex flex-column gap-6">
          <li className="">
            <NavLink 
            to='/'
            className="d-flex gap-2 align-items-center p-2 rounded"
            style={({isActive}) => isActive ? {background: "#d16aff", color:"black"} : undefined }
            >
              <IoHomeOutline size={20}/>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to ='/explore'
              className="d-flex gap-2 align-items-center p-2 rounded"
              style={({isActive}) => isActive ? {background: "#d16aff", color:"black"} : undefined }
            >
              
              <IoBookOutline size={20}/>
              Explore

            </NavLink>
          </li>
          <li>
            <NavLink 
              to='/chats'
              className="d-flex gap-2 align-items-center p-2 rounded"
              style={({isActive}) => isActive ? {background: "#d16aff", color:"black"} : undefined }
            >
              <BiMessageSquareDots size={20}/>
              Chats
            </NavLink>
          </li>
          <li>
            <NavLink 
            to='/friends' 
            className="d-flex gap-2 align-items-center p-2 rounded"
            style={({isActive}) => isActive ? {background: "#d16aff", color:"black"} : undefined }
            >
              <LiaUserFriendsSolid size={20}/>
              Friends
            </NavLink>
          </li>
          <li>
            <NavLink 
            to='/notifications'
            className="d-flex gap-2 align-items-center p-2 rounded"
            style={({isActive}) => isActive ? {background: "#d16aff", color:"black"} : undefined }
            >
              <IoNotificationsOutline size={20}/>
              Notifications
            </NavLink>
          </li>
          <li>
            <NavLink 
            to='/settings'
            className="d-flex gap-2 align-items-center p-2 rounded"
            style={({isActive}) => isActive ? {background: "#d16aff", color:"black"} : undefined }
            >
              <IoSettingsOutline size={20}/>
              Settings
            </NavLink>
          </li>
        </ul>

        </Row>
      </Container>
    </Navbar>

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