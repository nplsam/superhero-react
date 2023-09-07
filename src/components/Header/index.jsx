import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
const styles = ({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none'});

const Header = () => {
  return (
    <>
        <header>
            <nav>
            <NavLink to="/" style={styles}>Home</NavLink>
            <NavLink to="/superheroes" style={styles}>Superheroes</NavLink>
            <NavLink to="/search" style={styles}>Search Superheroes</NavLink>
            </nav>
        </header>
        <Outlet />
    </>
  )
}

export default Header
