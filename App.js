import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';
import menu from './data';

const allCatagoreies=["All",...new Set(menu.map((item)=>{return item.category}))]
// console.log(allCatagoreies);



function App() {
  const [menues,setMenues]=useState(menu);
  const[category,setCategory]=useState(allCatagoreies);

  function changeCategory(category){
    if(category==="All"){
      // menu.map((items)=>{return items})
      setMenues(menu)
      // console.log(menu);
    }
    let newItem=menu.filter((item)=>item.category===category
    )
    setMenues(newItem);

  }

  return <main>
    
<section className='menu section'>

  <div className='title'>
    <h2>our Menu</h2>
   
    <div className='underline'></div>
    <Categories fun={changeCategory} category={category}/>
    <Menu items={menues}/>
  </div>

</section>
  </main> 
}

export default App;
