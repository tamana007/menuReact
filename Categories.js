import React from 'react';

const Categories = ({fun}) => {

  return (
    <div className='btn-container'>
    <button  className='filter-btn' onClick={()=>fun('lunch')}>click</button></div>
  )
};

export default Categories;
