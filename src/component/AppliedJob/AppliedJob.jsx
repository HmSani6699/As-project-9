import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faSackDollar } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import './ApploedJob.css';

const AppliedJob = ({ job }) => {

    const { id, companyLogo, companyName, jobTitle, fullTimeOrPartTime, remoteOrOnsite, location, salary } = job;
    return (
        <div className='applied-job-container'>
            <div className='job-container applied-job-details'>
                <div className='applied-blog-part'>
                    <div className='applied-logo'>
                        <img src={companyLogo} alt="" />
                    </div>
                    <div>
                        <h2>{jobTitle}</h2>
                        <p>{companyName}</p>
                        <div className='job-time-container'>
                            <p>{fullTimeOrPartTime}</p>
                            <p>{remoteOrOnsite}</p>
                        </div>
                        <div className='icon-container'>
                            <p className='location'><FontAwesomeIcon className='icon' icon={faLocationDot} /> {location}</p>
                            <p className='salary'> <FontAwesomeIcon className='icon' icon={faSackDollar} /> {salary}</p>
                        </div>
                    </div>
                </div>
                <button className='view-details-btn'><Link to={`/jobDetails/${id}`}>View Details</Link></button>
            </div>
        </div>
    );
};

export default AppliedJob;