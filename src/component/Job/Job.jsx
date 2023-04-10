import React from 'react';
import './Job.css';

const Job = ({ job }) => {
    const { companyLogo, companyName, jobTitle, fullTimeOrPartTime, remoteOrOnsite, location, salary } = job;
    return (
        <div className='job-container'>
            <img src={companyLogo} alt="" />
            <h2>{jobTitle}</h2>
            <p>{companyName}</p>
            <div className='job-time-container'>
                <p>{fullTimeOrPartTime}</p>
                <p>{remoteOrOnsite}</p>
            </div>
            <span>{location}</span>
            <span>{salary}</span>
            <br />
            <button className='view-details-btn'>View Details</button>
        </div>
    );
};

export default Job;