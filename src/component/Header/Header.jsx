import React from 'react';
import { Link } from "react-router-dom";
import './Header.css';
import ActiveLink from '../ActiveLink/ActiveLink';
const Header = () => {
    return (
        <div >
            <div className='header-container'>
                <h2 className='header-logo'>Job hiring</h2>
                <nav className='nav-link'>
                    <ActiveLink to="/">Home</ActiveLink>
                    <ActiveLink to="/statistics">Statistics</ActiveLink>
                    <ActiveLink to="/applied">Applied Jobs</ActiveLink>
                    <ActiveLink to="/blog">Blog</ActiveLink>
                </nav>
                <button className='header-btn'>Star Applying</button>
            </div>
        </div>
    );
};

export default Header;