import { useLoaderData, useParams } from 'react-router-dom';
import './jobDetails.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faEnvelopeOpen, faLocationDot, faPhone, faSackDollar } from '@fortawesome/free-solid-svg-icons';

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
                    <h4 className='top-title'>Job Details</h4>
                    <hr />
                    <div className='cart-info'>
                        <img src="/public/Frame.png" alt="" />
                        <p> <span>Salary : </span> {salary}</p>
                    </div>
                    <div className='cart-info'>
                        <img src="/public/Frame-1.png" alt="" />
                        <p> <span>Job Title : </span> {jobTitle}</p>
                    </div>
                    <h4>Contact Information</h4>
                    <hr />
                    <div className='cart-info'>
                        <img src="/public/Frame-2.png" alt="" />
                        <p> <span>Phone : </span> {contactInformation.phone}</p>
                    </div>
                    <div className='cart-info'>
                        <img src="/public/Frame-3.png" alt="" />
                        <p><span>Email : </span> {contactInformation.email}</p>
                    </div>
                    <div className='cart-info'>
                        <img src="/public/Frame-4.png" alt="" />
                        <p><span>Address : </span> {location}</p>
                    </div>
                    <button className='apply-now-btn'>Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;