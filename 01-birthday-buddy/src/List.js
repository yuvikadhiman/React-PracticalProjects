import React from "react";
import App from "./App";
import Person from './Person'
const List = ({ user }) => {
//   console.log(user);

  return (
    <section>
      {/* <h1>hello</h1> */}
      {/* {user.map((person) => {
        const { id, name, age, image } = person;
        return (
          <div key={id} className="person">
            <img src={image} alt="" className="img" />
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
          </div>
        );
      })} */}

      {user.map((person)=>{
            return(
                <Person key={person.id} {...person}/>
            )
        })}
    </section>
  );
};

export default List;
