import React from 'react';
import './Category.css';

const Category = ({ category }) => {
    const { name, img, Available } = category;
    return (
        <div className='category-container'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p>{Available}</p>
        </div>
    );
};

export default Category;