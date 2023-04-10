import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner-container'>
            <div className='banner-blog'>
                <h3 className='banner-title'>One Step Closer To Your Dream Job</h3>
                <p className='banner-description'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className='banner-button'>Get Started</button>
            </div>
            <div className='banner-Img'></div>
        </div>
    );
};

export default Banner;