import React, { useState } from 'react';
import './Applied.css';
import { useLoaderData } from 'react-router-dom';
import { getShoppingCart } from '../utilities/fakedb';
import AppliedJob from '../AppliedJob/AppliedJob';

const Applied = () => {
    const loadedJobData = useLoaderData();

    const storedJob = getShoppingCart();

    const appliedJobs = []

    for (const id in storedJob) {
        const getApplied = loadedJobData.filter(job => job.id == id);
        appliedJobs.push(getApplied[0])
    }

    return (
        <div>
            <div className='job-details-title'>
                <h2>Applied Jobs</h2>
            </div>
            <div className='applied-job-container'>
                {
                    appliedJobs.map(job => <AppliedJob
                        key={job.id}
                        job={job}
                    ></AppliedJob>)
                }
            </div>
        </div>
    );
};

export default Applied;