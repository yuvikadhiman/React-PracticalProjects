import React, { useState } from "react";
import data from "./data";
import List from "./List";
const App = () => {
  const [user, setuser] = useState(data);
  // console.log(user);

  return (
    <>
    <div className="header">
      <h1>birthday reminder</h1>
    </div>
    <main>
      <section className="container">
        <h3>{user.length} Birthday Today</h3>
        <List user={user}/>
        <button
          type='button'
          className='btn btn-block'
          onClick={() => setuser([])}
        >
          clear all
        </button>

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
