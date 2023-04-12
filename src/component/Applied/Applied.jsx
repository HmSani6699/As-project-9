import React, { useState } from 'react';
import './Applied.css';
import { useLoaderData } from 'react-router-dom';
import { getShoppingCart } from '../utilities/fakedb';
import AppliedJob from '../AppliedJob/AppliedJob';

const Applied = () => {
    const loadedJobData = useLoaderData();
    const storedJob = getShoppingCart();

    const [selectedItem, setSelectedItem] = useState("Remote")

    const appliedJobs = []

    for (const id in storedJob) {
        const getApplied = loadedJobData.filter(job => job.id == id);
        appliedJobs.push(getApplied[0])
    }
    const [allJob, setAllJob] = useState(appliedJobs);

    const handleChange = (e) => {
        setSelectedItem(e.target.value);
        const getJob = appliedJobs.filter(job => job.remoteOrOnsite === selectedItem)
        setAllJob(getJob)
    }

    return (
        <div>
            <div className='job-details-title'>
                <h2>Applied Jobs</h2>
            </div>
            <div className='applied-jobs-container'>

                <select className='option-container' name='item-selected' value={selectedItem} onChange={handleChange}>
                    <option value="Onsite">Onsite</option>
                    <option value="Remote">Remote</option>
                </select>
                {
                    allJob.map(job => <AppliedJob
                        key={job.id}
                        job={job}
                    ></AppliedJob>)
                }
            </div>
        </div>
    );
};

export default Applied;