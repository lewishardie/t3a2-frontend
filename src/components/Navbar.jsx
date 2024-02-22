import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar">
        <ul>
          <li>
            <NavLink to ='/' style={({isActive}) => isActive ? {color: "red"} : undefined }>Home</NavLink>
          </li>
        </ul>
    </nav>
  )
}


// import { NavLink } from "react-router-dom";

// export default function Navbar() {
//     return (
//         <nav className="nav">

//             <ul>
//                 <li>
//                     <NavLink to ='/' style={({isActive}) => isActive ? {color: "red"} : undefined }>Home</NavLink>
//                 </li>
//                 <li>
//                     <NavLink to ='/players' style={({isActive}) => isActive ? {color: "red"} : undefined }>Players</NavLink>
//                 </li>
//                 <li>
//                     <NavLink to ='/teams' style={({isActive}) => isActive ? {color: "red"} : undefined }>Teams</NavLink>
//                 </li>
//                 <li>
//                     <NavLink to ='/standings' style={({isActive}) => isActive ? {color: "red"} : undefined }>Standings</NavLink>
//                 </li>
//             </ul>
//         </nav>
//     )
// }
// // Need to watch the rest of the lesson