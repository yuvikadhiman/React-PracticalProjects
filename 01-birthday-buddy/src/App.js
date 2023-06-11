import React, { useState } from 'react'
import data from './data'
import List from './List';
const App = () => {

  const [user,setuser]=useState(data);
  console.log(user)
 
  return (
   <main>
    <section className='container'>
      <h3>{user.length} Birthday Today</h3>
      <List user={user}/>
      <button onClick={(setuser([]))}>Clear all</button>
    </section>
   </main>
  )
}

export default App
