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

    return (
        <div>
            <h2>job details</h2>
        </div>
    );
};

export default JobDetails;