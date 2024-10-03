import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

// import images
import logoPic from "../images/logo.png"

const Navbar = () => {
    // menu toggler
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // dark mode
    const [darkMode, setDarkMode] = useState(true);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.body.classList.toggle('dark-mode');
    };

    return (
        <nav className="navbar">
            {/* hamburger */}
            <div className="navbar-menu-icon" onClick={toggleMenu}>
                {isOpen ? <FaTimes /> : <FaBars />}
            </div>
            {/* logo */}
            <div className="navbar-logo">
                <Link to="/"><img src={logoPic} alt="myLogo" /></Link>
            </div>
            {/* all links */}
            <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
                <li>
                    <Link to="/" onClick={toggleMenu}>Home</Link>
                </li>
                <li>
                    <Link to="/projects" onClick={toggleMenu}>Projects</Link>
                </li>
                <li>
                    <Link to="/intern" onClick={toggleMenu}>Internships</Link>
                </li>
                <li>
                    <Link to="/contact" onClick={toggleMenu}>Contact</Link>
                </li>
            </ul>
            <button onClick={toggleDarkMode}>
                {darkMode ? <MdLightMode /> : <MdDarkMode />}
            </button>
        </nav>
    );
};

export default Navbar;
