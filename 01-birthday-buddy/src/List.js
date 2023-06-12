import React from "react";
// import App from "./App";
// import Person from './Person'
const List = ({ user, add, remove,removeItem }) => {
    console.log(user);

  

  const Add = () => {
    return (
      <>
        <button className="btn" onClick={add}>
          Add all
        </button>
        
      </>
    );
  };
  const Remove = () => {
    return (
      <>
        <button className="btn" onClick={remove}>
          clear all
        </button>
      </>
    );
  };
  return (
    <section>
      
      {/* <h1>hello</h1> */}
      {user.map((person) => {
        const { id, name, age, image } = person;
        return (
          <div key={id} className="person">
            <img src={image} alt="" className="img" />
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
              <button className="btn" style={{fontSize:'10px',margin:'8px'}} onClick={() => removeItem(id)}>remove</button>
            </div>
          </div>
        );
      })}
  
      {user.length>1 ? <Remove /> : <Add />}
      {/* {user.map((person)=>{
        return(
          <Person key={person.id} {...person} state={state}/>
            )
        })} */}
    </section>
  );
};

export default List;
