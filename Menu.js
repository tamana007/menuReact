import React from 'react';
import menu from './data';
import {useState}from 'react'

const Menu = ({items}) => {
  
  

  return (
    // <div className='section-center'>
    //   {menues.map((item)=>{
    //   return (<div {...item.title}/>)
    // })}</div>
    <div className='section-center'>
      {items.map((i)=>{
        const{id,category,title,price,img,desc}=i;
        return <article className='menu-item'>
          <img src={img} className='photo' alt='photo'></img>
          <div className='item-info'>
            <header>
              <h4>{title}</h4>
              <h4 className='price'>${price}</h4>
            </header>
            <div className='item-text'>{desc}</div>
          </div>
        
        </article>})}
    </div>
  )
};

export default Menu;
;