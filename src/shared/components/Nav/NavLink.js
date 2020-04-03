import React from 'react'
//import './NavLink.css'
import './NavLink.css'
import {NavLink} from 'react-router-dom'

const NavLinks = props => {
    return <ul className = 'nav-links'>
        <li>
            <NavLink to = '/'>Home</NavLink>
        </li>
        <li>
            <NavLink to = '/u1/places'>Profile</NavLink>
        </li>
        <li>
            <NavLink to = '/places/new'>Post</NavLink>
        </li>
        <li>
            <NavLink to = '/auth'>Login</NavLink>
        </li>
    </ul>
}

export default NavLinks