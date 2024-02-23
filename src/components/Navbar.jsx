import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <header>
      <nav className="navbar">
          <ul>
            <li>
              <NavLink to ='/' style={({isActive}) => isActive ? {color: "red"} : undefined }>Home</NavLink>
            </li>
          </ul>
      </nav>
    </header>
  )
}