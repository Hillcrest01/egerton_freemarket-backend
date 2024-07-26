import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles.css'; // Import the global styles

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    <img src="/static/logo1.png" alt="Egerton FreeMarket Logo" className="logo" />
                </Link>
                <button className="navbar-toggle" onClick={toggleMenu}>
                    <i className="fas fa-bars"></i>
                </button>
                <ul className={`navbar-menu ${isOpen ? 'active' : ''}`}>
                    <li className="navbar-item">
                        <Link to="/" className="navbar-link" onClick={closeMenu}>Home</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/about" className="navbar-link" onClick={closeMenu}>About Us</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/terms" className="navbar-link" onClick={closeMenu}>Terms and Conditions</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/contact" className="navbar-link" onClick={closeMenu}>Contact Us</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/add" className="add-product" onClick={closeMenu}>Add Product</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
