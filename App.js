import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';
import menu from './data';

const allCatagoreies=new Set(menu.map((item)=>{return item.category}))
console.log(allCatagoreies);



function App() {
  const [menues,setMenues]=useState(menu);
  const[category,setCategory]=useState([]);

  function changeCategory(category){
    let newItem=menu.filter((item)=>item.category===category
    )
    setMenues(newItem);

  }

  return <main>
    
<section className='menu section'>

  <div className='title'>
    <h2>our Menu</h2>
   
    <div className='underline'></div>
    <Categories fun={changeCategory}/>
    <Menu items={menues}/>
  </div>

</section>
  </main> 
}

export default App;
