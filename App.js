import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';
import menu from './data';

function App() {
  const [menues,setMenues]=useState(menu)

  return <main>
<header>
<h2>Our Menu</h2>;
<div className='underline'></div>
{menues.map((menu)=>{
    return <Menu key={menu.id}{...menu}/>
  })}

</header>
<div className='container'><Categories/></div>
  </main> 
}

export default App;
