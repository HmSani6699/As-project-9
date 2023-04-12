import React, { useState } from 'react';
import Banner from '../Banner/Banner';
import JobCategory from '../JobCategory/JobCategory';
import FeaturedJob from '../FeaturedJob/FeaturedJob';
import { useLoaderData } from "react-router-dom";
import './Home.css';
import Footer from '../Footer/Footer';

const Home = () => {
    const loadJobs = useLoaderData();

    const [jobs, setJobs] = useState(loadJobs.slice(0, 4));
    return (
        <div className='all-container'>
            <Banner></Banner>
            <JobCategory></JobCategory>
            <FeaturedJob jobs={jobs}></FeaturedJob>
            <div className='see-all-jobs-button'>
                <button onClick={() => setJobs(loadJobs)} className={`all-jobs-btn ${jobs.length === 6 && "btn_hid"}`}>See All jobs</button>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;