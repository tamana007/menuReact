import React from 'react';

const Categories = ({fun,category}) => {

  return (
    <div className='btn-container'>
   {category.map((item,index)=>{
    return <button className='filter-btn' onClick={()=>{fun(item)}} key={index}>{item}</button>
   })}</div>
  )
};

export default Categories;
