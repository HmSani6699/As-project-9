import React, { useEffect, useState } from 'react';
import './JobCategory.css';
import Category from '../Category/Category';

const JobCategory = () => {
    const [categorys, setCategorys] = useState([]);
    useEffect(() => {
        fetch('authorJob.json')
            .then(res => res.json())
            .then(data => setCategorys(data))
    }, [])
    return (
        <div className='job-categorys-container'>
            <div>
                <h2 className='categorys-title'>Job Category List</h2>
                <p className='categorys-description'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='categorys-container'>
                {
                    categorys.map(category => <Category
                        key={category.id}
                        category={category}
                    ></Category>)
                }
            </div>
        </div>
    );
};

export default JobCategory;