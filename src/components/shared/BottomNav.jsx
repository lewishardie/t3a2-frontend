import { NavLink} from 'react-router-dom'

import { BiMessageSquareDots } from 'react-icons/bi'
import { IoNotificationsOutline } from 'react-icons/io5'
import { LiaUserFriendsSolid } from 'react-icons/lia'
// import { IoHomeOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { IoBookOutline } from "react-icons/io5";

import React from 'react'

export default function BottomNav () {

    return (
        <nav className="bottom-nav" >

            <ul className="flex flex-row bottom-0 justify-between px-2 mr-2 ml-2">

            {/* Home Nav Link
            <li className="bottom-nav-link">
                <NavLink 
                to='/home'
                className="flex gap-2 p-2"
                >
                <IoHomeOutline size={30}/>
                </NavLink>
            </li> */}

            <li className="bottom-nav-link">
                <NavLink 
                to ='/explore'
                className="flex gap-4 p-2"
                >
                <IoBookOutline size={30}/>

                </NavLink>
            </li>

            <li className="bottom-nav-link">
                <NavLink 
                to='/chats'
                className="flex gap-4 p-2"
                >
                <BiMessageSquareDots size={30}/>
                </NavLink>
            </li>

            <li className="bottom-nav-link">
                <NavLink 
                to='/friends' 
                className="flex gap-4 p-2"
                >
                <LiaUserFriendsSolid size={30}/>

                </NavLink>
            </li>

            <li className="bottom-nav-link">
                <NavLink 
                to='/notifications'
                className="flex gap-4 p-2"
                >
                <IoNotificationsOutline size={30}/>
                </NavLink>
            </li>

            <li className="bottom-nav-link">
                <NavLink 
                to='/settings'
                className="flex gap-4  p-2"
                >
                <IoSettingsOutline size={30}/>
                </NavLink>
            </li>

            </ul>
        </nav>
    )
}