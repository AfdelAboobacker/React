import React, { useState } from 'react'
import './navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <nav>
            {/* logo */}
            <NavLink to='/' className='logo'>Mywebsite</NavLink>

            {/* Hamburger menu icon */}
            <div className='menu-icon' onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            {/* nav links */}
            <ul className={menuOpen ? "show" : ""}>
                {/* home */}
                <li>
                    <NavLink
                        to='/'
                        className={({ isActive }) => (isActive ? "active" : "")}
                        onClick={() => setMenuOpen(false)}
                    >
                        Home
                    </NavLink>
                </li>

                {/* about */}
                <li>
                    <NavLink
                        to='/about'
                        className={({ isActive }) => (isActive ? "active" : "")}
                        onClick={() => setMenuOpen(false)}
                    >
                        About
                    </NavLink>
                </li>

                {/* service */}
                <li>
                    <NavLink
                        to='/service'
                        className={({ isActive }) => (isActive ? "active" : "")}
                        onClick={() => setMenuOpen(false)}
                    >
                        Services
                    </NavLink>
                </li>
            </ul>



        </nav>
    )
}

export default Navbar