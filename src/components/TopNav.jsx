import React from 'react'
import { NavLink } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

{/* <NavLink to ='/' style={({isActive}) => isActive ? {color: "red"} : undefined }>Home</NavLink> */}

export default function TopNav() {
  return (

    <header>

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
              {/* might need to look into changing this */}
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
      </header>

  );
}