import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner-container'>
            <div className='banner-blog'>
                <h3 className='banner-title'>One Step <br /> Closer To Your <br /> <span className='author-title'>Dream Job </span></h3>
                <p className='banner-description'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className='banner-button'>Get Started</button>
            </div>
            <div className='banner-Img'>
                <img src="banner_man.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;