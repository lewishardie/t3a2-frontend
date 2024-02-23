import React from 'react'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { FiLogOut } from "react-icons/fi";

import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Button } from 'react-bootstrap'

{/* <NavLink to ='/' style={({isActive}) => isActive ? {color: "red"} : undefined }>Home</NavLink> */}

export default function TopNav() {
  return (

    <section className="topnav">
      <div className="d-flex py-4 px-5">
        <Link to="/" className="d-flex gap-3 align-items-center">
          <img
            src="/assets/icons/gamestart-logo.svg"
            alt="logo"
            width={50}
            height={50}
            />
        </Link>

        <div className="d-flex gap-4">
          <Button 
            variant="" 
            className="" 
            // onClick={signOut}
            >
            <FiLogOut />

          </Button>
        </div>

      </div>
      </section>

  );
}
/*
<Navbar bg="dark" data-bs-theme="dark" expand="sm" className="bg-body-tertiary">
<div class="container-fluid" >
  <Navbar.Brand href="/">
      <img
        alt=""
        src="/assets/icons/gamestart-logo.svg"
        width="60"
        height="60"
        className="flex-start"
        />{' '}
      GameStar
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
 
    <Nav className="me-auto">
      <Nav.Link href="#home">Game1</Nav.Link>
      <Nav.Link href="#link">Game2</Nav.Link>
      <Nav.Link href="#link">Game2</Nav.Link>
      <Nav.Link href="#link">Game2</Nav.Link>
      <Nav.Link href="#link">Game2</Nav.Link>
      <Nav.Link href="#link">Game2</Nav.Link>
      <Nav.Link href="#link">Game2</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</div>
</Navbar>
*/