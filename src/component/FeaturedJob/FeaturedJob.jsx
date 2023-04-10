import React from 'react';
import './FeaturedJob.css';
import Job from '../Job/Job';

const FeaturedJob = ({ jobs }) => {
    return (
        <div>
            <div className='featured-info'>
                <h2 className='featured-title'>Featured Jobs</h2>
                <p className='featured-description'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='featured-job-container'>
                {
                    jobs.map(job => <Job
                        key={job.id}
                        job={job}
                    ></Job>)
                }
            </div>
        </div>
    );
};

export default FeaturedJob;