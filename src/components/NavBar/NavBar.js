import React from 'react'
import { NavLink } from 'react-router-dom'
import "./NavBar.css"

function NavBar() {
  return (
    <nav>
      <NavLink exact to="/">Home</NavLink>
      <NavLink to="/teddies">Teddies</NavLink>
      <NavLink to="/about">About</NavLink>
    </nav>
  )
}

export default NavBar;