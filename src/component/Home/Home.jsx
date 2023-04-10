import React, { useState } from 'react';
import Banner from '../Banner/Banner';
import JobCategory from '../JobCategory/JobCategory';
import FeaturedJob from '../FeaturedJob/FeaturedJob';
import { useLoaderData } from "react-router-dom";
import './Home.css';

const Home = () => {
    const loadJobs = useLoaderData();
    const [jobs, setJobs] = useState(loadJobs.slice(0, 4));
    return (
        <div>
            <Banner></Banner>
            <JobCategory></JobCategory>
            <FeaturedJob jobs={jobs}></FeaturedJob>
            <div className='see-all-jobs-button'>
                <button onClick={() => setJobs(loadJobs)} className='all-jobs-btn'>See All jobs</button>
            </div>
        </div>
    );
};

export default Home;