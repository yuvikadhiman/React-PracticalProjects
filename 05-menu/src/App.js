import items from "./data";
import { useState } from "react";
import Title from './Title'
import Menu from "./Menu";
const App = ()=> {

  const [menu,setMenu]=useState(items)

  return (
  <main>
    <section className='menu'>

    <Title text={'our menu'}/>
     <Menu menu={menu}/>
    </section>
  </main>
  )
};
export default App;
