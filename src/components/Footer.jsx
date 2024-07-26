import React from 'react';
import '../styles.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-links">
                    <a href="/" className="footer-link">Home</a>
                    <a href="/about" className="footer-link">About Us</a>
                    <a href="/terms" className="footer-link">Terms and Conditions</a>
                    <a href="/contact" className="footer-link">Contact Us</a>
                </div>
                <div className="footer-social">
                    <a href="https://facebook.com" className="footer-social-link" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://twitter.com" className="footer-social-link" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://instagram.com" className="footer-social-link" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram"></i>
                    </a>
                </div>
                <div className="footer-credit">
                    <p>&copy; 2024 Egerton FreeMarket. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
