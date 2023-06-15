import items from "./data";
import { useState } from "react";
import Title from './Title'
import Menu from "./Menu";
import Categories from "./Categories";

const tempCategory=items.map((item)=>item.category)
// const tempSet= new Set(tempCategory);
// console.log(tempSet)
// const tempItems=['all',...tempSet];
// console.log(tempItems)

const allCategories=['all',...new Set(tempCategory)]
// console.log(allCategories)


const App = ()=> {

  const [menu,setMenu]=useState(items)
  // eslint-disable-next-line no-unused-vars
  const [category,setcategory]=useState(allCategories)
  // console.log(category)

  const filterCategories=(categories)=>{
    if(categories==='all')
    {
      setMenu(items)
      return ;
    }
    const newCategory=items.filter((item)=>item.category===categories)
    console.log(newCategory)
    setMenu(newCategory)
    

  }
  return (
  <main>
    <section className='menu'>

    <Title text={'our menu'}/>
    <Categories category={category} filter={filterCategories}/>
     <Menu menu={menu}/>
    </section>
  </main>
  )
};
export default App;
