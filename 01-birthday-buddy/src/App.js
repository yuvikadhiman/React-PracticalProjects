import React, { useState } from "react";
import data from "./data";
import List from "./List";
const App = () => {
  const [user, setuser] = useState(data);

  const add=()=>{
    setuser(data);
  };
  const remove=()=>{
    setuser([]);
  };

  const removeItem = (id) => {
    const newPeople = user.filter((person) => person.id !== id);
    setuser(newPeople);
  };
  // console.log(user);
  return (
    <>
    <div className="header">
      <h1>birthday reminder</h1>
    </div>
    <main>
      <section className="container">
        <h3>{user.length} Birthday Today</h3>
        <List user={user} add={add} remove={remove} removeItem={removeItem}/>
        
      </section >
      {/* <section className="container">
        <h3>{user.length} Birthday Today</h3>
        <List user={user} />
        <button type="button" 
        className="btn btn-block" 
        onClick={setuser([])}>
          Clear all
        </button>
      </section> */}
    </main>
    </>
  );
};

export default App;
