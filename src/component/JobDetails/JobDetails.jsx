import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const JobDetails = () => {
    const loadId = useParams();
    const [jobs, setJobs] = useState([])
    useEffect(() => {
        fetch('/jobData.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, []);
    const job = jobs.filter(job => job.id === +loadId.jobId);

    console.log(job[0])
    return (
        <div>
            <h2>job details</h2>
            <div className='details-container'>
                <div className='details-left-info'>

                </div>
                <div className='details-right-info'>

                </div>
            </div>
        </div>
    );
};

export default JobDetails;