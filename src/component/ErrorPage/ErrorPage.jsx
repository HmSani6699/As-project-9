import React from 'react';
import './ErrorPage.css';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='error-container'>
            <div>
                <img src="/public/error-img.avif" alt="" />
                <br />
                <div className='home-back-btn'>
                    <button className='view-details-btn'><Link to="/">Go back Home</Link></button>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;