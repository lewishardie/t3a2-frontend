import React from 'react'
import { NavLink } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

{/* <NavLink to ='/' style={({isActive}) => isActive ? {color: "red"} : undefined }>Home</NavLink> */}

export default function TopNav() {
  return (

    <section className="topnav">
      <div className="flex-between py4 px-5">


        <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home">
                <img
                  alt=""
                  src="/img/logo.svg"
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                  />{' '}
                Social Media App
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              {/* might need to look into changing this */}
              <Nav className="me-auto">
                <Nav.Link href="#home">Game1</Nav.Link>
                <Nav.Link href="#link">Game2</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </section>
  );
}