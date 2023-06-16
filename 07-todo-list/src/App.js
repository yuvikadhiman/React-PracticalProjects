import { useState } from "react";
import Form from "./Form";
import Items from "./Items";

// const getLocalStorage=()=>{
//   let list =localStorage.getItem('list')
//   if(list){
//     list=JSON.parse(localStorage.getItem('list'))
//   }
//   else{
//     list=[];

//   }
//   return list;
// }
const setLocalStorage=(items)=>{
  localStorage.setItem('list',JSON.stringify(items))
}
// const defaultList = JSON.parse(localStorage.getItem('list') || '[]');
const App = () => {
  // const [items, setItems] = useState(defaultList);
  const [items, setItems] = useState([{
    name:'Myntra',
    completed: false,
    id: Math.floor(Math.random() * 100),
  },{
    name:'Amazon',
    completed: false,
    id: Math.floor(Math.random() * 100),
  }]);

  const addItems = (itemName) => {  
    const newItem = {
      name: itemName,
      completed: false,
      id: Math.floor(Math.random() * 100),
    };
    const newItems = [...items, newItem];
    setItems(newItems);
    setLocalStorage(newItem)
  };

  const removeId = (itemid) => {
    const newItems = items.filter((item) => item.id !== itemid);
    setItems(newItems);
    setLocalStorage(newItems)
  };

  return (
    <section className="section-center">
      <Form addItems={addItems} />
      <Items items={items} removeId={removeId}/>
    </section>
  );
};

export default App;
