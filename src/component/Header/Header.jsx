import React from 'react';
import { Link } from "react-router-dom";
import './Header.css';

const Header = () => {
    return (
        <div >
            <div className='header-container'>
                <h2 className='header-logo'>Job hiring</h2>
                <nav className='nav-link'>
                    <Link to="/">Home</Link>
                    <Link to="/statistics">Statistics</Link>
                    <Link to="/applied">Applied Jobs</Link>
                    <Link to="/blog">Blog</Link>
                </nav>
                <button className='header-btn'>Star Applying</button>
            </div>
        </div>
    );
};

export default Header;