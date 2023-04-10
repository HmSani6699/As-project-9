import { useLoaderData, useParams } from 'react-router-dom';
import './jobDetails.css';

const JobDetails = () => {
    const loadId = useParams();
    const loadData = useLoaderData();
    const getJob = loadData.filter(job => job.id === +loadId.jobId);

    const { contactInformation, educationalRequirements, experiences, jobDescription, jobResponsibility, location, jobTitle, salary } = getJob[0];

    return (
        <div>
            <div className='job-details-title'>
                <h2>Job Details</h2>
            </div>
            <div className='details-container'>
                <div className='details-left-info'>
                    <p><span>Job Description : </span> {jobDescription}</p>
                    <p><span>Job Responsibility :</span> {jobResponsibility}</p>
                    <p><span>Educational Requirements :</span></p>
                    <p>{educationalRequirements}</p>
                    <p><span>Experiences :</span></p>
                    <p>{experiences}</p>
                </div>
                <div className='details-right-info'>
                    <h1>Cart</h1>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;